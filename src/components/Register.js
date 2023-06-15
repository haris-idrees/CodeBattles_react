import React, { useState, useEffect } from 'react'
import { AiOutlineUserDelete, AiOutlineLock, AiOutlineFieldTime, AiFillContacts } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import APIServices from '../APIServices';
import { useNavigate } from 'react-router-dom';

function Register(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState()
    const [contact, setContact] = useState('')
    const [user_type, setuser_type] = useState('Simple User')
    const [password, setPassword] = useState('')
    const [profile_picture] = useState('')
    const [date_of_joining, setdate_of_joining] = useState('')
    const [country,setCountry] = useState('')
    const navigate = useNavigate();

    
    const registerUser = (event) => {
        event.preventDefault();
        APIServices.insertUser({ name, age, email, contact, password,country, date_of_joining })
            .then(resp => {
                console.log(resp);
                if (resp.status === 'success') {
                    navigate('/signup');
                }
              })
    }

    const getCurrentDateInput = () => {

        const dateObj = new Date();

        // get the month in this format of 04, the same for months
        const month = ("0" + (dateObj.getMonth() + 1)).slice(-2);
        const day = ("0" + dateObj.getDate()).slice(-2);
        const year = dateObj.getFullYear();

        const shortDate = `${year}-${month}-${day}`;

        return shortDate;
    };

    const passwordMatch = () => {
        if (this.state.password == this.state.confirmPassword && this.state.password != "" && this.state.confirmPassword != "") {
            this.state.error = "password matched";
        }
        else
            this.state.error = "password do not match"
    }


    return (
        <div>
            <section>
                <div class="form-box">
                    <div class="form-value">
                        <form action="">
                            <h2>Register</h2>
                            <div class="inputbox">
                                <input type="text" required value={name} onChange={e => setName(e.target.value)} />
                                <label for=""><AiOutlineUserDelete color="#adb5bd70" /> Name</label>
                            </div>
                            <div class="inputbox">
                                <input type="email" required value={email} onChange={e => setEmail(e.target.value)} />
                                <label for=""><AiOutlineLock color="#adb5bd70" /> Email</label>
                            </div>

                            <div class="inputbox">
                                <input type="text" required value={contact} onChange={e => setContact(e.target.value)} />
                                <label for=""><AiFillContacts color="#adb5bd70" /> Contact</label>
                            </div>

                            <div class="inputbox">
                                <input type="number" required value={age} onChange={e => setAge(e.target.value)} />
                                <label for=""><FaRegAddressBook color="#adb5bd70" /> Age</label>
                            </div>

                            <div class="inputbox">
                                <input type="text" required onChange={e => setCountry(e.target.value)} />
                                <label for=""><AiOutlineLock color="#adb5bd70" /> Country</label>
                            </div>


                            <div class="inputbox">
                                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                                <label for=""><FaRegAddressBook color="#adb5bd70" /> password</label>
                            </div>
                            <div class="inputbox">
                                <input type="password" required />
                                <label for=""><FaRegAddressBook color="#adb5bd70" /> confirm password</label>
                            </div>

                            <div class="forget">
                                <label for=""><input type="checkbox" />Remember Me<br /></label>
                            </div>
                            <button onClick={registerUser}>SignUp</button>&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" className="forget_anchor">Forget Password</a>
                        </form>
                    </div>
                </div>


            </section>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    )
}

export default Register