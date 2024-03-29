import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../componets/footer'
import ProductData from '../Data/ProductData.json'
import UtlisData from '../Data/UtlisData.json'
import ProductCard from '../componets/ProductCard'
import Fade from 'react-reveal/Fade';
import Api from '../utlities/api'
function Product() {

    const { product_label, product_title } = ProductData;

    const [product , setProduct] = useState();
    const [homeSetting, setHomeSetting] = useState();
    useEffect(() => {
        
        Api.get("/home-setting").then(res => {
            setHomeSetting(res.data.data);
          });
    
        Api.get("/product").then(res => {
            setProduct(res.data.data);
        });
      }, []);
    return (
        <div className='team-section portfolio-main-container'>
            <div className='team-hero-section'>
            <Fade left cascade>
                <div className='hero-detail'>
                    <span className='label'>PRODUCT</span>
                    <p>{homeSetting?.product_title}</p>
                </div>
                <div className='hero-image'>
                    {/* <img src="/assets/images/about-us-illustration.png" /> */}
                </div>
                </Fade>
                
            </div>
            <div className='portfolio-section'>
                <div className='portfolio-card-container'>
                    {
                        product?.map((item) => (
                            <ProductCard Data={item}  />
                        ))
                    }
                </div>

            </div>

            <Footer homeSetting={homeSetting} />
        </div>
    )
}

export default Product