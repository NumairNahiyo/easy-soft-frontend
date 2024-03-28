import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import Fade from 'react-reveal/Fade';
import TestimonialData from '../Data/Testimonial.json';
import UtlisData from '../Data/UtlisData.json';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonial() {


    return (
        <Fade bottom cascade>
        <div className='testimonial-section'>
            <div className='testimonial-detail'>
                <div className='testimonial-label'><p>{TestimonialData.label}</p></div>
                <p className='main-title'>{TestimonialData.title}</p>
            </div>
            <div className='testimonial-container'>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={25}

                    pagination={{ clickable: true }}
                    breakpoints={{ 900: { slidesPerView: 3 }, 768: { slidesPerView: 1 } }}
                    thumbs={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {
                        TestimonialData.cards.map((item) => (
                            <SwiperSlide>
                                <div className='testimonial-card'>
                                    <p className='main-description' dangerouslySetInnerHTML={{ __html: item.review }}>
                                    </p>
                                    <div className='testimonial-stars'>
                                        <div className='stars'>
                                            {
                                                Array.from({ length: 5 }).map((_, index) => {

                                                    if (index < item.stars) {
                                                        return <i key={index} className='fa fa-star dark'></i>;
                                                    } else {
                                                        return <i key={index} className='fa fa-star light'></i>;
                                                    }
                                                })
                                            }


                                        </div>
                                    </div>
                                    <div className='testimonial-user'>
                                        <div className='user-image'>
                                            <img src={UtlisData.ImageBaseUrl+ item.client_image} />
                                        </div>
                                        <p>{item.client_name}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }



                </Swiper>
            </div>

        </div>
        </Fade>
    )
}

export default Testimonial