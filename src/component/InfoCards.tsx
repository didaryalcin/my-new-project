import React from 'react';
import './InfoCards.css'; // CSS dosyasını import edin

interface InfoData {
    subscriptionExpires: string;
    lastCharge: string;
    totalUsageData: string;
    dailyUsageData: string;
}

interface InfoCardsProps {
    info: InfoData | null;
}

const InfoCards: React.FC<InfoCardsProps> = ({ info }) => (
    <div className="info-cards">
        <div className="info-card">
            <h3>Subscription expires on:</h3>
            <p>{info?.subscriptionExpires || 'Loading...'}</p>
        </div>
        <div className="info-card">
            <h3>Last charge:</h3>
            <p>{info?.lastCharge || 'Loading...'}</p>
        </div>
        <div className="info-card">
            <h3>Total Usage Data:</h3>
            <p>{info?.totalUsageData || 'Loading...'}</p>
        </div>
        <div className="info-card">
            <h3>Daily Usage Data:</h3>
            <p>{info?.dailyUsageData || 'Loading...'}</p>
        </div>
    </div>
);

export default InfoCards;
