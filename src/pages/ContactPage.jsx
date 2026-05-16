function ContactPage() {
    return (
        <div className="main-content">
            <h1>Контакты</h1>
            <p style={{margin: '20px 0'}}>Москва, ул. Университетская, д. 5</p>

            <div style={{
                width: '100%', height: '400px', background: '#111',
                borderRadius: '20px', border: '1px solid #222',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <p style={{color: '#333'}}>Интерактивная карта загружается...</p>
            </div>
        </div>
    );
}
export default ContactPage;