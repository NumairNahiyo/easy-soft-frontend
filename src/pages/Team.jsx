import React from 'react'
import Testimonial from '../componets/Testimonial'
import EnquiryForm from '../componets/EnquiryForm'
import Footer from '../componets/footer'

import TeamData from '../Data/About.json'
import UtlisData from '../Data/UtlisData.json'
import Fade from 'react-reveal/Fade';

function Team() {

    const { hero_section, our_mission_section, out_team_section } = TeamData;

    return (
        <div className='team-section'>
            <div className='team-hero-section'>
            <Fade left cascade>
                <div className='hero-detail'>
                    <span className='label'>{hero_section.label}</span>
                    <p>{hero_section.title}</p>
                </div>
                </Fade>
                <Fade right cascade>
                <div className='hero-image'>
                    <img src={UtlisData.ImageBaseUrl + hero_section.image_url} />
                </div>
                </Fade>
            </div>
            <Fade bottom cascade>
            <div className='our-mission-section'>
                <span className='label'>{our_mission_section.label}</span>
                <h3 className='main-title'>{our_mission_section.title}</h3>
                <p className='main-description'>{our_mission_section.description}</p>
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
                        out_team_section.cards.map((item) => (
                            <div className='our-team-card'>
                                <div className='our-team-card-wrapper'>
                                    <div className='image-container'>
                                        <img src={UtlisData.ImageBaseUrl + item.image_url} />
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
            </div>
            <Testimonial />
            <EnquiryForm type={"simple"} />
            <Footer />
        </div>
    )
}

export default Team