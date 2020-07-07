import React from 'react';
import logo from '../assets/logo.png';

export default function Home() {
    return (
        <div className='homepage'>
            <h2 className='home-title'>Nasa Picture Calendar</h2>
            <div className='logo_cont'>                
                <img src={logo} alt='homepage_logo' />
            </div>            
        </div>
    )
}