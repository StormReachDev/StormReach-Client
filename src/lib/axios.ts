// Imports:
import { config } from '@/config/EnvironmentVariables';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'stormy-api-key': config.API_KEY,
    withCredentials: true,
  },
});

export default axiosInstance;
