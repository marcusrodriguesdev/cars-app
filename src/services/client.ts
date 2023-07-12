import axios, { AxiosInstance } from 'axios';

export const clientSignIn: AxiosInstance = axios.create({
  baseURL: 'https://test-api-y04b.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
  timeout: 1000,
});


export const clientCars: AxiosInstance = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/carros/marcas',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})