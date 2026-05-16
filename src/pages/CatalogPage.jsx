import React from 'react';
import { books } from '../data/books';
import BookCard from '../components/BookCard';

const CatalogPage = () => {
    return (
        <div className="container">
            <h1 style={{marginBottom: '40px'}}>Каталог всех книг</h1>
            <div className="books-list-flex">
                {books.map(book => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default CatalogPage;