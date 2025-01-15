import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [totalItems, setTotalItems] = useState(() => {
    const savedTotalItems = localStorage.getItem('totalItems');
    return savedTotalItems ? JSON.parse(savedTotalItems) : 0;
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    setTotalItems(cart.reduce((total, item) => total + item.quantity, 0));
  }, [cart]);

  const addItem = (product, quantity) => {
    const existingProductIndex = cart.findIndex(item => item.id === product.id);
    let updatedCart;

    if (existingProductIndex !== -1) {
      updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity,
      };
    } else {
      updatedCart = [...cart, { ...product, quantity }];
    }

    setCart(updatedCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};
