import React from 'react';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <a href='https://api.nasa.gov' target='_blank' rel="noopener noreferrer">
                    <img src='./assets/logo.png' alt='footer_link' />
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