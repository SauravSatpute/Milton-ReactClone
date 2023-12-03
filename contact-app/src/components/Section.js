import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/Section.css'
import BoxText from './BoxText';
import BigText from './BigText';
import LSection from  './LSection';
import RSection from './RSection';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Section({text, bgColor}) {
  useEffect(()=> {
    Aos.init({duration:500});
},[]);

  return (
    <div className='flex-center center-div'  >
        <BoxText text="Our main features 🦸🏼" bgColor="#F1F2F4"/>
        <BigText text="Discover your new superpowers"/>
        <LSection image="Superpage.png"/>
        <RSection image="Superpage2.png"/>
        <LSection image="Superpage3.png"/>
        <RSection image="Superpage4.png"/>
        {/* <RSection/>
        <LSection />
        <RSection/> */}
    </div >
  );
}

export default Section;