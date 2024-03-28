import React from 'react'
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

function ServicePage() {
  const { slug } = useParams();

  const { ServicePageData } = ServicePageDataJson;
  const {ImageBaseUrl} = UtlisData;
  const { portfolio_label , portfolio_description , portfolio_items } = PortfolioData;

  const MainData = ServicePageData.find(x => x.slug === slug);

  if (!MainData) {
    return (
      <>
        <NotFound />
        <Footer />
      </>
    )
  }


  return (
    <div className='service-page-container'>
      <div className='service-hero-section'>
      <Fade left>
        <div className='hero-detail'>
          <span className='label' style={{ width: MainData.heroSection.labelWidth }}>{MainData.heroSection.label}</span>
          <h3>{MainData.heroSection.title}</h3>
          <p>{MainData.heroSection.description}</p>
        </div>
        </Fade>
        <div className='hero-image'>
          {/* <img src="/assets/images/about-us-illustration.png" /> */}
        </div>
      </div>
      <Fade bottom>
      <div className='the-right-fit'>
        <div className='the-right-detail'>
          <span className='label' style={{ width: MainData.RightFit.labelWidth }}>{MainData.RightFit.label}</span>
          <h3 className='main-title'>{MainData.RightFit.title}</h3>
        </div>
        <div className='the-right-fit-cards'>
          {
            MainData?.RightFit.RightFitCards?.map((item) => (
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
          <div className='label' style={{ width: MainData.offeringData.labelWidth }}>{MainData.offeringData.label}</div>
          <h3>{MainData.offeringData.title}</h3>
        </div>
        <div className='offer-cards-container'>
          {
            MainData?.offeringData?.offeringCards?.map((item) => (
              <div className='offer-card'>
                <div className='card-wrapper'>
                  <div className='number-label'>
                    <p>{item.Number}</p>
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
            portfolio_items?.map((item) => (
                <PortfolioCard Data={item} ImageBaseUrl={ImageBaseUrl} />
            ))
          }
        </div>
        <div className='portfolio-button'>
            <Link to="/portfolio">See All Portfolio</Link>
        </div>
      </div>

      <Testimonial />
      <Faq FaqData={MainData.FaqData} />
      <EnquiryForm type='simple' />
      <Footer />


    </div>
  )
}

export default ServicePage