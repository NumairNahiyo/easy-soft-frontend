import React from 'react'
import Fade from 'react-reveal/Fade';

function FeatureCard({ Data }) {
    if (Data.direction === "right") {
        return (
            
            <div className='portfolio-card right-to-left'>
                   <Fade bottom cascade>
                <div className='portfolio-detail'>
                    <div className='label' style={{ width: Data.label_width }}>
                        {Data.label}
                    </div>
                    <h3 className='main-title'>  {Data.title}</h3>
                    <p className='main-description'>
                        {Data.description}
                    </p>
                </div>
                <div className='portfolio-image'>
                    <img src={"https://admin.easysoft.services/uploads/Product/" + Data.image} />
                </div>
                </Fade>
            </div>
        )
    } else {
        return (
            <div className='portfolio-card left-to-right'>
                            <Fade bottom cascade>
                <div className='portfolio-detail'>
                    <div className='label' style={{ width: Data.label_width }}>
                        {Data.label}
                    </div>
                    <h3 className='main-title'>  {Data.title}</h3>
                    <p className='main-description'>
                        {Data.description}
                    </p>
                </div>
                <div className='portfolio-image'>
                <img src={"https://admin.easysoft.services/uploads/Product/" + Data.image} />
                </div>
                </Fade>
            </div>
        )
    }
}

export default FeatureCard