import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function Footer() {
    return (
        <Fade bottom cascade>
        <div className='footer-container'>
            <div className='company-container'>
                <div className='company-logo'>
                    <img src="/assets/images/logo1.png" />
                </div>
                <p>
                    Get your project done by our experts, who have built 200+ products used in 25000+ projects worldwide. As the best product design and development services company, we take up only limited projects where we are a good fit and can deliver value to our clients.
                </p>
                <Link className='btn'>Hire us</Link>
            </div>
            <div className='link-container'>
                <div className='label-footer'>
                    <h3>Quick Links</h3>
                </div>
                <ul>
                    <li>
                        <Link to="/">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/">Terms of use</Link>
                    </li>
                    <li>
                        <Link to="/">Refund Policy</Link>
                    </li>
                </ul>
            </div>

            <div className='link-container'>
                <div className='label-footer'>
                    <h3>Contact</h3>
                </div>
                <ul>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Support</Link>
                    </li>
                    <li>
                        <div className='social-container'>
                            <Link className='social'>
                                <i className='fa fa-facebook'></i>
                            </Link>
                            <Link className='social'>
                                <i className='fa fa-instagram'></i>
                            </Link>
                            <Link className='social'>
                                <i className='fa fa-twitter'></i>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='copyright-contain'>
                <p>Copyright © 2023. Made with love by Easy Soft.</p>
            </div>
        </div>
        </Fade>
    )
}

export default Footer