import React from 'react'
import Footer from '../componets/footer'
import { Link } from 'react-router-dom'
import EnquiryForm from '../componets/EnquiryForm'
import ServiceData from '../Data/ServiceData.json'
import HomeData from '../Data/HomeData.json'
import UtlisData from '../Data/UtlisData.json'
import ServiceCard from '../componets/ServiceCard'
import Fade from 'react-reveal/Fade';
function Service() {

    const {label , title} = ServiceData;
    const {ServiceSection } = HomeData;
    return (
        <div className='team-section service-container'>
            <div className='team-hero-section'>
            <Fade left cascade>
                <div className='hero-detail'>
                    <span className='label'>{label}</span>
                    <p>{title}</p>
                </div>
                <div className='hero-image'>
                    {/* <img src="/assets/images/about-us-illustration.png" /> */}
                </div>
                </Fade>
            </div>


            <div className='service-section mt-40'>
        
                <div className='service-card-row'>
                    {ServiceSection.service_cards.map(item => (
                        <ServiceCard Data={item} ImageBaseUrl={UtlisData.ImageBaseUrl} />
                    ))}
                </div>
       
            </div>
            <EnquiryForm type={"simple"} />
            <Footer />
        </div>
    )
}

export default Service