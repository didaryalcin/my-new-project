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
                <p>{info ? info.subscriptionExpires : 'Loading...'}</p>
            </div>
            <div className="info-card">
                <h2>Last charge:</h2>
                <p>{info ? info.lastCharge : 'Loading...'}</p>
            </div>
            <div className="info-card">
                <h2>Total Usage Data:</h2>
                <p>{info ? info.totalUsageData : 'Loading...'}</p>
            </div>
            <div className="info-card">
                <h2>Daily Usage Data:</h2>
                <p>{info ? info.dailyUsageData : 'Loading...'}</p>
            </div>
        </div>
    );
};

export default InfoCards;
