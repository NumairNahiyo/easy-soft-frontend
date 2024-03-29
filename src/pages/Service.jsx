import React, { useEffect, useState } from 'react'
import Footer from '../componets/footer'
import { Link } from 'react-router-dom'
import EnquiryForm from '../componets/EnquiryForm'
import ServiceData from '../Data/ServiceData.json'
import HomeData from '../Data/HomeData.json'
import UtlisData from '../Data/UtlisData.json'
import ServiceCard from '../componets/ServiceCard'
import Fade from 'react-reveal/Fade';
import Api from '../utlities/api'
function Service() {

    const {label , title} = ServiceData;

    const [service, setService] = useState();
    const [homeSetting, setHomeSetting] = useState();
    useEffect(() => {
        Api.get("/home-setting").then(res => {
            setHomeSetting(res.data.data);
          });
        Api.get("/service").then(res => {
          setService(res.data.data);
        });

      }, []);

    return (
        <div className='team-section service-container'>
            <div className='team-hero-section'>
            <Fade left cascade>
                <div className='hero-detail'>
                    <span className='label'>SERVICES</span>
                    <p>{homeSetting?.service_title}</p>
                </div>
                <div className='hero-image'>
                    {/* <img src="/assets/images/about-us-illustration.png" /> */}
                </div>
                </Fade>
            </div>


            <div className='service-section mt-40'>
        
                <div className='service-card-row'>
                    {service?.map(item => (
                        <ServiceCard Data={item} />
                    ))}
                </div>
       
            </div>
            <EnquiryForm type={"simple"} />
            <Footer homeSetting={homeSetting} />
        </div>
    )
}

export default Service