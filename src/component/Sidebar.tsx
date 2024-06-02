import React from 'react';
import { Link } from 'react-router-dom';
import r5 from '../assets/r5.png';
import r6 from '../assets/r6.png'; 
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/dashboard">
                        <img src={r5} alt="Dashboard Icon" className="icon-home" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/somepage">
                        <img src={r6} alt="Some Page Icon" className="icon-somepage" />
                        <span>Some Page</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
