import React from 'react'
import { Link } from 'react-router-dom'

import UtlisData from '../Data/UtlisData.json'

function NotFound() {
  const {ImageBaseUrl , NotNoundImage , NotFoundDescription , NotFoundTitle} = UtlisData;
  return (
    <div className='not-found-section'>
      <div className='detail-container'>
            <h3>{NotFoundTitle}</h3>
            <p>{NotFoundDescription}</p>
            <Link to="/">Go Back</Link>
        </div>
        <div className='image-container'>
            <img src={ImageBaseUrl+NotNoundImage} />
        </div>
        
    </div>
  )
}

export default NotFound