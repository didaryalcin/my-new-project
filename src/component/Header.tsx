import React from 'react';
import './Header.css';

interface InfoData {
    subscriptionExpires: string;
    lastCharge: string;
    totalUsageData: string;
    dailyUsageData: string;
}

interface HeaderProps {
    info: InfoData | null;
}

const Header: React.FC<HeaderProps> = ({ info }) => {
    return (
        <div className="header">
            {info && (
                <div className="info-cards">
                    <div className="info-card">
                        <h4>Subscription expires on:</h4>
                        <p>{info.subscriptionExpires}</p>
                    </div>
                    <div className="info-card">
                        <h4>Last charge:</h4>
                        <p>{info.lastCharge}</p>
                    </div>
                    <div className="info-card">
                        <h4>Total Usage Data:</h4>
                        <p>{info.totalUsageData}</p>
                    </div>
                    <div className="info-card">
                        <h4>Daily Usage Data:</h4>
                        <p>{info.dailyUsageData}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;



