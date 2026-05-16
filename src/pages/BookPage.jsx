import { useParams, useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { books as localBooks } from '../data/books';

function BookPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Пытаемся найти в локальных данных
        const foundLocal = localBooks.find(b => b.id.toString() === id);

        if (foundLocal) {
            setBook(foundLocal);
            setIsLoading(false);
        } else {
            // 2. Если локально нет, ищем в Google API по ID
            fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
                .then(res => res.json())
                .then(data => {
                    if (data.volumeInfo) {
                        setBook({
                            id: data.id,
                            title: data.volumeInfo.title,
                            author: data.volumeInfo.authors?.join(', ') || 'Автор не указан',
                            cover: data.voumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/300x450',
                            description: data.volumeInfo.description?.replace(/<[^>]*>?/gm, '') || 'Описание отсутствует',
                            price: 500, // API часто не отдает цену, ставим фиксированную
                            type: data.vollumeInfo.categories?.[0] || 'Книга',
                            previewLink: data.volumeInfo.previewLink // Ссылка на чтение
                        });
                    }
                    setIsLoading(false);
                })
                .catch(() => {
                    console.error("Книга не найдена");
                    setIsLoading(false);
                });
        }
    }, [id]);

    if (isLoading) return <div className="loading">Загрузка...</div>;
    if (!book) return <div className="error">Книга не найдена</div>;

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
            <Link to="/catalog" style={{ color: '#8b5cf6', textDecoration: 'none', fontWeight: 'bold' }}>← Назад в каталог</Link>

            <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '3rem', marginTop: '2rem' }}>
                <img src={book.cover} alt={book.title} style={{ width: '100%', borderRadius: '1rem', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }} />

                <div>
                    <div className="book-type" style={{ background: '#f1f5f9', padding: '5px 15px', borderRadius: '20px', display: 'inline-block' }}>
                        {book.type}
                    </div>
                    <h1 style={{ fontSize: '2.5rem', margin: '1rem 0' }}>{book.title}</h1>
                    <p style={{ color: '#64748b', fontSize: '1.2rem' }}>{book.author}</p>

                    <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#8b5cf6', margin: '1.5rem 0' }}>
                        {book.price} ₽
                    </div>

                    <p style={{ lineHeight: '1.8', color: '#334155', marginBottom: '2rem' }}>{book.description}</p>

                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button className="add-to-cart-btn" onClick={() => addToCart(book)} style={{ width: 'auto', padding: '1rem 2rem' }}>
                            Купить книгу
                        </button>

                        {/* Кнопка "Прочитать" для всех книг */}
                        <a
                            href={book.previewLink || `https://www.google.com/search?tbm=bks&q=${encodeURIComponent(book.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="read-btn"
                            style={{
                                padding: '1rem 2rem',
                                borderRadius: '2rem',
                                border: '2px solid #8b5cf6',
                                color: '#8b5cf6',
                                textDecoration: 'none',
                                fontWeight: 'bold',
                                textAlign: 'center'
                            }}
                        >
                            Прочитать
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookPage;