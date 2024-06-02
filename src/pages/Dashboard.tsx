import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import Table from '../component/Table';
import Chart from '../component/Chart';
import InfoCards from '../component/InfoCards';
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
            console.log('Stored token:', token);
            if (!token) {
                setError('No token found. Please login again.');
                navigate('/login');
                return;
            }

            try {
                const tableData = await getTableData(token);
                console.log("Fetched table data:", tableData);
                const info = await getInfo(token);
                console.log("Fetched info data:", info);
                setTableData(tableData);
                setInfo(info);
            } catch (error: any) {
                const errorMessage = error.response ? error.response.data.message : error.message;
                setError(`Failed to fetch data. ${errorMessage}`);
                console.error("API call error:", error);
            }
        };
        fetchData();
    }, [navigate]);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <div className="special-offer">
                    Special Offer! Get Complete Free Proxy 10 MB Proxy, without credit card. Start Free Trial
                </div>
                <div className="dashboard-header">
                    <h1>Proxies & Scraping Infrastructure</h1>
                </div>
                <div className="nav-tabs">
                    <button>My Proxies</button>
                    <button className="active">Dashboard</button>
                </div>
                <Header info={info} />
                {error && <div className="error">{error}</div>}
                <InfoCards info={info} />
                <Chart data={tableData} />
                <Table data={tableData} />
            </div>
        </div>
    );
};

export default Dashboard;




