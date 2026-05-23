import { useRef } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = ({ children }) => {
    const trackRef = useRef(null);

    const scroll = (direction) => {
        if (trackRef.current) {
            const amount = trackRef.current.offsetWidth * 0.7;
            trackRef.current.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
        }
    };

    return (
        <div className="carousel-wrapper">
            <button className="carousel-btn carousel-btn-left" onClick={() => scroll('left')} aria-label="Назад">
                <FiChevronLeft size={20} />
            </button>
            <div className="carousel-track" ref={trackRef}>
                {children}
            </div>
            <button className="carousel-btn carousel-btn-right" onClick={() => scroll('right')} aria-label="Вперёд">
                <FiChevronRight size={20} />
            </button>
        </div>
    );
};

export default Carousel;
