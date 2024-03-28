import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';

function Faq({ FaqData }) {

    const [FaqDataState, setFaqData] = useState();

    useEffect(() => {
        setFaqData(FaqData.Questions);
    }, [FaqData]);

    const HandleChange = index => {
        const data = [...FaqDataState];
        if (data[index].open === false) {
            data[index].open = true;
        } else {
            data[index].open = false;
        }

        setFaqData(data);
    }

    return (
        <Fade bottom>
        <div className='faq-container'>
            <div className='faq-container-detail'>
                <div className='label'>{FaqData.label}</div>
                <h3>{FaqData.title}</h3>
                <p>{FaqData.description}</p>
            </div>

            <div className='faq-cards-row'>

                {
                    FaqDataState?.map((item, index) => (
                        <div className={(item.open === false) ? 'faq-card ' : 'faq-card open'}>
                            <div className='faq-wrapper'>
                                <div className='question'>
                                    <h3>{item.Question}</h3>
                                    <button onClick={() => HandleChange(index)}>{(item.open === false) ? <i className='fa fa-plus'></i> : <i className='fa fa-minus'></i>}</button>
                                </div>
                                <div className='answer'>
                                    <p>{item.Answer}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
        </Fade>
    )
}

export default Faq