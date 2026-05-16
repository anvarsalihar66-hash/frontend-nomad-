import React from 'react';
import { useCart } from '../context/CartContext';

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className="container">
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p>Вы еще ничего не выбрали.</p>
            ) : (
                <div className="cart-grid">
                    {cartItems.map((item) => (
                        <div key={item.cartId} className="cart-row">
                            <span>{item.title} — {item.author}</span>
                            <b>{item.price} ₽</b>
                            <button onClick={() => removeFromCart(item.cartId)} className="del-btn">Удалить</button>
                        </div>
                    ))}
                    <div className="cart-total">
                        <h3>Итого: {total} ₽</h3>
                        <button className="btn-white" onClick={() => alert('Оплата прошла!')}>Оплатить</button>
                        <button className="btn-outline" onClick={clearCart} style={{marginLeft: '10px'}}>Очистить</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartPage;