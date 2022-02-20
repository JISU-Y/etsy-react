import { createContext, ReactNode, useState } from 'react';
import { CartItemProps } from '../types';

export const CartContext = createContext<{
  cartItems: CartItemProps[];
  addItemtoCart?: (newItem: CartItemProps) => void;
  removeItemFromCart?: (id: number) => void;
  changeQuantities?: (id: number, quantity: number) => void;
}>({ cartItems: [] });

interface Props {
  children: ReactNode;
}

const CartContextProvider = ({ children }: Props): JSX.Element => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  const addItemtoCart = (newItem: CartItemProps) =>
    setCartItems(prev => [...prev, newItem]);

  const removeItemFromCart = (id: number) =>
    setCartItems(prev => prev.filter(el => el.id !== id));

  const changeQuantities = (id: number, quantity: number) => {
    const newCartItems = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(newCartItems);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemtoCart, removeItemFromCart, changeQuantities }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
