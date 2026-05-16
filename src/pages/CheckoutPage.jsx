import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CheckoutPage() {
    const { cart, totalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        email: '',
        address: '',
        phone: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        clearCart();
        setTimeout(() => navigate('/'), 3000);
    };

    if (cart.length === 0 && !submitted) {
        navigate('/cart');
        return null;
    }

    if (submitted) {
        return (
            <div style={{ textAlign: 'center', padding: '4rem' }}>
                <h2>✅ Заказ оформлен!</h2>
                <p>Спасибо за покупку. Мы свяжемся с вами в ближайшее время.</p>
                <Link to="/" className="hero-btn" style={{ marginTop: '1rem', display: 'inline-block' }}>На главную</Link>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h1 className="section-title">Оформление заказа</h1>

            <div style={{ background: 'white', padding: '2rem', borderRadius: '1rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Ваш заказ:</h3>
                    {cart.map(item => (
                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.5rem 0' }}>
                            <span>{item.title} x{item.quantity}</span>
                            <span>{item.price * item.quantity} ₽</span>
                        </div>
                    ))}
                    <div style={{ fontWeight: 'bold', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '1rem' }}>
                        Итого: {totalPrice} ₽
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="filter-group" style={{ flexDirection: 'column', alignItems: 'stretch', marginBottom: '1rem' }}>
                        <label>Имя *</label>
                        <input required value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} />
                    </div>

                    <div className="filter-group" style={{ flexDirection: 'column', alignItems: 'stretch', marginBottom: '1rem' }}>
                        <label>Email *</label>
                        <input type="email" required value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} />
                    </div>

                    <div className="filter-group" style={{ flexDirection: 'column', alignItems: 'stretch', marginBottom: '1rem' }}>
                        <label>Телефон *</label>
                        <input required value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} />
                    </div>

                    <div className="filter-group" style={{ flexDirection: 'column', alignItems: 'stretch', marginBottom: '1rem' }}>
                        <label>Адрес доставки *</label>
                        <input required value={form.address} onChange={(e) => setForm({...form, address: e.target.value})} />
                    </div>

                    <button type="submit" className="checkout-btn" style={{ width: '100%' }}>Подтвердить заказ</button>
                </form>
            </div>
        </div>
    );
}

export default CheckoutPage;