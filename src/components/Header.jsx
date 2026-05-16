import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const { cartItems } = useCart();

    return (
        <header className="header">
            <div className="logo">DaDa</div>
            <nav className="nav-menu">
                <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Главная</NavLink>
                <NavLink to="/catalog" className="nav-link">Каталог</NavLink>
                <NavLink to="/about" className="nav-link">О нас</NavLink>
            </nav>
            <NavLink to="/cart" className="cart-link">
                Корзина ({cartItems.length})
            </NavLink>
        </header>
    );
};

export default Header;