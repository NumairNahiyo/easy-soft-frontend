import React, { useEffect, useState } from 'react'
import Testimonial from '../../componets/Testimonial'
import EnquiryForm from '../../componets/EnquiryForm'
import Footer from '../../componets/footer'
import ProductData from '../../Data/ProductData.json'
import UtlisData from '../../Data/UtlisData.json'
import { useParams } from 'react-router-dom'
import NotFound from '../../componets/404'
import FeatureCard from '../../componets/FeatureCard'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Api from '../../utlities/api'

function ProductPage() {

    const { productPageData } = ProductData;
    const { slug } = useParams();

    const [testimonial , setTestimonial] = useState();
    const [MainData , setPortfolio] = useState();
    const [homeSetting, setHomeSetting] = useState();


    useEffect(() => {
           Api.get("/home-setting").then(res => {
      setHomeSetting(res.data.data);
    });
    
        Api.get("/product").then(res => {
          setPortfolio(res.data.data.find(x => x.slug === slug));
        });
    
        Api.get("/testimonial").then(res => {
            setTestimonial(res.data.data);
          });
      }, []);

    return (
        <div className='portfolio-container'>
                      <Bounce  cascade>
            <div className='porfolio-banner'>
                <img src={"https://admin.easysoft.services/uploads/Product/" + MainData?.banner_image} />
            </div>
            </Bounce>
            <Fade bottom cascade>
            <div className='portfolio-section'>
                <div className='portfolio-details'>
                    <div className='label'>FEATURES</div>
                    <h3>Discover work-boosting features at your fingertips!</h3>
                </div>
                <div className='portfolio-cards'>
                    {
                        MainData?.feature_data.map(item => (
                            <div className='portfolio-card'>
                                <div className='card-wrapper'>
                                    <div className='icon'>
                                        <img src={"https://admin.easysoft.services/uploads/Product/" +item.image} />
                                    </div>
                                    <div className='card-detail'>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            </Fade>
         
            <div className='portfolio-feature-section'>
                {
                    MainData?.main_feature_data.map(item => (
                        <FeatureCard Data={item}  />
                    ))
                }
            </div>

            <Testimonial testimonial={testimonial} />
            <EnquiryForm type="simple" />
            <Footer homeSetting={homeSetting} />
        </div>
    )
}

export default ProductPage