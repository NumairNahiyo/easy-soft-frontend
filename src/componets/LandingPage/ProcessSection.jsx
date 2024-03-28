import React from 'react'
import ProccessCard from '../ProccessCard'
import Fade from 'react-reveal/Fade';

const ProcessSection = ({ homeSetting }) => {
  return (

    <Fade bottom cascade>
      <div className='process-section'>
        <div className='process-detail'>
          <div className='process-label'>
            <p>PROCESS</p>
          </div>
          <p className='main-title'>
            How Product Design And Development Services Works For Your Project
          </p>
        </div>
        <div className='process-breakup-container'>
          <div className='card-container'>
            {
              homeSetting?.progress_data?.map((item, index) => (
                <ProccessCard data={item} index={index}  />
              ))
            }
          </div>
        </div>
      </div>
    </Fade>
  )
}
export default ProcessSection