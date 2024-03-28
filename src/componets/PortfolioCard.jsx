import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function PortfolioCard({ Data, ImageBaseUrl }) {


    if(Data.type === "out_half"){
        return (
            <div className='portfolio-card  out-half-screen'>
            <Link to={"/portfolio/" + Data.slug}>
            <Fade bottom cascade>
                <div className='desktop-image-container'>
                    <img src={ImageBaseUrl + Data.desktop_image_name} />
                </div>

                <div className='mobile-image-container'>
                    <img src={ImageBaseUrl + Data.mobile_image_name} />
                </div>
                </Fade>
            </Link>
        </div>
        )
    }

    if (Data.type === "half") {
        return (
            <div className='portfolio-card  one-half-screen'>
                <Link to={"/portfolio/" + Data.slug}>
                <Fade bottom cascade>
                    <div className='desktop-image-container'>
                        <img src={ImageBaseUrl + Data.desktop_image_name} />
                    </div>

                    <div className='mobile-image-container'>
                        <img src={ImageBaseUrl + Data.mobile_image_name} />
                    </div>
                    </Fade>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='portfolio-card full-screen'>
                <Link to={"/portfolio/" + Data.slug}>
                <Fade bottom cascade>
                    <div className='desktop-image-container'>
                        <img src={ImageBaseUrl + Data.desktop_image_name} />
                    </div>
                    <div className='mobile-image-container'>
                        <img src={ImageBaseUrl + Data.mobile_image_name} />
                    </div>
                    </Fade>
                </Link>
            </div>
        )
    }
}

export default PortfolioCard