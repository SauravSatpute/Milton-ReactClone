import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/NavigationBar.css'

function NavigationBar() {
  return (
    <div>
      <nav>
        <div className="navBar">
          <div className="logo nav-size">
            <a href="#"># Milton</a>
          </div>
          <div>
            <ul className="navLinks ">
              <li className='nav-size'>Features</li>
              <li className='nav-size'>Testimonial</li>
              <li className='nav-size'>Pricing</li>
              <li className='nav-size'>FAQs</li>
              <li className='nav-size'>Blog</li>
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