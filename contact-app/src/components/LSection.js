import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/LSection.css'
import BoxText from './BoxText';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function LSection({image}) {
    useEffect(()=> {
        Aos.init({duration:500});
    },[]);

    return (
        <div  className='marginTopBottom-80px' data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
            <div >
                <div className='section-flex-row-center'>
                    <div className='LeftSection' data-aos="zoom-in-right">
                <BoxText text="Seamless Scheduling" bgColor="#CCEAFD" />

                        <div className='ParaHeading'>
                            <p>Focus on what matters most for you</p>
                        </div>
                        <div className='marginTopBottom-80px paragraph'>
                            <p>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks</p>
                        </div>
                    </div>

                    <div className='RightSection'>
                        <img src={image}></img>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default LSection;