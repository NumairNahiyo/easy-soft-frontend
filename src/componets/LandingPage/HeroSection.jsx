import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function HeroSection({ homeSetting }) {
    return (
        <div className='hero-section'>
            <div className='hero-section-detail'>
                <Fade left cascade>
                    <div className='hire-us-label'>
                        <p>HIRE US</p>
                    </div>
                    <h2 className='main-title'>{homeSetting?.title}</h2>
                    <p className='main-description'>{homeSetting?.description}</p>
                    <div className='hero-section-action-btns'>
                        <Link className='dark-button-theme' to="/make-quote">Hire us</Link>
                        <Link to={homeSetting?.skype_link} className='social-button'><i className='fa fa-skype'></i></Link>
                        <Link to={homeSetting?.mail_link} className='social-button'><i className='fa fa-envelope'></i></Link>
                        <Link to={homeSetting?.whatsapp_link} className='social-button'><i className='fa fa-whatsapp'></i></Link>
                    </div>
                </Fade>
            </div>
            <div className='hero-section-illustration'>
                <div className='illustration-container'>
                    <Fade right>
                        <img src={"https://admin.easysoft.services/uploads/" + homeSetting?.image} alt="hero-section-illustration" />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default HeroSection