import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', experience: '', qualifications: '', availability: ''
  });

  const [messageData, setMessageData] = useState({
    name: '', email: '', message: ''
  });

  const handleOpiekunkaChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleContactChange = e => setMessageData({ ...messageData, [e.target.name]: e.target.value });

  const handleOpiekunkaSubmit = e => {
    e.preventDefault();
    alert('Zgłoszenie opiekunki wysłane!');
  };

  const handleContactSubmit = e => {
    e.preventDefault();
    alert('Wiadomość kontaktowa wysłana!');
  };

  return (
    <>
      <Head><title>Znajdź Opiekunkę</title></Head>
      <main style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
        <h1>Witamy na znajdzopiekunke.pl</h1>
        <p>Profesjonalne połączenie opiekunek z osobami potrzebującymi wsparcia.</p>

        <section>
          <h2>Pakiety opieki</h2>
          <ul>
            <li>Opieka doraźna (1h) – 49 zł <button>Kup teraz</button></li>
            <li>Opieka dzienna (1 dzień) – 199 zł <button>Kup teraz</button></li>
            <li>Opieka tygodniowa (7 dni) – 1190 zł <button>Kup teraz</button></li>
            <li>Opieka miesięczna – 3990 zł <button>Kup teraz</button></li>
          </ul>
        </section>

        <section>
          <h2>Zgłoszenie opiekunki</h2>
          <form onSubmit={handleOpiekunkaSubmit}>
            <input name="name" placeholder="Imię i nazwisko" onChange={handleOpiekunkaChange} required /><br />
            <input name="email" placeholder="E-mail" onChange={handleOpiekunkaChange} required /><br />
            <input name="phone" placeholder="Telefon" onChange={handleOpiekunkaChange} required /><br />
            <textarea name="experience" placeholder="Doświadczenie" onChange={handleOpiekunkaChange} required /><br />
            <textarea name="qualifications" placeholder="Kwalifikacje" onChange={handleOpiekunkaChange} required /><br />
            <textarea name="availability" placeholder="Preferowane godziny" onChange={handleOpiekunkaChange} required /><br />
            <button type="submit">Wyślij zgłoszenie</button>
          </form>
        </section>

        <section>
          <h2>Kontakt</h2>
          <form onSubmit={handleContactSubmit}>
            <input name="name" placeholder="Imię" onChange={handleContactChange} required /><br />
            <input name="email" placeholder="E-mail" onChange={handleContactChange} required /><br />
            <textarea name="message" placeholder="Wiadomość" onChange={handleContactChange} required /><br />
            <button type="submit">Wyślij wiadomość</button>
          </form>
        </section>

        <footer style={{ marginTop: '4rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
          <p>© 2025 Marcin L</p>
          <p><a href="#">Polityka prywatności</a> | <a href="#">Regulamin</a></p>
        </footer>
      </main>
    </>
  );
}