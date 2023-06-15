import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/Signup.css';
import Login from './Login';


function SignUp()
 {

    return (
      <div className='signupHero'>
        <Navbar/>
        <div class="signupBody">
        <Login/>
        </div>
        <Footer/> 
      </div>
    )
  }

  export default SignUp
