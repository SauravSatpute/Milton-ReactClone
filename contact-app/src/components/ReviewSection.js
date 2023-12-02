import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/ReviewSection.css'
import BoxText from './BoxText';
import BigText from './BigText';
import ReviewCard from './ReviewCard';

function ReviewSection({ text, bgColor }) {
    return (
        <div>
            <div className='flex-center marginTopBottom-100px' >
            <BoxText text="They already love our products 😍" bgColor="#F1F2F4" />
            <BigText text="See what our users say about us" />
        </div>
        
            <div className='ReviewCards container ' id='Reviewcardsscrollbar1'>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
            </div >
            <div className='ReviewCards container' id='Reviewcardsscrollbar2'>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
            </div >
            <div className='ReviewCards container' id='Reviewcardsscrollbar3'>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
                < ReviewCard/>
            </div >
        </div>
    );
}

export default ReviewSection;