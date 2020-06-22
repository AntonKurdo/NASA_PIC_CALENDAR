import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar({ gallery, isLoader = true }) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <a className="navbar-brand" href="#">NASA Calendar</a>     
            <div className="navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-item nav-link" to="/calendar">Calendar</NavLink>
            <NavLink className="nav-item nav-link" to="/gallery">Gallery <sup>{gallery.length}</sup></NavLink>
                </div>
                <div class= {isLoader ? "spinner-border text-light nav_loader _active" : "spinner-border text-light nav_loader"} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </nav>
    )
}