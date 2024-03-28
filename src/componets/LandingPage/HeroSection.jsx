import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function HeroSection({ HeroSectionData, ContactInfo, ImageBaseUrl }) {
    return (
        <div className='hero-section'>
            <div className='hero-section-detail'>
                <Fade left cascade>
                    <div className='hire-us-label'>
                        <p>{HeroSectionData.label}</p>
                    </div>
                    <h2 className='main-title'>{HeroSectionData.title}</h2>
                    <p className='main-description'>{HeroSectionData.description}</p>
                    <div className='hero-section-action-btns'>
                        <Link className='dark-button-theme' to="/make-quote">Hire us</Link>
                        <Link to={ContactInfo.SkypeLink} className='social-button'><i className='fa fa-skype'></i></Link>
                        <Link to={ContactInfo.MailLink} className='social-button'><i className='fa fa-envelope'></i></Link>
                        <Link to={ContactInfo.WhatsappLink} className='social-button'><i className='fa fa-whatsapp'></i></Link>
                    </div>
                </Fade>
            </div>
            <div className='hero-section-illustration'>
                <div className='illustration-container'>
                    <Fade right>
                        <img src={ImageBaseUrl + HeroSectionData.image_url} alt="hero-section-illustration" />
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default HeroSection