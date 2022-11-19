import React from "react";
import { Link } from 'react-router-dom';
// import logo from '../../assets/logos/miu-logo.png';
import './Header.css'

const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li> Students </li>
                    <li> Add Students </li>
                    <li> Selected Students </li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;