import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/RegisterPage.css';
import Register from './Register';

function RegisterPage() {

  return (
    <div className='signupHero'>
      <Navbar />
      <div class="registerBody">
        <Register />
      </div>
      <Footer />
    </div>
  )
}

export default RegisterPage