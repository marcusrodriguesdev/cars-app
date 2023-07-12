import axios, { AxiosInstance } from 'axios';

export const clientSignIn: AxiosInstance = axios.create({
  baseURL: 'https://test-api-y04b.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 1000,
});
