import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function AboutSection({homeSetting}) {
    return (

        <Fade bottom cascade>
 
        <div className='about-section'>
            <div className='about-details'>
                <div className='label'>
                    <p>About us</p>
                </div>
                <h2 className='main-title' dangerouslySetInnerHTML={{ __html: homeSetting?.about_title}} >
                    
                </h2>
                <p className='main-description'>
                    {homeSetting?.about_description}
                </p>
                <Link to="/team" className='dark-button-theme rounded-btn'>Read More</Link>
            </div>
            <div className='about-illustration'>
                <div className='about-illustration-container'>
                    <img src={"https://admin.easysoft.services/uploads/" +  homeSetting?.about_image} alt="about us illustration" />
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default AboutSection