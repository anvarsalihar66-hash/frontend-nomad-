import { useState } from 'react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';
import Carousel from '../components/Carousel';

function HomePage() {
    const [selectedPlan, setSelectedPlan] = useState('year');

    const recommendedBooks = books.slice(0, 10);
    const popularBooks = books.slice(0, 10);
    const newBooks = books.slice(5, 15);

    const categories = [
        { title: 'Финансы', color: '#1e3a8a', books: books.filter(b => b.type === 'Финансы' || b.type === 'Бизнес') },
        { title: 'Психология', color: '#065f46', books: books.filter(b => b.type === 'Психология' || b.type === 'Саморазвитие') },
        { title: 'Хоррор', color: '#991b1b', books: books.filter(b => b.type === 'Хоррор') },
    ];

    return (
        <div className="page-container">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-books-bg">
                    {books.map((book) => (
                        <div key={`bg-${book.id}`} style={{
                            width: 90, height: 130, borderRadius: 6,
                            background: getCoverColor(book.type),
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            padding: 8, color: '#fff', fontSize: 10, fontWeight: 600, textAlign: 'center'
                        }}>
                            {book.title.substring(0, 20)}
                        </div>
                    ))}
                </div>
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="hero-badge-icon">+</span>
                        Книги Плюс
                    </div>
                    <h1 className="hero-title">
                        Читайте книги, слушайте аудиокниги — с&nbsp;одной подпиской
                    </h1>
                    <p className="hero-subtitle">30 дней бесплатно</p>
                    <div className="hero-plans">
                        <label
                            className={`hero-plan ${selectedPlan === 'year' ? 'selected' : ''}`}
                            onClick={() => setSelectedPlan('year')}
                        >
                            <div className="hero-plan-price">
                                <span className="old-price">5 388</span>4 490 &#8381; за год
                            </div>
                            <div className="hero-plan-detail">это 375 &#8381; в месяц, выгода до 16%</div>
                        </label>
                        <label
                            className={`hero-plan ${selectedPlan === 'month' ? 'selected' : ''}`}
                            onClick={() => setSelectedPlan('month')}
                        >
                            <div className="hero-plan-price">449 &#8381; за месяц</div>
                        </label>
                    </div>
                    <button className="hero-cta">Попробовать бесплатно</button>
                </div>
            </section>

            {/* Рекомендации */}
            <section className="section">
                <div className="section-header">
                    <h2 className="section-title">Вам может понравиться</h2>
                    <span className="section-link">Показать все</span>
                </div>
                <Carousel>
                    {recommendedBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </Carousel>
            </section>

            {/* Топ-10 за неделю */}
            <section className="section">
                <div className="section-header">
                    <h2 className="section-title">Топ-10 за неделю</h2>
                    <span className="section-link">Показать все</span>
                </div>
                <Carousel>
                    {popularBooks.map((book, i) => (
                        <BookCard key={book.id} book={book} variant="top" rank={i + 1} />
                    ))}
                </Carousel>
            </section>

            {/* Подборки по жанрам */}
            {categories.filter(cat => cat.books.length > 0).map(cat => (
                <section className="section" key={cat.title}>
                    <div className="section-header">
                        <h2 className="section-title">{cat.title}</h2>
                        <span className="section-link">Показать все</span>
                    </div>
                    <Carousel>
                        {cat.books.map(book => (
                            <BookCard key={book.id} book={book} />
                        ))}
                    </Carousel>
                </section>
            ))}

            {/* Новинки */}
            <section className="section">
                <div className="section-header">
                    <h2 className="section-title">Новинки</h2>
                    <span className="section-link">Показать все</span>
                </div>
                <Carousel>
                    {newBooks.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </Carousel>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-inner">
                    <div className="footer-logo">
                        <span className="logo-icon" style={{ width: 24, height: 24, fontSize: 14, borderRadius: 4 }}>K</span>
                        Книги
                    </div>
                    <div className="footer-links">
                        <a href="/" className="footer-link">Главное</a>
                        <a href="/catalog" className="footer-link">Каталог</a>
                        <a href="/about" className="footer-link">О нас</a>
                    </div>
                    <div className="footer-copy">&copy; 2025 BookStore</div>
                </div>
            </footer>
        </div>
    );
}

function getCoverColor(type) {
    switch (type) {
        case 'Финансы': case 'Бизнес': return '#1e3a8a';
        case 'Психология': case 'Саморазвитие': return '#065f46';
        case 'Хоррор': return '#991b1b';
        case 'Фантастика': case 'Фэнтези': return '#5b21b6';
        case 'Антиутопия': return '#374151';
        case 'Программирование': return '#1f2937';
        case 'Сказка': return '#b45309';
        case 'Роман': return '#7c3aed';
        default: return '#854d0e';
    }
}

export default HomePage;
