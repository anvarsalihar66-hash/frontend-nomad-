import { NavLink } from 'react-router-dom';
import { useCart } from '../context/useCart';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    const { cartItems } = useCart();

    return (
        <header className="header">
            <div className="header-left">
                <NavLink to="/" className="logo">
                    <span className="logo-icon">K</span>
                    Книги
                </NavLink>
                <nav className="nav-menu">
                    <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"} end>Главное</NavLink>
                    <NavLink to="/catalog" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Каталог</NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>О нас</NavLink>
                </nav>
            </div>
            <div className="header-right">
                <button className="search-btn" aria-label="Поиск">
                    <FiSearch size={20} />
                </button>
                <NavLink to="/cart" className="cart-link">
                    <FiShoppingCart size={16} />
                    Корзина ({cartItems.length})
                </NavLink>
            </div>
        </header>
    );
};

export default Header;
