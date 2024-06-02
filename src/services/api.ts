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
    console.log('API login response:', response.data); // API yanıtını log
    return response.data;
};

const getTableData = async (token: string): Promise<TableDataItem[]> => {
    try {
        const response = await axios.get(`${API_URL}/get-table`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log("Table data response:", response.data); // Debugging
        return response.data;
    } catch (error: any) {
        console.error("getTableData error:", error.response ? error.response.data : error.message); // Error handling
        throw error;
    }
};

const getInfo = async (token: string): Promise<InfoData> => {
    try {
        const response = await axios.get(`${API_URL}/get-info`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log("Info data response:", response.data); // Debugging
        return response.data;
    } catch (error: any) {
        console.error("getInfo error:", error.response ? error.response.data : error.message); // Error handling
        throw error;
    }
};

export { login, getTableData, getInfo };
