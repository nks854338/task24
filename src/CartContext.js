import React, { createContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { ...action.payload, count: 1 }];
    case "INCREMENT_ITEM":
      return state.map(item =>
        item.sno === action.payload ? { ...item, count: item.count + 1 } : item
      );
    case "DECREMENT_ITEM":
      return state
        .map(item =>
          item.sno === action.payload ? { ...item, count: item.count - 1 } : item
        )
        .filter(item => item.count > 0);
    case "REMOVE_FROM_CART":
      return state.filter(item => item.sno !== action.payload);
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
