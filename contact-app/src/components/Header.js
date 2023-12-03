import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/Header.css'
import BoxText from './BoxText';
import BigText from './BigText';
import HeaderText from './HeaderText';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Header() {
    useEffect(()=> {
        Aos.init({duration:500});
    },[]);
    return (
        <header className='flex-center'>
            
            <HeaderText/>


                {/* img */}
            <img data-aos="zoom-in" src="Superpage.png" className='marginTopBottom-100px'></img>
            
        </header>
    );
}

export default Header;