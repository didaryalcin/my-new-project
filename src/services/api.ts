import axios from 'axios';

const API_URL = 'https://recruitment-api.vercel.app';

interface LoginResponse {
    token: string;
}

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

const login = async (username: string, password: string): Promise<LoginResponse> => {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    return response.data;
};

const getTableData = async (token: string): Promise<TableDataItem[]> => {
    const response = await axios.get(`${API_URL}/get-table`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

const getInfo = async (token: string): Promise<InfoData> => {
    const response = await axios.get(`${API_URL}/get-info`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export { login, getTableData, getInfo };
