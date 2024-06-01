import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import Table from '../component/Table';
import Chart from '../component/Chart';
import { getTableData, getInfo } from '../services/api';
import './Dashboard.css';

interface TableDataItem {
    type: string;
    location: string;
    rentalPeriod: string;
    numberOfIP: number;
    specificPurpose: string;
    date: string;
}

interface InfoData {
    subscriptionExpires: string;
    lastCharge: string;
    totalUsageData: string;
    dailyUsageData: string;
}

const Dashboard: React.FC = () => {
    const [tableData, setTableData] = useState<TableDataItem[]>([]);
    const [info, setInfo] = useState<InfoData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const tableData = await getTableData(token);
                    const info = await getInfo(token);
                    setTableData(tableData);
                    setInfo(info);
                } catch (error) {
                    setError('Failed to fetch data. Please try again.');
                    console.error("API call error:", error); // Debugging
                }
            } else {
                setError('No token found. Please login again.');
            }
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <Header info={info} />
                {error && <div className="error">{error}</div>}
                <Chart data={tableData} />
                <div className="info-cards">
                    <div className="info-card">Subscription expires on: {info?.subscriptionExpires}</div>
                    <div className="info-card">Last charge: {info?.lastCharge}</div>
                    <div className="info-card">Total Usage Data: {info?.totalUsageData}</div>
                    <div className="info-card">Daily Usage Data: {info?.dailyUsageData}</div>
                </div>
                <Table data={tableData} />
            </div>
        </div>
    );
};

export default Dashboard;
