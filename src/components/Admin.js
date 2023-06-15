import React,{useState,useEffect} from 'react';
import '../components/Admin.css';
import "bootstrap/dist/css/bootstrap.css";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import APIServices from '../APIServices';
import { useNavigate } from 'react-router-dom';
import AdminContent from './AdminContent';


function Admin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const Loginadmin = (event) => {
    
        event.preventDefault();
        APIServices.LoginAdmin({ email,password })
            .then(resp => {
                console.log(resp);
                if (resp.status === 'success') {
                    // Store user details in session
                    sessionStorage.setItem('email', resp.email);
                    sessionStorage.setItem('id', resp.id);
                    sessionStorage.setItem('userType',"Admin")
                    setIsLoggedIn(true);
                }
                else
                {
                    console.log("fail");
                }
              })
      }
      if (isLoggedIn) {
        // Render the new component after successful login
        return <AdminContent />;
      }

    return (
        <div className='adminbody'>
            <h1 className='heading'>
                Welcome to CodeBattles!
            </h1>
           
            <section>
                <div class="form-box">
                    <div class="form-value">
                        <form action="">
                            <h2>Login</h2>
                            <div class="inputbox">
                                <input required type="email" value={email} onChange={e => setEmail(e.target.value)} />
                                <label for=""><AiFillLock /> Email</label>
                            </div>
                            <div class="inputbox">
                                <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />
                                <label for=""><AiFillLock /> Password</label>
                            </div>
                            <div class="forget">
                                <label for=""><input type="checkbox" />Remember Me<br /></label>
                            </div>
                            <button onClick={Loginadmin} >Log in</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Admin
