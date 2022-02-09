import axios, { AxiosResponse } from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/data/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export const getSearchBubbles = (
  url: string
): Promise<AxiosResponse<any, any>> => API.get(url);

export const getProductList = (url: string): Promise<AxiosResponse<any, any>> =>
  API.get(url);

export const getPicksCategories = (
  url: string
): Promise<AxiosResponse<any, any>> => API.get(url);

export const getPicksList = (url: string): Promise<AxiosResponse<any, any>> =>
  API.get(url);

export const getPopularList = (url: string): Promise<AxiosResponse<any, any>> =>
  API.get(url);

export const getUniqueList = (url: string): Promise<AxiosResponse<any, any>> =>
  API.get(url);

export const getSelectionsCategories = (
  url: string
): Promise<AxiosResponse<any, any>> => API.get(url);
