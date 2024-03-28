import React from 'react'
import { Link } from 'react-router-dom'
import EnquiryForm from '../componets/EnquiryForm';
import Footer from '../componets/footer';
import Testimonial from '../componets/Testimonial';
import HeroSectionComponet from '../componets/LandingPage/HeroSection';
import LandingPageData from '../Data/HomeData.json'
import UtlisData from '../Data/UtlisData.json'
import PortfolioData from '../Data/PortfolioData.json'
import AboutSectionComponet from '../componets/LandingPage/AboutSection';
import ServiceSectionComponet from '../componets/LandingPage/ServiceSection';
import ProcessSectionComponet from '../componets/LandingPage/ProcessSection';
import PortfolioCard from '../componets/PortfolioCard';
import Fade from 'react-reveal/Fade';

function LandingPage() {

  const { HeroSection, AboutSection, ServiceSection, ProcessSection } = LandingPageData;
  const { ContactInfo, ImageBaseUrl } = UtlisData;

  const { portfolio_label , portfolio_description , portfolio_items } = PortfolioData;
  return (
    <div className='landing-page'>
      <HeroSectionComponet HeroSectionData={HeroSection} ContactInfo={ContactInfo} ImageBaseUrl={ImageBaseUrl} />
      <AboutSectionComponet AboutSectionData={AboutSection} ImageBaseUrl={ImageBaseUrl} />
      <ServiceSectionComponet ServiceSectionData={ServiceSection} ImageBaseUrl={ImageBaseUrl} />


      <div className='category-language-section'>
        <div className='category-language-details'>
        <Fade left>
          <div className='service-label'>
            <p>CATEGORIES</p>
          </div>
          <h3 className='main-title'>We are <span>Good</span> Experts in</h3>
          <p className='main-description'>
            We stay on top of the latest tech advancements to ensure your project is completed quicklyand uses best of the software and frameworks suitable for your project...
          </p>
          </Fade>
        </div>
        <div className='category-coding-icons'>
        <Fade right>
          <div className='coding-cards'>

            <div className='coding-card'>
              <div className='coding-card-wrapper'>
                <img src="/assets/images/Flutter.png" />
                <p>Flutter</p>
              </div>
            </div>

            <div className='coding-card'>
              <div className='coding-card-wrapper'>
                <img src="/assets/images/react.png" />
                <p>React JS</p>
              </div>
            </div>

            <div className='coding-card'>
              <div className='coding-card-wrapper'>
                <img src="/assets/images/next.png" />
                <p>Next JS</p>
              </div>
            </div>

            <div className='coding-card'>
              <div className='coding-card-wrapper'>
                <img src="/assets/images/CSharp.svg" />
                <p>C Sharp</p>
              </div>
            </div>

            <div className='coding-card'>
              <div className='coding-card-wrapper'>
                <img src="/assets/images/Javascript.svg" />
                <p>Javascript</p>
              </div>
            </div>

            <div className='coding-card'>
              <div className='coding-card-wrapper'>
                <img src="/assets/images/Laravel.svg" />
                <p>Laravel</p>
              </div>
            </div>

          </div>
          </Fade>
        </div>
      </div>

      <ProcessSectionComponet ProcessSectionData={ProcessSection} ImageBaseUrl={ImageBaseUrl} />


   
      <Fade bottom cascade>
      <div className='portfolio-section'>
        <div className='porfolio-detail'>
          <div className='portfolio-label'><p>{portfolio_label}</p></div>
          <p className='main-title'>{portfolio_description}</p>
        </div>
        <div className='portfolio-card-container'>
          {
            portfolio_items?.map((item) => (
              <PortfolioCard Data={item} ImageBaseUrl={ImageBaseUrl} />
            ))
          }
        </div>
        <div className='portfolio-button'>
          <Link to="/portfolio">See All Portfolio</Link>
        </div>
      </div>
      </Fade>

  
      
      <Testimonial />
      <EnquiryForm type={"simple"} />
      <Footer />
    </div>
  )
}

export default LandingPage