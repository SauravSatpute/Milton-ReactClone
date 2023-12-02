import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/RSection.css'
import BoxText from './BoxText';


function RSection({image}) {
    return (
        <div className='marginTopBottom-80px'>
            <div >
                {/* <BoxText text="Seamless Scheduling" bgColor="#FEE9CB" /> */}
                <div className='section-flex-row-center'>
                    <div className='LeftSection'>
                        <img src={image}></img>
                    </div>

                    <div className='RightSection'>
                <BoxText text="Seamless Scheduling" bgColor="#FEE9CB" />

                        <div className='ParaHeading'>
                            <p>Focus on what matters most for you</p>
                        </div>
                        <div className='marginTopBottom-80px paragraph'>
                            <p>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default RSection;