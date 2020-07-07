import React from 'react';
import logo from  '../assets/logo.png'

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <a href='https://api.nasa.gov' target='_blank' rel="noopener noreferrer">
                    <img src={logo} alt='footer_link' />
                </a>
            </div>
            <p>Created by <a
                    href='https://github.com/AntonKurdo'
                    target='_blank'
                    rel="noopener noreferrer">
                    Anton Kurdo
                </a>
            </p>
        </div>
    )
}