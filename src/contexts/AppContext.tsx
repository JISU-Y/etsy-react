import React from 'react';
import CartContextProvider from './CartContext';

const AppContextProvider: React.FC = ({ children }) => {
  return <CartContextProvider>{children}</CartContextProvider>;
};

export default AppContextProvider;
