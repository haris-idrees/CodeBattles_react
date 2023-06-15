import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../components/RegisterPage.css';
import UpdateProfile from './UpdateProfile';

function Update() {
  return (
    <div className='signupHero'>
      <Navbar />
      <div class="registerBody">
        <UpdateProfile />
      </div>
      <Footer />
    </div>
  )
}

export default Update
