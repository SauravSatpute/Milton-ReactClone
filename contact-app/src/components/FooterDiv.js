import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/FooterDiv.css'


function FooterDiv() {
    return (
        <footer >
            <div className='footerDiv'>
                <div className='Social footerSubDiv'>
                    <div className='footHeader'>#Milton</div>
                    <div >A short text explaining why my startup is so cool</div>
                    <div>© My super start-up</div>
                    <div className='socialImg'>
                        <div><img src='twiiter.png'></img></div>
                        <div><img src='twiiter.png'></img></div>
                        <div><img src='twiiter.png'></img></div>
                    </div>
                </div>
                <div className='Products footerSubDiv'>
                    <div className='footHeader'>Products</div>
                    <div>
                    <ul>
                        <li> <a href="#">Features</a></li>
                        <li> <a href="#">Testimonials</a></li>
                        <li> <a href="#">Pricing</a></li>
                        <li> <a href="#">FAQs</a></li>
                    </ul>
                    </div>
                </div>
                <div className='Resources footerSubDiv'>
                    <div className='footHeader'>
                    Resources
                    </div>
                    <ul>
                        <li> <a href="#">Change log</a></li>
                        <li> <a href="#">Help center</a></li>
                        <li> <a href="#">Blog</a></li>
                        <li> <a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='Others footerSubDiv'>
                    <div className='footHeader'>
                    Others
                    </div>
                    <ul>
                        <li> <a href="#">Privacy</a></li>
                        <li> <a href="#">Terms</a></li>
                        <li> <a href="#">Affiliation</a></li>
                        <li> <a href="#">Press</a></li>
                    </ul>
                </div>
                <div className='FromTheBlog footerSubDiv'>
                    <div className='footHeader'>
                    From the blog
                    </div>
                    <ul >
                        <li> <a href="#">Mastering Your Schedule: Top Time Management Techniques for Balancing Work and Life</a></li>
                        <li> <a href="#">Organizing Your Calendar for Enhanced Productivity and Focus</a></li>
                        <li> <a href="#">The Power of Prioritization: Effective Strategies for Managing Your Time and Tasks</a></li>
                        <li> <a href="#">Maximizing Your Minutes: Essential Tips for Streamlining Your Daily Routine and Calendar</a></li>
                    </ul>
                </div>
            
            </div>
        </footer>
    );
}

export default FooterDiv;