import React from 'react';
import './Footer.css';

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
    return(
        <div className='footer-container'>
            <footer className='footer'>
                <p className='footer-paragraph'>Keeper &copy; {currentYear}</p>
            </footer>
        </div>
    )
}

export default Footer;