import React from 'react'
import Testimonial from '../../componets/Testimonial'
import EnquiryForm from '../../componets/EnquiryForm'
import Footer from '../../componets/footer'

import PortfolioData from '../../Data/PortfolioData.json'
import UtlisData from '../../Data/UtlisData.json'
import { useParams } from 'react-router-dom'
import NotFound from '../../componets/404'

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

function PortfolioPage() {
    const { slug } = useParams();

    const { portfolioPageData } = PortfolioData;


    const MainData = portfolioPageData.find(x => x.slug === slug);

    if (!MainData) {
        return (
            <>
                <NotFound />
                <Footer />
            </>
        )
    }

    return (
        <div className='portfolio-container'>
                 <Bounce  cascade>
            <div className='porfolio-banner'>
                <img src={UtlisData.ImageBaseUrl + MainData.main_banner} />
            </div>
            </Bounce>
            <Fade bottom cascade>
            <div className='portfolio-section'>
                <div className='portfolio-details'>
                    <div className='label'>{MainData.features_section.label}</div>
                    <h3>{MainData.features_section.title}</h3>
                </div>
                <div className='portfolio-cards'>
                    {
                        MainData.features_section.cards.map(item => (
                            <div className='portfolio-card'>
                                <div className='card-wrapper'>
                                    <div className='icon'>
                                        <img src={UtlisData.ImageBaseUrl+item.icon_image} />
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

            <Testimonial />
            <EnquiryForm type="simple" />
            <Footer />
        </div>
    )
}

export default PortfolioPage