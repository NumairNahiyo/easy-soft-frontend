import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Testimonial from '../../componets/Testimonial';
import Faq from '../../componets/Faq';
import EnquiryForm from '../../componets/EnquiryForm';
import Footer from '../../componets/footer';
import ServicePageDataJson from '../../Data/ServiceData.json'
import PortfolioData from '../../Data/PortfolioData.json'
import UtlisData from '../../Data/UtlisData.json'
import Fade from 'react-reveal/Fade';
import NotFound from '../../componets/404';
import PortfolioCard from '../../componets/PortfolioCard';
import Api from '../../utlities/api';

function ServicePage() {
  const { slug } = useParams();

  const { ServicePageData } = ServicePageDataJson;
  const {ImageBaseUrl} = UtlisData;
  const { portfolio_label , portfolio_description , portfolio_items } = PortfolioData;

  const [testimonial , setTestimonial] = useState();
  const [MainData , setPortfolio] = useState();
  const [portfolio , setPortfolioData] = useState();
  const [homeSetting, setHomeSetting] = useState();
  useEffect(() => {
    Api.get("/home-setting").then(res => {
      setHomeSetting(res.data.data);
    });
  
      Api.get("/service").then(res => {
        setPortfolio(res.data.data.find(x => x.slug === slug));
      });
  
      Api.get("/testimonial").then(res => {
          setTestimonial(res.data.data);
        });

        Api.get("/portfolio").then(res => {
          setPortfolioData(res.data.data);
        });
    
    }, []);


  return (
    <div className='service-page-container'>
      <div className='service-hero-section'>
      <Fade left>
        <div className='hero-detail'>
          <span className='label' style={{ width: MainData?.label_width }}>{MainData?.label}</span>
          <h3>{MainData?.title}</h3>
          <p>{MainData?.description}</p>
        </div>
        </Fade>
        <div className='hero-image'>
          {/* <img src="/assets/images/about-us-illustration.png" /> */}
        </div>
      </div>
      <Fade bottom>
      <div className='the-right-fit'>
        <div className='the-right-detail'>
          <span className='label' style={{ width: "100px" }}>THE RIGHT FIT</span>
          <h3 className='main-title'>Who We're Here to Serve?</h3>
        </div>
        <div className='the-right-fit-cards'>
          {
            MainData?.RightFitData?.map((item) => (
              <div className='the-right-fit-card'>
                <div className='card-wrapper'>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }


        </div>
      </div>
      </Fade>

      <Fade bottom>
      <div className='offer-section'>
        <div className='offer-detail'>
          <div className='label' style={{ width: "100px" }}>OFFERING</div>
          <h3>What We Are Great At ?</h3>
        </div>
        <div className='offer-cards-container'>
          {
            MainData?.OfferingData?.map((item , index) => (
              <div className='offer-card'>
                <div className='card-wrapper'>
                  <div className='number-label'>
                    <p>{index+1}</p>
                  </div>
                  <h3>{item.title}</h3>
                  <p className='main-description'>{item.description}</p>
                </div>
              </div>

            ))
          }


        </div>
      </div>

      </Fade>
      
      <div className='portfolio-section'>
        <div className='porfolio-detail'>
          <div className='portfolio-label'><p>{portfolio_label}</p></div>
          <p className='main-title'>{portfolio_description}</p>
        </div>
        <div className='portfolio-card-container'>
          {
            portfolio?.map((item) => (
                <PortfolioCard Data={item} />
            ))
          }
        </div>
        <div className='portfolio-button'>
            <Link to="/portfolio">See All Portfolio</Link>
        </div>
      </div>

      <Testimonial testimonial={testimonial} />
      <Faq FaqData={MainData?.FaqData} />
      <EnquiryForm type='simple' />
      <Footer homeSetting={homeSetting} />


    </div>
  )
}

export default ServicePage