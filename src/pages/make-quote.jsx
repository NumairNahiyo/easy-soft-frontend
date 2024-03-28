import React from 'react'
import EnquiryForm from '../componets/EnquiryForm'
import Footer from '../componets/footer'
import Fade from 'react-reveal/Fade';

function MakeQuote() {
  return (
    <div className='service-page-container make-quote-form'
    >
        <div className='service-hero-section'>
        <Fade left cascade>
        <div className='hero-detail'>
          <span className='label'>FLUTTER APP DEVELOPMENT</span>
          <h3>We’re On A Mission To Empower Developers To Build Successful Projects Super Quick!</h3>
          <p>We are a result-oriented team of Flutter experts who have built products used in 30k+ digital projects.</p>
        </div>
        <div className='hero-image'>
          {/* <img src="/assets/images/about-us-illustration.png" /> */}
        </div>
        </Fade>
      </div>
        <EnquiryForm type="make-qoute" />
        <Footer />
    </div>
  )
}

export default MakeQuote