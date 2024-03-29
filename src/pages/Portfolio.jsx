import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../componets/footer'
import PortfolioCard from '../componets/PortfolioCard'
import PortfolioData from '../Data/PortfolioData.json'
import UtlisData from '../Data/UtlisData.json'
import Fade from 'react-reveal/Fade';
import Api from '../utlities/api'
function Portfolio() {
    const { portfolio_label, portfolio_title } = PortfolioData;
    const [portfolio , setPortfolio] = useState();
    const [homeSetting, setHomeSetting] = useState();

    useEffect(() => {
       
        Api.get("/home-setting").then(res => {
            setHomeSetting(res.data.data);
          });
        Api.get("/portfolio").then(res => {
          setPortfolio(res.data.data);
        });
    
    
      }, []);
    


    return (
        <div className='team-section portfolio-main-container'>
            <Fade left cascade>
                <div className='team-hero-section'>
                    <div className='hero-detail'>
                        <span className='label'>PORTFOLIO</span>
                        <p>{homeSetting?.portfolio_title}</p>
                    </div>
                    <div className='hero-image'>
                        {/* <img src="/assets/images/about-us-illustration.png" /> */}
                    </div>
                </div>
            </Fade>

            <div className='portfolio-section'>
            
                <div className='portfolio-card-container'>
                    {
                        portfolio?.map((item) => (
                            <PortfolioCard Data={item}  />
                        ))
                    }
                </div>
            

            </div>

            <Footer homeSetting={homeSetting} />
        </div>
    )
}

export default Portfolio