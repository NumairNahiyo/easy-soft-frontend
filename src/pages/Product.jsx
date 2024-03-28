import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../componets/footer'
import ProductData from '../Data/ProductData.json'
import UtlisData from '../Data/UtlisData.json'
import ProductCard from '../componets/ProductCard'
import Fade from 'react-reveal/Fade';
function Product() {

    const { product_label, product_title, product_items } = ProductData;

    return (
        <div className='team-section portfolio-main-container'>
            <div className='team-hero-section'>
            <Fade left cascade>
                <div className='hero-detail'>
                    <span className='label'>{product_label}</span>
                    <p>{product_title}</p>
                </div>
                <div className='hero-image'>
                    {/* <img src="/assets/images/about-us-illustration.png" /> */}
                </div>
                </Fade>
                
            </div>
            <div className='portfolio-section'>
                <div className='portfolio-card-container'>
                    {
                        product_items?.map((item) => (
                            <ProductCard Data={item} ImageBaseUrl={UtlisData.ImageBaseUrl} />
                        ))
                    }
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Product