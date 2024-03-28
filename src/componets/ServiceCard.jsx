import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function ServiceCard({ Data, ImageBaseUrl }) {
    if (Data.card_type === "half") {
        return (
            
            <div className='service-half-card'>
                <Fade bottom>
                <div className='service-card-wrapper'>
                    <div className='dark-label-icon'>
                        <i className={'fa ' + Data.icon}></i>
                    </div>
                    <h4 className='main-title'>{Data.title}</h4>
                    <p className='main-description'>
                        {Data.description}
                    </p>
                    <Link to={"/service/" + Data.slug} className='dark-button-theme rounded-btn'>Read More</Link>
                </div>
                </Fade>
            </div>
        )
    } else {
        return (
            <div className='service-full-card'>
                  <Fade bottom>
                <div className='service-card-wrapper'>
                    <div className='service-card-details'>
                        <div className='dark-label-icon'>
                            <i className={'fa ' + Data.icon}></i>
                        </div>
                        <h4 className='main-title'>{Data.title}</h4>
                        <p className='main-description'>
                            {Data.description}
                        </p>
                        <Link to={"/service/" + Data.slug} className='dark-button-theme rounded-btn'>Read More</Link>
                    </div>
                    <div className='service-card-illustation'>
                        <div className='illustration-container'>
                            <img src={ImageBaseUrl + Data.image_url} alt="service card illustration" />
                        </div>
                    </div>
                </div>
                </Fade>
            </div>
        )
    }
}

export default ServiceCard