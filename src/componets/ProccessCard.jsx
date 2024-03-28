import React from 'react'

function ProccessCard({ data, ImageBaseUrl, index }) {
    return (
        <div className='card-wrapper'>
            <div className='card-box'>
                <div className='step-label'>{data.label}</div>
                <div className='card-icon'>
                    <img src={ImageBaseUrl + data.image_url} />
                </div>
                <div className='card-details'>
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                </div>
            </div>
            {
                index !== 3 && (
                    <div className='card-space-dase'>
                        <img src={ImageBaseUrl + "card-dash.svg"} />
                    </div>
                )
            }
        </div>

    )
}

export default ProccessCard