import axios, { AxiosResponse } from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/data/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export const getData = (url: string): Promise<AxiosResponse<any, any>> =>
  API.get(url);
