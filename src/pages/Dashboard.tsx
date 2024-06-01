import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('No token found. Please login again.');
                navigate('/login'); // Kullanıcıyı login sayfasına yönlendirin
                return;
            }

            try {
                const tableData = await getTableData(token);
                const info = await getInfo(token);
                setTableData(tableData);
                setInfo(info);
            } catch (error) {
                setError('Failed to fetch data. Please try again.');
                console.error("API call error:", error); // Debugging
            }
        };
        fetchData();
    }, [navigate]);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <div className="dashboard-header">
                    <h1>Proxies & Scraping Infrastructure</h1>
                </div>
                <Header info={info} />
                {error && <div className="error">{error}</div>}
                <div className="info-cards">
                    <div className="info-card">Subscription expires on: {info?.subscriptionExpires}</div>
                    <div className="info-card">Last charge: {info?.lastCharge}</div>
                    <div className="info-card">Total Usage Data: {info?.totalUsageData}</div>
                    <div className="info-card">Daily Usage Data: {info?.dailyUsageData}</div>
                </div>
                <Chart data={tableData} />
                <Table data={tableData} />
            </div>
        </div>
    );
};

export default Dashboard;
