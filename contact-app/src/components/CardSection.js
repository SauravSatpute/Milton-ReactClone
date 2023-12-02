import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/CardSection.css'
import BoxText from './BoxText';
import BigText from './BigText';
import Card from './Card';


function CardSection({ image }) {
    return (
        <div className='flex-center'>
            <BoxText text="And so much more... 💼" bgColor="#F1F2F4" />
            <BigText text="Our features to make your life easier" />
            <div className='cardsSection marginTopBottom-60px'>
                <Card image="card1img.png" boxText="Cross-Device Sync"/>
                <Card image="card2img.png" boxText="Task Delegation"/>
                <Card image="card3img.png" boxText="Cross-Device Sync"/>                
            </div>
            <div className='cardsSection marginTopBottom-60px'>
                <Card image="card4img.png" boxText="Voice Command Integration"/>
                <Card image="card5img.png" boxText="Customizable Alerts"/>
                <Card image="card6img.png" boxText="Privacy Protection"/>                
            </div>
        </div>
    );
}

export default CardSection;