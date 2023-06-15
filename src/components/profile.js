import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import axios from 'axios';

export default class home extends Component {
    state={details:[]}

  componentDidMount() {
    const userEmail = sessionStorage.getItem('email');

    axios
      .get('http://127.0.0.1:8000/getuserdetails/', {
        params: {
          email: userEmail,
        },
      })
      .then((res) => {
        const data = res.data.user_details;
        console.log('Data fetched from API:', data);
        this.setState({
          details: data,
        });
      })
      .catch((err) => {
        console.log('Error fetching data from API:', err);
      });
  }

  render() {
    const { details } = this.state;
  
    return (
      <div className="signupHero">
        <Navbar />
  
        {/* Display the user details */}
        <h2>User Details:</h2>
    
      <div >
        <p>Name: {details.name}</p>
        <p>Email: {details.email}</p>
        <p>ID: {details.id}</p>
        <p>Age: {details.age}</p>
        <p>Contact: {details.contact}</p>
        <p>Country: {details.country}</p>
        <p>Date of Joining: {details.date_of_joining}</p>
      </div>
  
        <Footer />
      </div>
    );
  }
}