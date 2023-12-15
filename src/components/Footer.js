import React from 'react';
import './Footer.scss';
import ytLogo from './yt-logo.png';
import githubLogo from './github-logo.png';
import linkedinLogo from './linkedin-logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <p>&copy; Андрущенко Андрій — 2023</p>
                <div className="links">
                    <a href="https://youtube.com" target="_blank"><img src={ytLogo} alt="YouTube Logo" /></a>
                    <a href="https://github.com" target="_blank"><img src={githubLogo} alt="GitHub Logo" /></a>
                    <a href="https://linkedin.com" target="_blank"><img src={linkedinLogo} alt="LinkedIn Logo" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;