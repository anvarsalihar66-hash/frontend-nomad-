import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const CheckoutPage = () => {
    const { cartItems, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [loading, setLoading] = useState(false);

    // Функция форматирования номера карты (разделение по 4 цифры)
    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
        setCardNumber(formatted.substring(0, 19));
    };

    // Функция форматирования срока действия (ММ/ГГ)
    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) {
            value = value.substring(0, 2) + '/' + value.substring(2, 4);
        }
        setCardExpiry(value.substring(0, 5));
    };

    const handlePaySubmit = (e) => {
        e.preventDefault();
        
        if (!email || cardNumber.length < 19 || cardExpiry.length < 5 || cardCvv.length < 3) {
            alert('Пожалуйста, введите корректные данные карты и почты!');
            return;
        }

        setLoading(true);

        // Собираем текст купленных книг для отправки в письме
        const orderDetails = cartItems
            .map(item => `• ${item.title} (${item.author}) — ${item.quantity} шт. х ${item.price} ₽`)
            .join('\n');

        // Параметры для твоего шаблона EmailJS
        const templateParams = {
            to_email: email,
            total_price: totalPrice,
            order_details: orderDetails
        };

        // ТВОИ КЛЮЧИ EMAILJS (Вставь их сюда, когда зарегистрируешься на emailjs.com)
        const SERVICE_ID = 'YOUR_SERVICE_ID'; 
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        // Симулируем задержку банка (банк думает 2 секунды)
        setTimeout(() => {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                .then(() => {
                    alert(`🎉 Оплата прошла успешно!\n💵 Сумма: ${totalPrice} ₽\n📩 Электронный чек отправлен на вашу почту: ${email}`);
                    clearCart(); // Настоящее удаление товаров из корзины!
                    navigate('/'); // Возвращаем на главную
                })
                .catch((err) => {
                    console.log('Ключи EmailJS не настроены, но симуляция сработала:', err);
                    // Локальный режим (если лень настраивать EmailJS прямо сейчас, покупка всё равно сработает на фронте!)
                    alert(`🎉 Оплата прошла успешно! (Режим симуляции)\n💵 Сумма: ${totalPrice} ₽\n🛒 Корзина очищена.`);
                    clearCart();
                    navigate('/');
                });
        }, 2000);
    };

    return (
        <div style={{ maxWidth: '450px', margin: '50px auto', padding: '30px', backgroundColor: '#111', borderRadius: '16px', border: '1px solid #222', color: '#fff', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '24px' }}>Оплата заказа</h2>
            <p style={{ textAlign: 'center', color: '#666', fontSize: '14px', marginBottom: '25px' }}>Безопасная оплата картой</p>
            
            <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px', marginBottom: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #282828' }}>
                <span style={{ color: '#aaa', fontSize: '15px' }}>Итого к оплате:</span>
                <span style={{ fontSize: '22px', fontWeight: 'bold', color: '#22c55e' }}>{totalPrice} ₽</span>
            </div>

            <form onSubmit={handlePaySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                {/* Email input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email для отправки чека</label>
                    <input 
                        type="email" 
                        placeholder="customer@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{ padding: '14px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1f1f1f', color: '#fff', fontSize: '16px', outline: 'none' }}
                        required
                    />
                </div>

                {/* Card Number Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '13px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Номер карты</label>
                    <input 
                        type="text" 
                        placeholder="4400 5500 6600 7700"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        style={{ padding: '14px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1f1f1f', color: '#fff', fontSize: '16px', outline: 'none', letterSpacing: '1.5px' }}
                        required
                    />
                </div>

                {/* Expiry and CVV Row */}
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                        <label style={{ fontSize: '13px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Срок действия</label>
                        <input 
                            type="text" 
                            placeholder="MM/YY"
                            value={cardExpiry}
                            onChange={handleExpiryChange}
                            style={{ padding: '14px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1f1f1f', color: '#fff', fontSize: '16px', outline: 'none', textAlign: 'center' }}
                            required
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', flex: 1 }}>
                        <label style={{ fontSize: '13px', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.5px' }}>CVC / CVV</label>
                        <input 
                            type="password" 
                            maxLength="3"
                            placeholder="***"
                            value={cardCvv}
                            onChange={e => setCardCvv(e.target.value.replace(/\D/g, ''))}
                            style={{ padding: '14px', borderRadius: '8px', border: '1px solid #333', backgroundColor: '#1f1f1f', color: '#fff', fontSize: '16px', outline: 'none', textAlign: 'center' }}
                            required
                        />
                    </div>
                </div>

                {/* Submit button with loader */}
                <button 
                    type="submit" 
                    disabled={loading}
                    style={{ 
                        width: '100%', 
                        backgroundColor: loading ? '#444' : '#22c55e', 
                        color: '#fff', 
                        border: 'none', 
                        padding: '16px', 
                        borderRadius: '8px', 
                        fontSize: '16px', 
                        fontWeight: 'bold', 
                        cursor: loading ? 'not-allowed' : 'pointer', 
                        marginTop: '10px',
                        boxShadow: loading ? 'none' : '0 4px 15px rgba(34, 197, 94, 0.3)',
                        transition: 'all 0.2s ease'
                    }}
                >
                    {loading ? '🔒 Обработка платежа банком...' : `Оплатить ${totalPrice} ₽`}
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;