import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../componets/footer'
import PortfolioCard from '../componets/PortfolioCard'
import PortfolioData from '../Data/PortfolioData.json'
import UtlisData from '../Data/UtlisData.json'
import Fade from 'react-reveal/Fade';
function Portfolio() {
    const { portfolio_label, portfolio_title, portfolio_items } = PortfolioData;

    return (
        <div className='team-section portfolio-main-container'>
            <Fade left cascade>
                <div className='team-hero-section'>
                    <div className='hero-detail'>
                        <span className='label'>{portfolio_label}</span>
                        <p>{portfolio_title}</p>
                    </div>
                    <div className='hero-image'>
                        {/* <img src="/assets/images/about-us-illustration.png" /> */}
                    </div>
                </div>
            </Fade>

            <div className='portfolio-section'>
            
                <div className='portfolio-card-container'>
                    {
                        portfolio_items?.map((item) => (
                            <PortfolioCard Data={item} ImageBaseUrl={UtlisData.ImageBaseUrl} />
                        ))
                    }
                </div>
            

            </div>

            <Footer />
        </div>
    )
}

export default Portfolio