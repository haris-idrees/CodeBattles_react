import React, { useEffect, useState } from 'react';
import '../components/Navbar.css';
import { GiBiceps } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve the name from session and update the state
    const storedName = sessionStorage.getItem('name');
    setName(storedName);
  }, []);

  const handleLogout = () => {
    // Clear the session and navigate to the login page
    sessionStorage.clear();
    navigate('/signup');
  };

  const handleScrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showButton)



  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className='navbar-logo' onClick={closeMobileMenu} style={{ textDecoration: 'none', color: 'white' }}>
            Code <span>Battles </span>
            <GiBiceps /></Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
             <Link to='/home' className='nav-links'>
                Home
             </Link>
            </li>
            <li className='nav-item'>
            <Link to='/allproblems'className='nav-links'>
                Problems
             </Link>
            </li>
            
            {name && (
              <>
                <li className='nav-item'>
                  <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>{name}</Link>
                </li>
                <li className='nav-item'>
                  <Link to="/timeline" className='nav-links'>Feed</Link>
                </li>
                <li className='nav-item'>
                  <div className='navbar-buttons'>
                    <button type="button" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                </li>
              </>
            )}
            {!name && (
              <li className='nav-item'>
                <div className='navbar-buttons'>
                  <Link to="/signup" className='nav-links'>
                    <button type="button">
                      Login
                    </button>
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>

      
      </nav>
    </>
  );
};

export default Navbar;