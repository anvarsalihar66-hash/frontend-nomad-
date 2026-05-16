import BookCard from './BookCard';

function BookList({ books }) {
    if (!books) return null;
    return (
        <div className="books-grid">
            {books.map(book => <BookCard key={book.id} book={book} />)}
        </div>
    );
}
export default BookList;