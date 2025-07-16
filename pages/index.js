import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Znajdź Opiekunkę</title>
        <meta name="description" content="Profesjonalna opieka domowa dla seniorów" />
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1>Znajdź Opiekunkę</h1>
          <p>Profesjonalne połączenie opiekunek z osobami potrzebującymi wsparcia</p>
        </header>

        <section className={styles.section}>
          <h2>Pakiety opieki</h2>
          <div className={styles.cards}>
            {[
              ["Opieka doraźna", "Szybka pomoc na godziny – idealna przy nagłych sytuacjach.", "49 zł"],
              ["Opieka dzienna", "Całodzienna opieka – np. gdy rodzina pracuje poza domem.", "199 zł"],
              ["Opieka tygodniowa", "Stała obecność opiekunki przez 7 dni.", "1190 zł"],
              ["Opieka miesięczna", "Pełne wsparcie przez miesiąc – dla osób wymagających stałej opieki.", "3990 zł"]
            ].map(([title, desc, price], i) => (
              <div className={styles.card} key={i}>
                <h3>{title}</h3>
                <p>{desc}</p>
                <strong>{price}</strong>
                <button onClick={() => alert('Funkcja w budowie')}>Kup teraz</button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>Zostań opiekunką</h2>
          <form className={styles.form} method="POST" action="https://formspree.io/f/xnqegogp">
            <input type="text" name="name" placeholder="Imię i nazwisko" required />
            <input type="email" name="email" placeholder="E-mail" required />
            <input type="tel" name="phone" placeholder="Telefon" required />
            <textarea name="experience" placeholder="Doświadczenie" required />
            <textarea name="qualifications" placeholder="Kwalifikacje" required />
            <textarea name="availability" placeholder="Preferowane godziny" required />
            <button type="submit">Wyślij zgłoszenie</button>
          </form>
        </section>

        <section className={styles.section}>
          <h2>Kontakt</h2>
          <form className={styles.form} method="POST" action="https://formspree.io/f/xnqegogp">
            <input type="text" name="name" placeholder="Imię" required />
            <input type="email" name="email" placeholder="E-mail" required />
            <textarea name="message" placeholder="Wiadomość" required />
            <button type="submit">Wyślij wiadomość</button>
          </form>
        </section>

        <footer className={styles.footer}>
          <p>© 2025 Marcin L</p>
          <p>
            <Link href="/polityka">Polityka prywatności</Link> | <Link href="/regulamin">Regulamin</Link>
          </p>
        </footer>
      </div>
    </>
  );
}
