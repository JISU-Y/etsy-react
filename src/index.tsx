import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import axios from 'axios';

// swr global config fetcher

const API = axios.create({
  baseURL: 'http://localhost:3000/data/',
  headers: {
    'content-type': 'application/json;charset=UTF-8',
    accept: 'application/json',
  },
});

export const getData = (url: string) => API.get(url);

const fetcher = (url: string) => getData(url);

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <Router>
        <App />
      </Router>
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
