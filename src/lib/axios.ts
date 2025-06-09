// Imports:
import { config as env } from '@/config/EnvironmentVariables';
import axios from 'axios';
import Cookies from 'js-cookie';

const axiosInstance = axios.create({
  baseURL: env.PROD_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'stormy-api-key': env.API_KEY,
  },
});

// Interceptors to handle token and errors:
axiosInstance.interceptors.request.use(function (config) {
  const token = Cookies.get(env.COOKIE_NAME);

  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }

  return config;
});

export default axiosInstance;
