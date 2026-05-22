import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const getCoverColor = (type) => {
    switch (type) {
        case 'Финансы': case 'Бизнес': return '#1e3a8a';
        case 'Психология': case 'Саморазвитие': return '#065f46';
        case 'Хоррор': return '#991b1b';
        case 'Фантастика': case 'Фэнтези': return '#5b21b6';
        case 'Антиутопия': return '#374151';
        case 'Программирование': return '#1f2937';
        default: return '#854d0e';
    }
};

const BookCard = ({ book }) => {
    const { addToCart, isBookPurchased } = useCart();
    const [isReading, setIsReading] = useState(false);

    const coverColor = getCoverColor(book.type);
    const hasBought = isBookPurchased(book.id);

    const FallbackCover = () => (
        <div style={{
            width: '100%', height: '100%', backgroundColor: coverColor,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            padding: '20px', color: '#fff', boxSizing: 'border-box', borderRadius: '8px',
            textAlign: 'center', boxShadow: 'inset 0 0 30px rgba(0,0,0,0.5)'
        }}>
            <div style={{ fontSize: '11px', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '1px' }}>{book.type || 'Книга'}</div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', margin: '10px 0', lineHeight: '1.3' }}>{book.title}</div>
            <div style={{ fontSize: '12px', fontStyle: 'italic', opacity: 0.8 }}>{book.author}</div>
        </div>
    );

    return (
        <div className="book-card-standard" style={{ backgroundColor: '#161616', padding: '15px', borderRadius: '12px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1px solid #222', position: 'relative' }}>
            <div>
                <div className="standard-image-wrap" style={{ width: '100%', aspectRatio: '2/3', position: 'relative', marginBottom: '12px' }}>
                    <FallbackCover />
                </div>
                <div className="standard-info" style={{ marginBottom: '15px' }}>
                    <h3 style={{ fontSize: '15px', margin: '0 0 4px 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{book.title}</h3>
                    <p style={{ color: '#777', fontSize: '13px', margin: '0 0 8px 0' }}>{book.author}</p>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', color: '#22c55e', margin: '0' }}>{book.price} ₽</p>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
                {!hasBought && (
                    <button 
                        onClick={() => addToCart(book)} 
                        style={{ width: '100%', backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '10px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}
                    >
                        🛒 В корзину
                    </button>
                )}
                
                <button 
                    onClick={() => setIsReading(true)} 
                    style={{ 
                        width: '100%', 
                        backgroundColor: hasBought ? '#22c55e' : '#262626', 
                        color: hasBought ? '#fff' : '#aaa', 
                        border: hasBought ? 'none' : '1px solid #333', 
                        padding: '10px', 
                        borderRadius: '6px', 
                        fontWeight: 'bold',
                        cursor: 'pointer', 
                        fontSize: '14px' 
                    }}
                >
                    {hasBought ? '📖 Читать полностью' : '🔍 Читать'}
                </button>
            </div>

            {/* Встроенное модальное окно без внешних импортов */}
            {isReading && (
                <div style={{
                    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
                    backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center',
                    alignItems: 'center', zIndex: 9999, padding: '20px', boxSizing: 'border-box'
                }}>
                    <div style={{
                        backgroundColor: '#fff', width: '100%', maxWIdth: '600px',
                        borderRadius: '12px', padding: '25px', color: '#111',
                        maxHeight: '85vh', overflowY: 'auto', position: 'relative', boxSizing: 'border-box'
                    }}>
                        {/* Кнопка закрытия окна */}
                        <button 
                            onClick={() => setIsReading(false)}
                            style={{
                                position: 'absolute', top: '15px', right: '15px',
                                background: 'none', border: 'none', fontSize: '24px',
                                cursor: 'pointer', color: '#999', fontWeight: 'bold'
                            }}
                        >
                            &times;
                        </button>

                        <div style={{ marginBottom: '15px' }}>
                            <span style={{ 
                                fontSize: '11px', 
                                fontWeight: 'bold', 
                                textTransform: 'uppercase', 
                                color: hasBought ? '#16a34a' : '#dc2626',
                                backgroundColor: hasBought ? '#dcfce7' : '#fee2e2',
                                padding: '4px 8px',
                                borderRadius: '4px'
                            }}>
                                {hasBought ? '✅ Полная версия' : '🔒 Ознакомительный фрагмент'}
                            </span>
                        </div>
                        
                        <h2 style={{ margin: '0 0 4px 0', fontSize: '22px', color: '#111' }}>{book.title}</h2>
                        <p style={{ color: '#666', fontStyle: 'italic', margin: '0 0 20px 0', fontSize: '14px' }}>{book.author}</p>
                        
                        <div style={{ 
                            lineHeight: '1.8', 
                            fontSize: '16px', 
                            backgroundColor: hasBought ? '#f0fdf4' : '#fafafa', 
                            padding: '20px', 
                            borderRadius: '8px', 
                            borderLeft: hasBought ? '4px solid #22c55e' : '4px solid #ef4444', 
                            color: '#333',
                            whiteSpace: 'pre-line',
                            textAlign: 'left'
                        }}>
                            {hasBought ? book.fullText : book.demoText}
                        </div>

                        {!hasBought && (
                            <div style={{ textAlign: 'center', marginTop: '20px', padding: '12px', backgroundColor: '#fff5f5', borderRadius: '6px', border: '1px dashed #ef4444' }}>
                                <p style={{ margin: '0', fontWeight: 'bold', color: '#ef4444', fontSize: '13px' }}>
                                    💡 Чтобы прочитать книгу целиком, добавьте её в корзину и оплатите.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default BookCard;