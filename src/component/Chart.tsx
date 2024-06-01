import React from 'react';
import r2 from '../assets/r2.png'; // r2 görselini import edin
import './Chart.css';

interface TableDataItem {
    type: string;
    location: string;
    rentalPeriod: string;
    numberOfIP: number;
    specificPurpose: string;
    date: string;
}

interface ChartProps {
    data: TableDataItem[];
}

const Chart: React.FC<ChartProps> = ({ data }) => {
    return (
        <div className="chart">
            <img src={r2} alt="Chart" className="chart-image" />
        </div>
    );
};

export default Chart;

