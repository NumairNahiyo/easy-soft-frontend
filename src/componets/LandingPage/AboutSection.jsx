import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function AboutSection({AboutSectionData, ImageBaseUrl}) {
    return (

        <Fade bottom cascade>
 
        <div className='about-section'>
            <div className='about-details'>
                <div className='label'>
                    <p>{AboutSectionData.label}</p>
                </div>
                <h2 className='main-title' dangerouslySetInnerHTML={{ __html: AboutSectionData.title}} >
                    
                </h2>
                <p className='main-description'>
                    {AboutSectionData.description}
                </p>
                <Link to="/team" className='dark-button-theme rounded-btn'>Read More</Link>
            </div>
            <div className='about-illustration'>
                <div className='about-illustration-container'>
                    <img src={ImageBaseUrl +  AboutSectionData.image_url} alt="about us illustration" />
                </div>
            </div>
        </div>
        </Fade>
    )
}

export default AboutSection