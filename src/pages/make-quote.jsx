import React, { useEffect, useState } from 'react'
import EnquiryForm from '../componets/EnquiryForm'
import Footer from '../componets/footer'
import Fade from 'react-reveal/Fade';
import Api from '../utlities/api';

function MakeQuote() {
  const [homeSetting, setHomeSetting] = useState();
  useEffect(() => {
    Api.get("/home-setting").then(res => {
      setHomeSetting(res.data.data);
    });

  },[]);

  
  return (
    <div className='service-page-container make-quote-form'
    >
        <div className='service-hero-section'>
        <Fade left cascade>
        <div className='hero-detail'>
          <span className='label'>CONTACT US</span>
          <h3>{homeSetting?.contact_title}</h3>
          <p>{homeSetting?.contact_description}</p>
        </div>
        <div className='hero-image'>
          {/* <img src="/assets/images/about-us-illustration.png" /> */}
        </div>
        </Fade>
      </div>
        <EnquiryForm type="make-qoute" />
        <Footer homeSetting={homeSetting} />
    </div>
  )
}

export default MakeQuote