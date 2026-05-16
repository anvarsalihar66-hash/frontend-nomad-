import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        // Добавляем уникальный ключ cartId, чтобы можно было добавить две одинаковые книги
        setCartItems((prev) => [...prev, { ...book, cartId: Date.now() + Math.random() }]);
    };

    const removeFromCart = (cartId) => {
        setCartItems((prev) => prev.filter(item => item.cartId !== cartId));
    };

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);