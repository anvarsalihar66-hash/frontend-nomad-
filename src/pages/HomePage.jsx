import React from 'react';

const booksData = [
    { id: 1, title: "Зеленая миля", author: "Стивен Кинг", price: 599, img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400" },
    { id: 2, title: "1984", author: "Джордж Оруэлл", price: 450, img: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=400" },
    { id: 3, title: "Ведьмак", author: "Анджей Сапковский", price: 890, img: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400" },
    { id: 4, title: "Мастер и Маргарита", author: "Михаил Булгаков", price: 720, img: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400" }
];

function HomePage() {
    return (
        <div className="main-content">
            <section className="book-hero">
                <span style={{background: 'rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: '20px', fontSize: '11px'}}>ХИТ ПРОДАЖ</span>
                <h1 className="book-title">Сияние</h1>
                <p style={{color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '10px'}}>Стивен Кинг</p>
                <div className="book-price">699 ₽</div>
                <p className="book-description">
                    Джек Торранс надеется, что работа в отеле «Оверлук» поможет ему. Но отель — это не просто здание, это живой кошмар, который ждет свою жертву.
                </p>
                <div className="btn-group">
                    <button className="btn-main btn-buy" onClick={() => alert('Добавлено!')}>Купить книгу</button>
                    <button className="btn-main btn-outline" onClick={() => alert('Скоро будет доступно')}>Прочитать</button>
                </div>
            </section>

            <h2 style={{marginBottom: '30px'}}>Рекомендуем</h2>
            <div className="books-grid">
                {booksData.map(book => (
                    <div key={book.id} className="book-card">
                        <img src={book.img} alt={book.title} />
                        <h3 style={{fontSize: '18px'}}>{book.title}</h3>
                        <p style={{color: '#666', fontSize: '13px'}}>{book.author}</p>
                        <p style={{color: '#8b5cf6', fontWeight: 'bold', marginTop: '10px'}}>{book.price} ₽</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default HomePage;