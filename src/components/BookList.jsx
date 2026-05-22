import React from 'react';
import BookCard from './BookCard';

function BookList({ books }) {
    if (!books || books.length === 0) return null;

    // Первую книгу ("Богатый папа, бедный папа") делаем главным баннером
    const featuredBook = books.find(b => b.id === 13) || books[0];
    
    // Все остальные книги пускаем в обычную сетку
    const recommendedBooks = books.filter(b => b.id !== featuredBook.id);

    return (
        <div className="catalog-container">
            {/* Секция БЕСТСЕЛЛЕР (в столбик / во всю ширину) */}
            <section className="featured-section">
                <h2 className="section-title">Каталог всех книг</h2>
                <BookCard book={featuredBook} variant="featured" />
            </section>

            {/* Секция РЕКОМЕНДУЕМ (в ряд) */}
            <section className="recommended-section">
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

export default BookList;