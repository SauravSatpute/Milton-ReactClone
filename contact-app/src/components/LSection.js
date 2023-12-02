import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/LSection.css'
import BoxText from './BoxText';


function LSection({image}) {
    return (
        <div className='marginTopBottom-80px'>
            <div >
                <div className='section-flex-row-center'>
                    <div className='LeftSection'>
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