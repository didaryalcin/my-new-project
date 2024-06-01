import React from 'react';

// InfoData tipini import edin veya burada tanımlayın
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
                <>
                    <div>Subscription expires on: {info.subscriptionExpires}</div>
                    <div>Last charge: {info.lastCharge}</div>
                    <div>Total usage data: {info.totalUsageData}</div>
                    <div>Daily usage data: {info.dailyUsageData}</div>
                </>
            )}
        </div>
    );
};

export default Header;
