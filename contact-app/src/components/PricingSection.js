import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/PricingSection.css'
import BoxText from './BoxText';
import BigText from './BigText';
import PriceCard from './PriceCard';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function PricingSection({ text, bgColor }) {
    useEffect(()=> {
        Aos.init({duration:500});
    },[]);
    

    return (
        <div>
            <div className='flex-center marginTopBottom-100px' >
                <BoxText text="Pricing and plans 💰" bgColor="#F1F2F4" />
                <BigText text="Find the best plan for your needs" />
            </div>
            <div className='justify-center-div ' ata-aos="fade-up">
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
            <div className='PriceCardsSectionHolder marginTopBottom-80px' >
                <div className='PriceCardsSection' ata-aos="fade-up">
                    <PriceCard boxText="Free"/>
                    <PriceCard boxText="Starter"/>
                    <PriceCard boxText="Pro"/>
                </div>
            </div>
        </div>
    );
}

export default PricingSection;