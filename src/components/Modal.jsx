
export default function Modal({ title, isOpen, onClose, children }) {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-window" onClick={e => e.stopPropagation()}>
                <span className="close-btn" onClick={onClose}>✖</span>
                <h2>{title}</h2>
                <div style={{marginTop: '20px'}}>{children}</div>
            </div>
        </div>
    );
}