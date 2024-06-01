import React from 'react';
import './Header.css';
import someIcon from '../assets/some-icon.png'; // İkonu assets klasöründen import edin

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={someIcon} alt="Some Icon" className="header-icon" />
            <h1>Proxies & Scraping Infrastructure</h1>
        </header>
    );
};

export default Header;


