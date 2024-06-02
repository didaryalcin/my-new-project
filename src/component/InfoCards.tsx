import React from 'react';
import './InfoCards.css';

interface InfoData {
    subscriptionExpires: string;
    lastCharge: string;
    totalUsageData: string;
    dailyUsageData: string;
}

interface InfoCardsProps {
    info: InfoData | null;
}

const InfoCards: React.FC<InfoCardsProps> = ({ info }) => {
    return (
        <div className="info-cards">
            <div className="info-card">
                <h2>Subscription expires on:</h2>
                <p>{info ? info.subscriptionExpires : 'July 23, 2023'}</p>
            </div>
            <div className="info-card">
                <h2>Last charge:</h2>
                <p>{info ? info.lastCharge : '$50 on June 23, 2023'}</p>
            </div>
            <div className="info-card">
                <h2>Total Usage Data:</h2>
                <p>{info ? info.totalUsageData : '36.025 GB'}</p>
            </div>
            <div className="info-card">
                <h2>Daily Usage Data:</h2>
                <p>{info ? info.dailyUsageData : '1.025 GB'}</p>
            </div>
        </div>
    );
};

export default InfoCards;
