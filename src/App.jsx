import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage'; // Используем для "О нас"
import CheckoutPage from './pages/CheckoutPage';

// Импортируем твои стили
import './App.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="app-wrapper">
                    <Header />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/catalog" element={<CatalogPage />} />
                            <Route path="/cart" element={<CartPage />} />
                            <Route path="/about" element={<ContactPage />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;