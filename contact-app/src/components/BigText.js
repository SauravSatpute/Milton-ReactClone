import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/BigText.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function BigText({text}) {
  useEffect(()=> {
    Aos.init({duration:2000});
},[]);

  return (
    <div data-aos="fade-up" className='midHeading marginTopBottom-7px'>
      {text}
    </div >
  );
}

export default BigText;