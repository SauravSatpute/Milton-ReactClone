import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/PriceCard.css'
import BoxText from './BoxText';
import BigText from './BigText';


function PriceCard({ boxText }) {


    return (
        <div className='Card padding-20px'>
            <BoxText text={boxText}/>
            <div className='marginTopBottom-20px'>
                So you can see how incredible our tool is.
            </div>
            <div className='cardImage marginTopBottom-20px' >
                <div className='divBill'>
                     <span>$50</span>/mo<br/>Free for ever
                </div>
            </div>
            <div className='feature-list marginTopBottom-20px'>
                What's included:
                <ul>
                    <li>A cool feature</li>
                    <li>A basic feature</li>
                    <li>A top feature with limitations</li>
                    <li>An incredible feature so useful</li>
                    <li>A top feature</li>
                </ul>
            </div>
        </div>
    );
}

export default PriceCard;