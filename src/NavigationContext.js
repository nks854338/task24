import React, { createContext, useContext, useState } from 'react';

export const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('productCard');

  const goToCart = () => setCurrentPage('productCard');
  const goToPayment = () => setCurrentPage('payment');

  return (
    <NavigationContext.Provider value={{ currentPage, goToCart, goToPayment }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);

export default NavigationProvider;
