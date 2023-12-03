import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/CardSection.css'
import BoxText from './BoxText';
import BigText from './BigText';
import Card from './Card';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CardSection({ image }) {

    useEffect(()=> {
        Aos.init({duration:500});
    },[]);
    
    return (
        <div className='flex-center' ta-aos="fade-up">
            <BoxText text="And so much more... 💼" bgColor="#F1F2F4" />
            <BigText text="Our features to make your life easier" />
            <div className='cardsSection marginTopBottom-60px' data-aos="fade-up">
                <Card image="card1img.png" boxText="Cross-Device Sync"/>
                <Card image="card2img.png" boxText="Task Delegation"/>
                <Card image="card3img.png" boxText="Cross-Device Sync"/>                
            </div>
            <div className='cardsSection marginTopBottom-60px' data-aos="fade-up">
                <Card image="card4img.png" boxText="Voice Command Integration"/>
                <Card image="card5img.png" boxText="Customizable Alerts"/>
                <Card image="card6img.png" boxText="Privacy Protection"/>                
            </div>
        </div>
    );
}

export default CardSection;