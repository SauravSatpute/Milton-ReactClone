import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/ReviewCard.css'
import BoxText from './BoxText';
import BigText from './BigText';

function ReviewCard({ animation }) {
    return (

            <div className='ReviewCard'>
                <div className='justify-between-div'>
                    <div className='justify-center-div '>
                        <img src='faceIcon.png'></img>
                        “Highly recommend”
                    </div>
                    <div>
                        ⭐⭐⭐⭐⭐
                    </div>
                </div>
                <div className='Review-text marginTopBottom-20px'>
                    This calendar app has been a lifesaver! I used to forget important events, but now I'm always on top of my schedule.
                </div>
                <div className='justify-between-div Review-text marginTopBottom-20px'>
                    <div>
                        Highly recommend
                    </div>
                    <div>
                        Entrepreneur
                    </div>
                </div>
            </div>
    );
}

export default ReviewCard;