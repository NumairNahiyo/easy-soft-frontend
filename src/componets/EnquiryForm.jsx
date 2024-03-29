import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import Api from '../utlities/api';
function EnquiryForm({ type }) {
    const [homeSetting, setHomeSetting] = useState();
    useEffect(() => {
      Api.get("/home-setting").then(res => {
        setHomeSetting(res.data.data);
      });
  
    },[]);
  

    if (type === "simple") {
        return (
            <Fade bottom cascade>
            <div className='contact-section'>
                <div className='contact-detail'>
                    <div className='contact-label'><p>SEND INQUIRY</p></div>
                    <p className='main-title'>Let's connect and find if we are <span>“Match Made in Heaven⚡”</span></p>
                </div>
                <div className='contact-container'>
                    <div className='contact-form'>
                        <div className='fields'>
                            <div className='half-field '>
                                <label>Name</label>
                                <input type="text" placeholder='Name' />
                                <span className='error-text'>Name is required!</span>
                            </div>
                            <div className='half-field'>
                                <label>Work Email</label>
                                <input type="text" placeholder='Email Address' />
                                <span className='error-text'></span>
                            </div>

                            <div className='half-field'>
                                <label>Country</label>
                                <select>
                                    <option disabled selected>Select Country</option>
                                    <option>Pakistan</option>
                                </select>
                                <span className='error-text'>Country Required</span>
                            </div>
                            <div className='half-field'>
                                <label>Contact Number</label>
                                <input type="text" placeholder='+001-1234567890' />
                                <span className='error-text'></span>
                            </div>
                            <div className='full-field'>
                                <label>Requirement</label>
                                <textarea type="text"></textarea>
                                <span className='error-text'></span>
                            </div>
                            <div className='full-field'>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='contact-image'>
                        <img src="/assets/images/contact-us.png" />
                    </div>
                </div>
            </div>
            </Fade>
        )
    } else {
        return (
            <Fade bottom cascade>
            <div className='contact-section send-quote'>
                <div className='contact-detail'>
                    <div className='contact-label'><p>SEND INQUIRY</p></div>
                    <p className='main-title'>Let's connect and find if we are <span>“Match Made in Heaven⚡”</span></p>
                </div>
                <div className='contact-container'>
                    <div className='contact-form'>
                        <div className='fields'>
                            <div className='half-field '>
                                <label>Name</label>
                                <input type="text" placeholder='Name' />
                                <span className='error-text'>Name is required!</span>
                            </div>
                            <div className='half-field'>
                                <label>Work Email</label>
                                <input type="text" placeholder='Email Address' />
                                <span className='error-text'></span>
                            </div>
                            <div className='half-field'>
                                <label>Phone Number</label>
                                <input type="text" placeholder='+001-1234567890' />
                                <span className='error-text'></span>
                            </div>

                            <div className='half-field'>
                                <label>Skype ID</label>
                                <input type="text" placeholder='-----' />
                                <span className='error-text'></span>
                            </div>
                            <div className='full-field'>
                                <label>Requirements Stage</label>
                                <select>
                                    <option disabled selected>- Select -</option>
                                    <option>I have a clear Scope of Work.</option>
                                    <option>I am Partly sure about my needs.</option>
                                    <option>It's just an idea.</option>
                                </select>
                                <span className='error-text'></span>
                            </div>

                            <div className='full-field'>
                                <label>Why do you think we are good fit Stage</label>
                                <select>
                                    <option disabled selected>- Select -</option>
                                    <option>Work is related to product you created</option>
                                    <option>I have seen your work and reviews</option>
                                    <option>I am your repeat customer</option>
                                    <option>I am not sure yet</option>
                                </select>
                                <span className='error-text'></span>
                            </div>

                            <div className='full-field'>
                                <label>what would be your budget investment budget?</label>
                                <select>
                                    <option disabled selected>- Select -</option>
                                    <option>Under $1000</option>
                                    <option>1000-5000</option>
                                    <option>5000-10000</option>
                                    <option>20000+</option>
                                </select>
                                <span className='error-text'></span>
                            </div>

                            <div className='full-field'>
                                <label>How soon do you need to finish the project?</label>
                                <select>
                                    <option disabled selected>- Select -</option>
                                    <option>Urgent</option>
                                    <option>Moderate</option>
                                    <option>Flexible</option>
                                    <option>Very Flexible</option>
                                </select>
                                <span className='error-text'></span>
                            </div>


                            <div className='full-field'>
                                <label>Tell us about your needs in detail</label>
                                <textarea type="text"></textarea>
                                <span className='error-text'></span>
                            </div>
                            <div className='full-field'>
                                <button>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className='contact-information'>
                        <div className='blue-container-box'>
                            <h3 className='main-title'>Get in touch</h3>
                            <p className='main-description'>{homeSetting?.contact_description}</p>
                            <div className='social-container'>
                            <Link className='social' to={homeSetting?.facebook_link}>
                                <i className='fa fa-facebook'></i>
                            </Link>
                            <Link className='social' to={homeSetting?.instagram_link}>
                                <i className='fa fa-instagram'></i>
                            </Link>
                            <Link className='social' to={homeSetting?.twiter_link   }>
                                <i className='fa fa-twitter'></i>
                            </Link>
                            </div>
                            <ul>
                                <li>
                                    <i className='fa fa-phone'></i> <Link>{homeSetting?.mobile_number}</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </Fade>
        )
    }
}

export default EnquiryForm