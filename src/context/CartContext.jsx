import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    const [purchasedBookIds, setPurchasedBookIds] = useState(() => {
        const saved = localStorage.getItem('purchased_books');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('purchased_books', JSON.stringify(purchasedBookIds));
    }, [purchasedBookIds]);

    const addToCart = (book) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === book.id);
            if (existing) {
                return prev.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prev, { ...book, quantity: 1 }];
        });
    };

    const updateQuantity = (id, amount) => {
        setCartItems(prev => prev.map(item => {
            if (item.id === id) {
                const newQty = item.quantity + amount;
                return newQty > 0 ? { ...item, quantity: newQty } : item;
            }
            return item;
        }));
    };

    const removeFromCart = (id) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const purchaseCurrentCart = () => {
        const newIds = cartItems.map(item => item.id);
        setPurchasedBookIds(prev => [...new Set([...prev, ...newIds])]);
        setCartItems([]);
    };

    const isBookPurchased = (id) => purchasedBookIds.includes(id);

    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalOldPrice = cartItems.reduce((sum, item) => sum + ((bookItem => bookItem.oldPrice || bookItem.price * 1.4)(item) * item.quantity), 0);

    return (
        <CartContext.Provider value={{ 
            cartItems, addToCart, updateQuantity, removeFromCart, purchaseCurrentCart, isBookPurchased,
            totalCount, totalPrice, totalOldPrice 
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);