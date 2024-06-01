import React from 'react';
import './Table.css'; // CSS dosyasını import edin

interface TableDataItem {
    type: string;
    location: string;
    rentalPeriod: string;
    numberOfIP: number;
    specificPurpose: string;
    date: string;
}

interface TableProps {
    data: TableDataItem[];
}

const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <div className="transactions-history">
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Rental Period</th>
                        <th>Number of IP</th>
                        <th>Specific Purpose</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.type}</td>
                            <td>{item.location}</td>
                            <td>{item.rentalPeriod}</td>
                            <td>{item.numberOfIP}</td>
                            <td>{item.specificPurpose}</td>
                            <td>{item.date}</td>
                            <td>
                                <div className="actions-dropdown">
                                    <button onClick={() => console.log(item.numberOfIP)}>Action</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;





