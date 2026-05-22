import React from 'react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

function HomePage() {
    // Берем первую книгу (например, Богатый папа) как главный баннер
    const featuredBook = books[0] || {
        id: 13,
        title: "Богатый папа, бедный папа",
        author: "Роберт Кийосаки",
        price: 499,
        cover: "https://proweb.uz/upload/rich-dad.jpg",
        description: "Книга о финансовой грамотности."
    };

    // Берем следующие книги для блока "Рекомендуем"
    const recommendedBooks = books.slice(1, 5);

    return (
        <div className="catalog-container">
            {/* Большой красивый баннер */}
            <BookCard book={featuredBook} variant="featured" />

            {/* Сетка рекомендованных книг */}
            <section className="recommended-section" style={{ marginTop: '40px' }}>
                <h2 className="section-title">Рекомендуем</h2>
                <div className="books-grid">
                    {recommendedBooks.map(book => (
                        <BookCard key={book.id} book={book} variant="standard" />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomePage;