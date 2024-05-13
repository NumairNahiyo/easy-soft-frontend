import React, { useEffect, useState } from 'react'
import Testimonial from '../componets/Testimonial'
import EnquiryForm from '../componets/EnquiryForm'
import Footer from '../componets/footer'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


import TeamData from '../Data/About.json'
import UtlisData from '../Data/UtlisData.json'
import Fade from 'react-reveal/Fade';
import Api from '../utlities/api'

function Team() {

    const { hero_section, our_mission_section, out_team_section } = TeamData;

    const [testimonial , setTestimonial] = useState();
    const [homeSetting, setHomeSetting] = useState();
    useEffect(() => {
        Api.get("/home-setting").then(res => {
          setHomeSetting(res.data.data);
        });
        Api.get("/testimonial").then(res => {
            setTestimonial(res.data.data);
          });
      }, []);
    

    return (
        <div className='team-section'>
            <div className='team-hero-section'>
            <Fade left cascade>
                <div className='hero-detail'>
                    <span className='label'>{hero_section.label}</span>
                    <p>{homeSetting?.about_description}</p>
                </div>
                </Fade>
                <Fade right cascade>
                <div className='hero-image'>
                    <img src={"https://admin.easysoft.services/uploads/" + homeSetting?.about_image} />
                </div>
                </Fade>
            </div>
            <Fade bottom cascade>
            <div className='our-mission-section'>
                <span className='label'>{our_mission_section.label}</span>
                <h3 className='main-title'>{homeSetting?.our_mission_title}</h3>
                <p className='main-description'>{homeSetting?.our_mission_description}</p>
            </div>
            </Fade>
            <Fade bottom cascade>
            <div className='our-team-container'>
                <div className='our-team-detail'>
                    <span className='label'>{out_team_section.label}</span>
                    <h3 className='main-title'>{out_team_section.title}</h3>
                </div>
                <div className='our-team-cards'>
                    {
                        homeSetting?.team_members.map((item) => (
                            <div className='our-team-card'>
                                <div className='our-team-card-wrapper'>
                                    <div className='image-container'>
                                        <img src={"https://admin.easysoft.services/uploads/Team/"  + item.image} />
                                    </div>
                                    <h3>{item.name}</h3>
                                    <p>{item.type}</p>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
            </Fade>

            <div className='progress-container'>
                <div className='label'>MILESTONES</div>
                <p className='main-title'>Our Journey In Numbers</p>

                <div className='progress-card-rows'>

                    {
                        homeSetting?.progress_circle.map((item) => (
                            <div className='progress-card'>
                            <div className='progress-card-wrapper'>
                                <div className='progress-background-design'></div>
                                <CircularProgressbar value={item.value} text={`${item.value}`} />
                                <div className='details'>
                                    <h3>{item.name}</h3>
                                </div>
                            </div>
                        </div>
    
                        ))
                    }
                  
                  
                </div>

            </div>
            <Testimonial testimonial={testimonial}  />
            <EnquiryForm type={"simple"} />
         <Footer homeSetting={homeSetting} />
        </div>
    )
}

export default Team