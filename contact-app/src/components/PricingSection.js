import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/PricingSection.css'
import BoxText from './BoxText';
import BigText from './BigText';
import PriceCard from './PriceCard';


function PricingSection({ text, bgColor }) {


    return (
        <div>
            <div className='flex-center marginTopBottom-100px' >
                <BoxText text="Pricing and plans 💰" bgColor="#F1F2F4" />
                <BigText text="Find the best plan for your needs" />
            </div>
            <div className='justify-center-div '>
                <div className='monthly-annually-btn justify-center-div'>
                    <div className=' justify-center-div'>
                        <button id='monthly' >
                            Monthly
                        </button>
                        <button id='anually'>
                            Annually
                        </button>
                    </div>

                    <div className='save30'>
                        ✨ save 30%
                    </div>
                </div>
            </div>
            <div className='PriceCardsSectionHolder marginTopBottom-80px'>
                <div className='PriceCardsSection'>
                    <PriceCard boxText="Free"/>
                    <PriceCard boxText="Starter"/>
                    <PriceCard boxText="Pro"/>
                </div>
            </div>
        </div>
    );
}

export default PricingSection;