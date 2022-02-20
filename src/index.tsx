import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import fetcher from './config/swrConfig';

// Refactor: CartContextProvider의 위치 - App component를 감싸게 바꿔주면 나중에 다른 context들도 지저분하지 않게끔 보여줄 수 있음.

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
