import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import fetcher from './config/swrConfig';

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
