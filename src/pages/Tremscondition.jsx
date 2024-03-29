import React, { useEffect, useState } from 'react'
import Footer from '../componets/footer'
import Api from '../utlities/api';

function Tremscondition() {

    const [homeSetting, setHomeSetting] = useState();
    useEffect(() => {
      Api.get("/home-setting").then(res => {
        setHomeSetting(res.data.data);
      });
  
    },[]);
  return (
    <div>
        <div className='trems-condition'>
            <h1>Trems Conditions</h1>
            <div className='paragraph' dangerouslySetInnerHTML={{__html: homeSetting?.trems_condition}}>

            </div>
        </div>    

        <Footer />
    </div>
  )
}

export default Tremscondition
