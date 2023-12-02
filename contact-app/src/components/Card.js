import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/Card.css'
import BoxText from './BoxText';
import BigText from './BigText';


function Card({ image, boxText }) {
    return (
        <div className='Card'>
            <div className='cardImage marginTopBottom-20px' > <img src={image}></img></div>
            <div className='marginTopBottom-20px'>
                <BoxText text={boxText} bgColor="#F1F2F4" />
            </div>
            <div className='marginTopBottom-20px'>
                <p>Keep your schedule in sync across all your devices, ensuring seamless access to your calendar, events, and tasks wherever you go.</p>
            </div>
        </div>
    );
}

export default Card;