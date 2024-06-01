import React from 'react';
import r4 from '../assets/r4.png'; // Görseli import edin
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
            <img src={r4} alt="Chart" className="chart-image" />
        </div>
    );
};

export default Chart;
