import React from 'react'
import ProccessCard from '../ProccessCard'
import Fade from 'react-reveal/Fade';

const ProcessSection = ({ProcessSectionData, ImageBaseUrl}) => {
  return (

    <Fade bottom cascade>
    <div className='process-section'>
    <div className='process-detail'>
      <div className='process-label'>
        <p>{ProcessSectionData.label}</p>
      </div>
      <p className='main-title'>
      {ProcessSectionData.title}
      </p>
    </div>
    <div className='process-breakup-container'>
      <div className='card-container'>
          {
            ProcessSectionData?.process_cards?.map((item , index) => (
              <ProccessCard data={item} index={index} ImageBaseUrl={ImageBaseUrl} />
            ))
          }
      </div>
    </div>
  </div>
  </Fade>
    )
}
export default ProcessSection