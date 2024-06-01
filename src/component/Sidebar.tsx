import React from 'react';
import { Link } from 'react-router-dom';
import r1 from '../assets/r1.png'; // Görseli import edin
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <img src={r1} alt="Logo" className="sidebar-logo" />
            <ul>
                <li>
                    <Link to="/dashboard">
                        <i className="icon-home"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* Diğer Sidebar öğeleri buraya eklenebilir */}
            </ul>
        </div>
    );
};

export default Sidebar;

