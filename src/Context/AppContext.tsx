import { createContext, useState, useCallback, ReactNode } from 'react';
import { AppContextType, Page, CartItem, PizzaItem } from '../Types/types';

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((pizza: PizzaItem) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.item.id === pizza.id);
      if (exists) {
        return prev.map(item =>
          item.item.id === pizza.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { item: pizza, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((pizzaId: number) => {
    setCartItems(prev => {
      const exists = prev.find(item => item.item.id === pizzaId);
      if (exists && exists.quantity > 1) {
        return prev.map(item =>
          item.item.id === pizzaId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      return prev.filter(item => item.item.id !== pizzaId);
    });
  }, []);

  return (
    <AppContext.Provider value={{
      darkMode,
      setDarkMode,
      currentPage,
      setCurrentPage,
      cartItems,
      addToCart,
      removeFromCart
    }}>
      {children}
    </AppContext.Provider>
  );
};