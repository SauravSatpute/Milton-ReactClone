import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/HeaderText.css'
import BoxText from './BoxText';
import BigText from './BigText';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function HeaderText() {
    // useEffect(()=> {
    //     Aos.init({duration:1000});
    // },[]);

    return (
        <div data-aos="fade-up" className='headerDiv flex-center marginTopBottom-80px '>
            <div>
                <BoxText text="An other way to manage time️ 💼" bgColor="#F1F2F4" />
            </div>
            {/* <div className='midHeading marginTopBottom-7px'>
                    Your new favorite calendar 🗓️ app
                </div> */}
            <BigText text="Your new favorite calendar 🗓️ app" />
            <div className='coolAppText marginTop-20px width-550'>
                <p>Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features. </p>
            </div>
            <div className='getStartedBtn marginTop-20px'>
                <button className='glow-on-hover'>
                    Get started, it's free
                </button>
            </div>
            <div className='smallHeaderText marginTop-20px'>
                Free 14 days trials,no credit card needed
            </div>

            <div className='marginTop-20px  flex-row'>
                <div className='width-150px-height-30px position-relative'>
                    <img src='faceIcon.png' className='position-abosolute face1'></img>
                    <img src='faceIcon.png ' className='position-abosolute face2'></img>
                    <img src='faceIcon.png' className='position-abosolute face3'></img>
                    <img src='faceIcon.png' className='position-abosolute face4'></img>
                    <img src='faceIcon.png' className='position-abosolute face5'></img>
                </div>
                <div className=' flex-column-center-start'>
                    <div className='fiveStar'>
                        ⭐⭐⭐⭐⭐ 5.0
                    </div>
                    <div>
                        From 200+ happy users
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderText;