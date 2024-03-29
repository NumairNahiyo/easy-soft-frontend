import React from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
function ProductCard({ Data, ImageBaseUrl }) {


    if(Data.type === "out_half"){
        return (
            <div className='portfolio-card  out-half-screen'>
                
            <Link to={"/product/" + Data.slug}>
            <Fade bottom cascade>
                <div className='desktop-image-container'>
                <img src={"https://admin.easysoft.services/uploads/Product/"  + Data.desktop_banner_image} />
                </div>

                <div className='mobile-image-container'>
                <img src={"https://admin.easysoft.services/uploads/Product/"  + Data.mobile_banner_image} />
                </div>
                </Fade>
            </Link>
        </div>
        )
    }

    if (Data.type === "half") {
        return (
            <div className='portfolio-card  one-half-screen'>
                <Link to={"/product/" + Data.slug}>
                <Fade bottom cascade>
                    <div className='desktop-image-container'>
                    <img src={"https://admin.easysoft.services/uploads/Product/"  + Data.desktop_banner_image} />
                    </div>

                    <div className='mobile-image-container'>
                    <img src={"https://admin.easysoft.services/uploads/Product/"  + Data.mobile_banner_image} />
                    </div>
                    </Fade>
                </Link>
            </div>
        )
    } else {
        return (
            <div className='portfolio-card full-screen'>
                <Link to={"/product/" + Data.slug}>
                <Fade bottom cascade>
                    <div className='desktop-image-container'>
                    <img src={"https://admin.easysoft.services/uploads/Product/"  + Data.desktop_banner_image} />
                    </div>
                    <div className='mobile-image-container'>
                    <img src={"https://admin.easysoft.services/uploads/Product/"  + Data.mobile_banner_image} />
                    </div>
                    </Fade>
                </Link>
            </div>
        )
    }
}

export default ProductCard