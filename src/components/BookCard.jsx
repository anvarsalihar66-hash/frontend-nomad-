import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import Modal from './Modal';

const BookCard = ({ book }) => {
    const { addToCart } = useCart();
    const [isReading, setIsReading] = useState(false);

    return (
        <div className="book-card">
            <div className="book-card-content">
                <span className="badge">БЕСТСЕЛЛЕР</span>
                <h1 className="title">{book.title}</h1>
                <p className="author">{book.author}</p>
                <p className="price">{book.price} ₽</p>

                <div className="card-btns">
                    <button className="btn-white" onClick={() => addToCart(book)}>Купить книгу</button>
                    <button className="btn-outline" onClick={() => setIsReading(true)}>Прочитать</button>
                </div>
            </div>

            {isReading && (
                <Modal onClose={() => setIsReading(false)}>
                    <div className="reader-box">
                        <h2>{book.title}</h2>
                        <div className="text-content">
                            {book.content || "Здесь должен быть основной текст книги из файла books.js..."}
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default BookCard;