import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function Footer({homeSetting}) {
    return (
        <Fade bottom cascade>
        <div className='footer-container'>
            <div className='company-container'>
                <div className='company-logo'>
                    <img src="/assets/images/logo1.png" />
                </div>
                <p>
                        {homeSetting?.description}
                </p>
                <Link className='btn'>Hire us</Link>
            </div>
            <div className='link-container'>
                <div className='label-footer'>
                    <h3>Quick Links</h3>
                </div>
                <ul>
                    <li>
                        <Link to="/make-quote">Contact us</Link>
                    </li>
                    <li>
                        <Link to="/trems-conditions">Terms of condition</Link>
                    </li>
                
                </ul>
            </div>

            <div className='link-container'>
                <div className='label-footer'>
                    <h3>Contact</h3>
                </div>
                <ul>
                    <li>
                        <Link to="/team">About</Link>
                    </li>
              
                    <li>
                        <div className='social-container'>
                            <Link className='social' to={homeSetting?.facebook_link}>
                                <i className='fa fa-facebook'></i>
                            </Link>
                            <Link className='social' to={homeSetting?.instagram_link}>
                                <i className='fa fa-instagram'></i>
                            </Link>
                            <Link className='social' to={homeSetting?.twiter_link   }>
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