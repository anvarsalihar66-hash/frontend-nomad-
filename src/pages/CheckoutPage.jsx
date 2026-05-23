import { useState } from 'react';
import { useCart } from '../context/useCart';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const CheckoutPage = () => {
    const { cartItems, totalPrice, purchaseCurrentCart } = useCart();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, '');
        const formatted = value.match(/.{1,4}/g)?.join(' ') || value;
        setCardNumber(formatted.substring(0, 19));
    };

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

        const orderDetails = cartItems
            .map(item => `${item.title} (${item.author}) — ${item.quantity} шт. x ${item.price} ₽`)
            .join('\n');

        const templateParams = {
            to_email: email,
            total_price: totalPrice,
            order_details: orderDetails
        };

        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        setTimeout(() => {
            emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
                .then(() => {
                    alert(`Оплата прошла успешно!\nСумма: ${totalPrice} ₽\nЧек отправлен на: ${email}`);
                    purchaseCurrentCart();
                    navigate('/');
                })
                .catch(() => {
                    alert(`Оплата прошла успешно! (Режим демо)\nСумма: ${totalPrice} ₽`);
                    purchaseCurrentCart();
                    navigate('/');
                });
        }, 2000);
    };

    return (
        <div className="checkout-page">
            <h2>Оплата заказа</h2>
            <p className="checkout-subtitle">Безопасная оплата картой</p>

            <div className="checkout-total">
                <span className="checkout-total-label">Итого к оплате:</span>
                <span className="checkout-total-price">{totalPrice} &#8381;</span>
            </div>

            <form className="checkout-form" onSubmit={handlePaySubmit}>
                <div className="checkout-field">
                    <label>Email для чека</label>
                    <input
                        type="email"
                        placeholder="email@example.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="checkout-field">
                    <label>Номер карты</label>
                    <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        required
                    />
                </div>
                <div className="checkout-card-row">
                    <div className="checkout-field">
                        <label>Срок действия</label>
                        <input
                            type="text"
                            placeholder="ММ/ГГ"
                            value={cardExpiry}
                            onChange={handleExpiryChange}
                            required
                        />
                    </div>
                    <div className="checkout-field">
                        <label>CVV</label>
                        <input
                            type="password"
                            placeholder="***"
                            maxLength="3"
                            value={cardCvv}
                            onChange={e => setCardCvv(e.target.value.replace(/\D/g, '').substring(0, 3))}
                            required
                        />
                    </div>
                </div>
                <button type="submit" className="checkout-submit" disabled={loading}>
                    {loading ? 'Обработка...' : `Оплатить ${totalPrice} ₽`}
                </button>
            </form>
        </div>
    );
};

export default CheckoutPage;
