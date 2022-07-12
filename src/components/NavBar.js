import React from 'react';
import logo from '../IMG_1602.jpeg';
import '../style/navbar.css';

export default function NavBar() {

    return (
        <>
            <nav className="nav">
                <div className="logo-title">
                    <img alt="logo" src={logo} width="130" height="80"></img>{' '} 
                    <h1>Shiba Shufflers</h1>
                </div>
                <ul>
                    <li>About</li>
                    <li>Schedule</li>
                </ul>
            </nav>
        </>
    );
}