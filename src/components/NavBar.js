import React from 'react';
import logo from '../IMG_1602.jpeg';
import '../style/navbar.css';

export default function NavBar() {

    return (
        <>
            <nav className="nav">
                <div className="logo-title">
                    <img alt="logo" src={logo} width="130" height="80"></img>
                    <h1>
                        <a href="#home">Shiba Shufflers</a>
                    </h1>
                </div>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#schedule">Schedule</a>
                    </li>
                </ul>
            </nav>
        </>
    );
}