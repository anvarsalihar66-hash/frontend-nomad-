import { useState } from 'react';
import { useCart } from '../context/useCart';

const getCoverColor = (type) => {
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
};

const FallbackCover = ({ className, coverColor, type, title, author }) => (
    <div className={className} style={{ backgroundColor: coverColor }}>
        <span className="book-card-fallback-genre">{type || 'Книга'}</span>
        <span className="book-card-fallback-title">{title}</span>
        <span className="book-card-fallback-author">{author}</span>
    </div>
);

const ReadingModal = ({ book, hasBought, onClose }) => (
    <div className="modal-overlay" onClick={onClose}>
        <div className="modal-window" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={onClose}>&times;</button>
            <h2>{book.title}</h2>
            <p style={{ color: '#888', marginBottom: '16px' }}>{book.author}</p>
            <div className="modal-text">
                {hasBought ? (book.fullText || book.demoText || book.description) : (book.demoText || book.description)}
            </div>
            {!hasBought && (
                <p style={{ marginTop: '20px', fontSize: '13px', color: '#fc3f1d', fontWeight: 600 }}>
                    Купите книгу, чтобы читать полностью
                </p>
            )}
        </div>
    </div>
);

const BookCard = ({ book, variant = 'standard', rank }) => {
    const { addToCart, isBookPurchased } = useCart();
    const [isReading, setIsReading] = useState(false);

    const coverColor = getCoverColor(book.type);
    const hasBought = isBookPurchased(book.id);

    if (variant === 'top') {
        return (
            <div className="top-card" onClick={() => setIsReading(true)}>
                <div className="top-card-cover-wrap">
                    <div className="book-card-cover">
                        {book.img ? (
                            <img src={book.img} alt={book.title} />
                        ) : (
                            <FallbackCover className="book-card-fallback" coverColor={coverColor} type={book.type} title={book.title} author={book.author} />
                        )}
                    </div>
                    {rank && <span className="top-card-number">{rank}</span>}
                </div>
                <div className="book-card-author">{book.author}</div>
                <div className="book-card-title">{book.title}</div>
                {isReading && <ReadingModal book={book} hasBought={hasBought} onClose={() => setIsReading(false)} />}
            </div>
        );
    }

    return (
        <div className="book-card">
            <div className="book-card-cover" onClick={() => setIsReading(true)}>
                {book.img ? (
                    <img src={book.img} alt={book.title} />
                ) : (
                    <FallbackCover className="book-card-fallback" coverColor={coverColor} type={book.type} title={book.title} author={book.author} />
                )}
            </div>
            <div className="book-card-author">{book.author}</div>
            <div className="book-card-title">{book.title}</div>
            <div className="book-card-price">{book.price} &#8381;</div>
            {!hasBought && (
                <button className="book-card-btn book-card-btn-cart" onClick={() => addToCart(book)}>
                    В корзину
                </button>
            )}
            <button className="book-card-btn book-card-btn-read" onClick={() => setIsReading(true)}>
                {hasBought ? 'Читать полностью' : 'Читать отрывок'}
            </button>
            {isReading && <ReadingModal book={book} hasBought={hasBought} onClose={() => setIsReading(false)} />}
        </div>
    );
};

export default BookCard;
