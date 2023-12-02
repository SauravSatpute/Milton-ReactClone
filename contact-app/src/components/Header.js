import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/Header.css'
import BoxText from './BoxText';
import BigText from './BigText';
import HeaderText from './HeaderText';

function Header() {
    return (
        <header className='flex-center'>
            
            <HeaderText/>


                {/* img */}
            <img src="Superpage.png" className='marginTopBottom-100px'></img>
            
        </header>
    );
}

export default Header;