import React from 'react';
import '../components/Footer.css';
import { Link } from 'react-router-dom';
import { GiBiceps } from 'react-icons/gi';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/About'>How it works</Link>
                        <Link to='/About'>Testimonials</Link>
                        <Link to='/About'>Careers</Link>
                        <Link to='/About'>Investors</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/About'>Contact</Link>
                        <Link to='/About'>Support</Link>
                        <Link to='/About'>CustomerCare</Link>
                        <Link to='/About'>Feedback</Link>
                    </div>
                </div>

                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/About'>Contact</Link>
                        <Link to='/About'>Support</Link>
                        <Link to='/About'>CustomerCare</Link>
                        <Link to='/About'>Feedback</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/About'>Facebook</Link>
                        <Link to='/About'>Instagram</Link>
                        <Link to='/About'>YouTube</Link>
                        <Link to='/About'>Twitter</Link>
                    </div>
                </div>
            </div>
            <div className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            Code<spam>Battles</spam><GiBiceps></GiBiceps>
                        </Link>
                    </div>
                    <small className='website-rights'>CodeBattles@2023</small>
                    <div className='social-icons'>
                        <Link className='social-icon-link facebook' to='/' target='_blank' aria-aria-label='Facebook'>
                            <i className='fab fa-facebook-f'></i>
                        </Link>
                        <Link className='social-icon-link instagram' to='/' target='_blank' aria-aria-label='Instagram'>
                            <i className='fab fa-instagram'></i>
                        </Link>
                        <Link className='social-icon-link twitter' to='/' target='_blank' aria-aria-label='Twitter'>
                            <i className='fab fa-twitter'></i>
                        </Link>
                        <Link className='social-icon-link youtube' to='/' target='_blank' aria-aria-label='Instagram'>
                            <i className='fab fa-youtube'></i>
                        </Link>
                        <Link className='social-icon-link linkedin' to='/' target='_blank' aria-aria-label='Instagram'>
                            <i className='fab fa-linkedin'></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer
