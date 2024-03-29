import React, { useEffect, useState } from 'react'
import Testimonial from '../../componets/Testimonial'
import EnquiryForm from '../../componets/EnquiryForm'
import Footer from '../../componets/footer'

import PortfolioData from '../../Data/PortfolioData.json'
import UtlisData from '../../Data/UtlisData.json'
import { useParams } from 'react-router-dom'
import NotFound from '../../componets/404'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Api from '../../utlities/api'

function PortfolioPage() {
    const { slug } = useParams();

    const { portfolioPageData } = PortfolioData;
    const [testimonial, setTestimonial] = useState();
    const [MainData, setPortfolio] = useState();

    const [homeSetting, setHomeSetting] = useState();

    useEffect(() => {

        Api.get("/home-setting").then(res => {
            setHomeSetting(res.data.data);
        });

        Api.get("/portfolio").then(res => {
            setPortfolio(res.data.data.find(x => x.slug === slug));
        });

        Api.get("/testimonial").then(res => {
            setTestimonial(res.data.data);
        });
    }, []);


    return (
        <div className='portfolio-container'>
            <Bounce cascade>
                <div className='porfolio-banner'>
                    <img src={"https://admin.easysoft.services/uploads/portfolio/" + MainData?.banner_image} />
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
                            MainData?.feature_data?.map(item => (
                                <div className='portfolio-card'>
                                    <div className='card-wrapper'>
                                        <div className='icon'>
                                            <img src={"https://admin.easysoft.services/uploads/portfolio/" + item.image} />
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

            <Testimonial testimonial={testimonial} />
            <EnquiryForm type="simple" />
            <Footer />
        </div>
    )
}

export default PortfolioPage