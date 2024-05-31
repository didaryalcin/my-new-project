import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Sidebar from '../component/Sidebar';
import Table from '../component/Table';
import Chart from '../component/Chart';
import { getTableData, getInfo } from '../services/api';

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

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const tableData = await getTableData(token);
                const info = await getInfo(token);
                setTableData(tableData);
                setInfo(info);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <Header info={info} />
                <Chart data={tableData} />
                <Table data={tableData} />
            </div>
        </div>
    );
};

export default Dashboard;

