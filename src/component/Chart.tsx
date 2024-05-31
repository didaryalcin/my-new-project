import React from 'react';

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
    // Basit bir dummy chart
    return (
        <div className="chart">
            {/* Dummy chart content */}
            <h2>Chart</h2>
            <p>Here you can render a chart using a library like Chart.js or Recharts.</p>
        </div>
    );
};

export default Chart;
