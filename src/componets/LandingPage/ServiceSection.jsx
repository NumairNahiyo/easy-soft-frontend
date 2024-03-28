import React from 'react'
import ServiceCard from '../ServiceCard'
import Fade from 'react-reveal/Fade';

function ServiceSection({service}) {

  console.log(service);
  return (
    <Fade bottom cascade>
    <div className='service-section'>
    <div className='serive-top-details'>
      <div className='service-label'>
        <p>SERVICES</p>
      </div>
      <h3>What Can We Help You With...</h3>
    </div>
    <div className='service-card-row'>  
 
        {
            service?.map((item)=> (
                <ServiceCard Data={item} />
            ))
        }

    </div>
  </div>
  </Fade>
  )
}

export default ServiceSection