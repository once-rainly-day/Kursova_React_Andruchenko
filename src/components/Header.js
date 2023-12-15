import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import projLogo from './proj-logo.png';

const Header = () => {
    return (
        <header>
            <Link to="/"><img src={projLogo} alt="Home" /></Link>
            <p>Породи котів</p>
        </header>
    );
}

export default Header;
