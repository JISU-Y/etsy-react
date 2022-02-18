import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { SWRConfig } from 'swr';
import fetcher from './config/swrConfig';
import CartContextProvider from './contexts/CartContext';

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <SWRConfig value={{ fetcher }}>
        <Router>
          <App />
        </Router>
      </SWRConfig>
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
