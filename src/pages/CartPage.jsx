import { useCart } from '../context/useCart';
import { useNavigate } from 'react-router-dom';

const getCoverColor = (type) => {
    switch (type) {
        case 'Финансы': case 'Бизнес': return '#1e3a8a';
        case 'Психология': case 'Саморазвитие': return '#065f46';
        case 'Хоррор': return '#991b1b';
        case 'Фантастика': case 'Фэнтези': return '#5b21b6';
        default: return '#854d0e';
    }
};

const CartPage = () => {
    const { cartItems, updateQuantity, removeFromCart, totalPrice, totalCount } = useCart();
    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="cart-empty">
                    <h2>Корзина пуста</h2>
                    <p>Вы ещё ничего не выбрали. Загляните в каталог!</p>
                    <button className="hero-cta" onClick={() => navigate('/catalog')}>
                        В каталог
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <h2>Корзина ({totalCount})</h2>
            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="cart-item-cover">
                                {item.img ? (
                                    <img src={item.img} alt={item.title} />
                                ) : (
                                    <div className="cart-item-cover-fallback" style={{ backgroundColor: getCoverColor(item.type) }}>
                                        {item.title.substring(0, 15)}
                                    </div>
                                )}
                            </div>
                            <div className="cart-item-info">
                                <h4>{item.title}</h4>
                                <p>{item.author}</p>
                                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                                    Удалить
                                </button>
                            </div>
                            <div className="cart-item-qty">
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <div className="cart-item-price">
                                <span className="current">{item.price * item.quantity} &#8381;</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h3 style={{ fontSize: '18px', marginBottom: '16px' }}>Ваша корзина</h3>
                    <div className="cart-summary-row">
                        <span>Товары ({totalCount})</span>
                        <span>{totalPrice} &#8381;</span>
                    </div>
                    <div className="cart-summary-row total">
                        <span>Итого</span>
                        <span>{totalPrice} &#8381;</span>
                    </div>
                    <button className="cart-checkout-btn" onClick={() => navigate('/checkout')}>
                        Перейти к оформлению
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
