import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/dashboard">
                        <i className="icon-dashboard"></i>
                        <span>Dashboard</span>
                    </Link>
                </li>
                {/* Diğer Sidebar öğeleri buraya eklenebilir */}
            </ul>
        </div>
    );
};

export default Sidebar;

