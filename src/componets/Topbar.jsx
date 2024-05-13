import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Topbar() {
  const [open , setOpen] = useState(false);

  const location = useLocation();

  console.log(location.pathname);
  
  
  const handleChangeMenu = () => {
    if(open){
        setOpen(false);
    }else{
        setOpen(true);
    }
  }



  return (
    <div className='Topbar-container'>
        <div className='logo-section'>
            <div className='image-container'>
                <img src="/assets/images/logo1.png" />
            </div>
        </div>
        <div className={open ? "links-section open" : "links-section"}>
            <ul >
                <li>    
                    <Link to="/" className={location.pathname === "/" ? 'active' : ""}>Home</Link>
                </li> 
                <li>
                    <Link to="/portfolio" className={location.pathname === "/portfolio" ? 'active' : ""} >Portfolio</Link>
                </li>
                {/* <li>
                    <Link to="/products" className={location.pathname === "/products" ? 'active' : ""}>Product</Link>
                </li> */}
                <li>
                    <Link to="/service" className={location.pathname === "/service" ? 'active' : ""}>Service</Link>
                </li>
                <li>
                    <Link to="/team" className={location.pathname === "/team" ? 'active' : ""}>Team</Link>
                </li>
                <li>
                    <Link to="/make-quote" className='hire-us-button-design'>Hire us</Link>
                </li>
            </ul>
        </div>
        <div className='mobile-menu-icon'>
            <div className={open ? 'menu-icon open' : 'menu-icon close'}><i onClick={handleChangeMenu} className='fa fa-bars'></i><i onClick={handleChangeMenu} className='fa fa-close'></i></div>
        </div>
    </div>
  )
}

export default Topbar