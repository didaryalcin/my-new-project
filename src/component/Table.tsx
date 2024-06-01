import React, { useState } from 'react';
import './Table.css';

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
    // Dropdown state management
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

    const toggleDropdown = (index: number) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const handleActionClick = (numberOfIP: number) => {
        console.log(numberOfIP);
        setDropdownOpen(null);
    };

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
                                    <button onClick={() => toggleDropdown(index)}>Actions</button>
                                    {dropdownOpen === index && (
                                        <div className="dropdown-menu">
                                            <button onClick={() => handleActionClick(item.numberOfIP)}>Processing</button>
                                            <button onClick={() => handleActionClick(item.numberOfIP)}>In Progress</button>
                                            <button onClick={() => handleActionClick(item.numberOfIP)}>Completed</button>
                                        </div>
                                    )}
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





