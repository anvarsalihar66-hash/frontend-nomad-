import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, totalPrice, totalOldPrice, totalCount } = useCart();
    const navigate = useNavigate();

    const discount = Math.round(totalOldPrice - totalPrice);

    if (cartItems.length === 0) {
        return (
            <div style={{ padding: '60px 20px', textAlign: 'center', color: '#fff' }}>
                <h2>Корзина пуста</h2>
                <p>Вы еще ничего не выбрали. Вернитесь в каталог, чтобы найти что-нибудь интересное.</p>
                <button className="btn-buy-main" style={{ marginTop: '20px' }} onClick={() => navigate('/catalog')}>
                    В каталог
                </button>
            </div>
        );
    }

    return (
        <div className="cart-container" style={{ display: 'flex', gap: '30px', padding: '40px 20px', maxWidth: '1200px', margin: '0 auto', color: '#fff' }}>
            
            {/* Левая часть - Список товаров */}
            <div className="cart-left" style={{ flex: 2, backgroundColor: '#1a1a1a', padding: '24px', borderRadius: '12px' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Корзина ({totalCount})</h2>
                
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', borderBottom: '1px solid #333' }}>
                        
                        {/* Информация о книге (заглушка вместо картинки) */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flex: 1 }}>
                            <div style={{ width: '60px', height: '90px', backgroundColor: '#333', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', padding: '5px', textAlign: 'center', fontWeight: 'bold' }}>
                                {item.title.substring(0, 15)}...
                            </div>
                            <div>
                                <h4 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{item.title}</h4>
                                <p style={{ margin: '0', color: '#aaa', fontSize: '14px' }}>{item.author}</p>
                                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', padding: '0', marginTop: '10px', fontSize: '13px' }}>
                                    Удалить
                                </button>
                            </div>
                        </div>

                        {/* Управление количеством */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <button onClick={() => updateQuantity(item.id, -1)} style={{ width: '32px', height: '32px', backgroundColor: '#333', border: 'none', color: '#fff', borderRadius: '5px', cursor: 'pointer', fontSize: '18px' }}>-</button>
                            <span style={{ fontSize: '16px', fontWeight: 'bold', width: '20px', textAlign: 'center' }}>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} style={{ width: '32px', height: '32px', backgroundColor: '#333', border: 'none', color: '#fff', borderRadius: '5px', cursor: 'pointer', fontSize: '18px' }}>+</button>
                        </div>

                        {/* Цена */}
                        <div style={{ textAlign: 'right', minWidth: '100px' }}>
                            <span style={{ fontSize: '18px', fontWeight: 'bold', display: 'block' }}>{item.price * item.quantity} ₽</span>
                            {discount > 0 && (
                                <span style={{ fontSize: '14px', color: '#666', textDecoration: 'line-through' }}>
                                    {Math.round(item.oldPrice || item.price * 1.4) * item.quantity} ₽
                                </span>
                            )}
                        </div>

                    </div>
                ))}
            </div>

            {/* Правая часть - Сумма и Оформление */}
            <div className="cart-right" style={{ flex: 1, backgroundColor: '#1a1a1a', padding: '24px', borderRadius: '12px', height: 'fit-content' }}>
                <button onClick={() => navigate('/checkout')} style={{ width: '100%', backgroundColor: '#22c55e', color: '#fff', border: 'none', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '20px' }}>
                    Перейти к оформлению
                </button>
                
                <h3 style={{ fontSize: '18px', marginBottom: '15px', borderBottom: '1px solid #333', paddingBottom: '10px' }}>Ваша корзина</h3>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#aaa' }}>
                    <span>Товары ({totalCount})</span>
                    <span>{Math.round(totalOldPrice)} ₽</span>
                </div>
                
                {discount > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px', color: '#ff4d4d' }}>
                        <span>Скидка</span>
                        <span>-{discount} ₽</span>
                    </div>
                )}
                
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', fontWeight: 'bold', paddingTop: '15px', borderTop: '1px solid #333' }}>
                    <span>Общая стоимость</span>
                    <span style={{ color: '#22c55e' }}>{totalPrice} ₽</span>
                </div>
            </div>

        </div>
    );
};

export default CartPage;