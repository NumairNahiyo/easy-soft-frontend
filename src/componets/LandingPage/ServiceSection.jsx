import React from 'react'
import ServiceCard from '../ServiceCard'
import Fade from 'react-reveal/Fade';

function ServiceSection({ServiceSectionData , ImageBaseUrl}) {
  return (
    <Fade bottom cascade>
    <div className='service-section'>
    <div className='serive-top-details'>
      <div className='service-label'>
        <p>{ServiceSectionData.label}</p>
      </div>
      <h3>{ServiceSectionData.title}</h3>
    </div>
    <div className='service-card-row'>  
 
        {
            ServiceSectionData?.service_cards?.map((item)=> (
              
                <ServiceCard Data={item} ImageBaseUrl={ImageBaseUrl} />
            ))
        }

    </div>
  </div>
  </Fade>
  )
}

export default ServiceSection