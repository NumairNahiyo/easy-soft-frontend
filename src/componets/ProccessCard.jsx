import React from 'react'

function ProccessCard({ data, ImageBaseUrl, index }) {
    return (
        <div className='card-wrapper'>
            <div className='card-box'>
                <div className='step-label'>STEP {index + 1}</div>
                <div className='card-icon'>
                    <img src={"https://admin.easysoft.services/uploads/"  + data.image} />
                </div>
                <div className='card-details'>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </div>
            </div>
            {
                index !== 3 && (
                    <div className='card-space-dase'>
                        <img src={"/assets/images/card-dash.svg"} />
                    </div>
                )
            }
        </div>

    )
}

export default ProccessCard