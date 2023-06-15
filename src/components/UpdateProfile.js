import React, { useState, useEffect } from 'react';
import { AiOutlineUserDelete, AiOutlineLock, AiFillContacts } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import APIServices from '../APIServices';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import AdminContent from './AdminContent';

function UpdateProfile() {
  const [details, setDetails] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();
  const { email: userEmail } = useParams();

  useEffect(() => {

    axios
      .get('http://127.0.0.1:8000/getuserdetails/', {
        params: {
          email: userEmail,
        },
      })
      .then((res) => {
        const data = res.data.user_details;
        console.log('Data fetched from API:', data);
        setDetails(data);
        setName(data.name);
        setEmail(data.email);
        setAge(data.age);
        setContact(data.contact);
        setCountry(data.country);
        setPassword(data.password);
      })
      .catch((err) => {
        console.log('Error fetching data from API:', err);
      });
  }, []);

  const updateUser = (event) => {
    event.preventDefault();
    const user_id = details.id; // Get the user ID from the fetched details
    const body = {
      name,
      age,
      email,
      contact,
      password,
      country,
      description
    };

    APIServices.UpdateUser(user_id, body)
      .then((resp) => {
        console.log(resp);
        if(sessionStorage.getItem('userType') === "Admin")
          navigate('/adminContent'); // Navigate to the profile page
        else
          navigate('/profile')
      });
  };


  return (
    <div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Update</h2>
              <div className="inputbox">
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor=""><AiOutlineUserDelete color="#adb5bd70" /> Name</label>
              </div>
              <div className="inputbox">
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor=""><AiOutlineLock color="#adb5bd70" /> Email</label>
              </div>

              <div className="inputbox">
                <input type="text" required value={contact} onChange={(e) => setContact(e.target.value)} />
                <label htmlFor=""><AiFillContacts color="#adb5bd70" /> Contact</label>
              </div>

              <div className="inputbox">
                <input type="number" required value={age} onChange={(e) => setAge(e.target.value)} />
                <label htmlFor=""><FaRegAddressBook color="#adb5bd70" /> Age</label>
              </div>

              <div className="inputbox">
                <input type="text" required value={country} onChange={(e) => setCountry(e.target.value)} />
                <label htmlFor=""><AiOutlineLock color="#adb5bd70" /> Country</label>
              </div>


              <div className="inputbox">
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor=""><FaRegAddressBook color="#adb5bd70" /> password</label>
              </div>

              <div className="inputbox">
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                <label htmlFor=""><FaRegAddressBook color="#adb5bd70" /> Description</label>
              </div>

              <button onClick={updateUser}>Update</button>
            </form>
          </div>
        </div>
      </section>
      <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  );
}

export default UpdateProfile;
