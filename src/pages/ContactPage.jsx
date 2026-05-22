function ContactPage() {
    return (
        <div className="main-content">
            <h1>Контакты</h1>

            <p style={{ margin: '20px 0' }}>
                Бишкек, IUK East Campus
            </p>

            <div style={{
                width: '100%',
                height: '400px',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #222'
            }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.822856985399!2d74.63828847339477!3d42.86093758235291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7448522e503%3A0xe413157e02c6e416!2sIuk%20east%20campus!5e0!3m2!1sru!2skg!4v1779479566253!5m2!1sru!2skg"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactPage;