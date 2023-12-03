import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/NavigationBar.css'

function NavigationBar() {
  return (
    <div>
      <nav>
        <div className="navBar fixed-nav-bar" >
          <div className="logo nav-size">
            <a href="#"># Milton</a>
          </div>
          <div>
            <ul className="navLinks ">
              <li className='nav-size'><a href=''>Features</a></li>
              <li className='nav-size'><a href=''>Testimonial</a></li>
              <li className='nav-size'><a href=''>Pricing</a></li>
              <li className='nav-size'><a href=''>FAQs</a></li>
              <li className='nav-size'><a href=''>Blog</a></li>
            </ul>
          </div>
          <div className="logInGetStartedBtns">
            <div className='nav-size'>
              <button id="logIn">Log in</button>
            </div>
            <div className='nav-size'>
              <button id="getStarted">Get Started</button>
            </div>
          </div>
        </div>
      </nav >

      <hr />
    </div >
  );
}

export default NavigationBar;