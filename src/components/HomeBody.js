import React from 'react';
import '../components/HomeBody.css';
import { Link } from 'react-router-dom';

function HomeBody() {
  const loggedin = sessionStorage.getItem('email');

  return (
    <>
      <div className="main-body">
        <h1>Join the <span>Battle</span></h1>
        {loggedin === null ? (
          <Link to='/register'>
            <button>Get Started</button>
          </Link>
        ) : (
          <Link to='/profile'>
            <button>Go to Profile</button>
          </Link>
        )}
      </div>
    </>
  );
}

export default HomeBody;
