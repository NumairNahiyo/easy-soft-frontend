import React, { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';

function Faq({ FaqData }) {

    const [FaqDataState, setFaqData] = useState();

    useEffect(() => {
        setFaqData(FaqData);
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
                <div className='label'>FAQ</div>
                <h3>FAQ: Your Questions, Our Answers</h3>
                <p>Don’t find your answer here? just send us a message for any query.</p>
            </div>

            <div className='faq-cards-row'>

                {
                    FaqDataState?.map((item, index) => (
                        <div className={(item.open === false) ? 'faq-card ' : 'faq-card open'}>
                            <div className='faq-wrapper'>
                                <div className='question'>
                                    <h3>{item.question}</h3>
                                    <button onClick={() => HandleChange(index)}>{(item.open === false) ? <i className='fa fa-plus'></i> : <i className='fa fa-minus'></i>}</button>
                                </div>
                                <div className='answer'>
                                    <p>{item.answer }</p>
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