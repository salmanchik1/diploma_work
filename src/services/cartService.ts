import axios from "axios";

const MOCK_ENDPOINT = "https://run.mocky.io/v3/your-mock-id-here";

export const fetchMockData = async () => {
    try {
        const response = await axios.get(MOCK_ENDPOINT);
        return response.data;
    } catch (error) {
        console.error("Error fetching mock data:", error);
        throw error;
    }
};
