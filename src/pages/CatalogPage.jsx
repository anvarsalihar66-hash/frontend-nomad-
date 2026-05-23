import { useState, useMemo } from 'react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

const CatalogPage = () => {
    const [activeFilter, setActiveFilter] = useState('Все');

    const genres = useMemo(() => {
        const types = [...new Set(books.map(b => b.type).filter(Boolean))];
        return ['Все', ...types];
    }, []);

    const filteredBooks = activeFilter === 'Все'
        ? books
        : books.filter(b => b.type === activeFilter);

    return (
        <div className="catalog-container">
            <div className="catalog-header">
                <h1 className="catalog-title">Каталог книг</h1>
            </div>
            <div className="catalog-filters">
                {genres.map(genre => (
                    <button
                        key={genre}
                        className={`filter-btn ${activeFilter === genre ? 'active' : ''}`}
                        onClick={() => setActiveFilter(genre)}
                    >
                        {genre}
                    </button>
                ))}
            </div>
            <div className="books-grid">
                {filteredBooks.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;
