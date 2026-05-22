import React from 'react';
import { books } from '../data/books';
import BookList from '../components/BookList';

const CatalogPage = () => {
    return (
        <div className="catalog-page-wrapper">
            {/* Передаем массив книг в наш новый красивый список */}
            <BookList books={books} />
        </div>
    );
};

export default CatalogPage;