import "bootstrap/dist/css/bootstrap.css";
import { AiFillLock } from "react-icons/ai"; 
import React from "react-dom";
import "../components/Login.css";
import { Link } from "react-router-dom";
import APIServices from '../APIServices';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Login(props) {

  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate=useNavigate();
  
  const Loginuser = (event) => {
    
    event.preventDefault();
    APIServices.LoginUser({ email,password })
        .then(resp => {
            console.log(resp);
            if (resp.status === 'success') {
                // Store user details in session
                sessionStorage.setItem('email', resp.email);
                sessionStorage.setItem('name', resp.name);
                sessionStorage.setItem('id', resp.id);
                sessionStorage.setItem('profile_picture',resp.profile_picture);
                navigate('/profile');
            }
            else
            {
                console.log("fail");
            }
          })
  }
  

  
  return (
    <>
      <section>
        <div class="form-box">
            <div class="form-value">
                <form action="">
                    <h2>Login</h2>
                    <div class="inputbox">
                        <input required type="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <label for=""><AiFillLock/> Email</label>
                    </div>
                    <div class="inputbox">
                        <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                        <label for=""><AiFillLock/> Password</label>
                    </div>
                    <div class="forget">
                        <label for=""><input type="checkbox"/>Remember Me<br/></label>
                    </div>
                    <button onClick={Loginuser} >Log in</button>&nbsp;&nbsp;&nbsp;&nbsp; <a href="#" className="forget_anchor">Forget Password</a>
                    <div class="register">
                        <p>Don't have a account?  <Link to="/register">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
        </section>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </>
    );
}

export default Login