import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/data/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

const getData = (url: string) =>
  API.get(url)
    .then(response => response.data)
    .catch(err => console.error(err));

const fetcher = async (url: string) => await getData(url);

export default fetcher;
