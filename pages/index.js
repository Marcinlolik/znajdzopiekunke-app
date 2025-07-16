import Head from 'next/head';
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
            <div className={styles.card}>
              <h3>Opieka doraźna</h3>
              <p>Szybka pomoc na godziny – idealna przy nagłych sytuacjach.</p>
              <strong>49 zł</strong>
              <button>Zamów</button>
            </div>
            <div className={styles.card}>
              <h3>Opieka dzienna</h3>
              <p>Całodzienna opieka – np. gdy rodzina pracuje poza domem.</p>
              <strong>199 zł</strong>
              <button>Zamów</button>
            </div>
            <div className={styles.card}>
              <h3>Opieka tygodniowa</h3>
              <p>Stała obecność opiekunki przez 7 dni. Dla większego komfortu.</p>
              <strong>1190 zł</strong>
              <button>Zamów</button>
            </div>
            <div className={styles.card}>
              <h3>Opieka miesięczna</h3>
              <p>Pełne wsparcie przez cały miesiąc – dla osób wymagających stałej opieki.</p>
              <strong>3990 zł</strong>
              <button>Zamów</button>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Zostań opiekunką</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Imię i nazwisko" required />
            <input type="email" placeholder="E-mail" required />
            <input type="tel" placeholder="Telefon" required />
            <textarea placeholder="Doświadczenie" required />
            <textarea placeholder="Kwalifikacje" required />
            <textarea placeholder="Preferowane godziny" required />
            <button type="submit">Wyślij zgłoszenie</button>
          </form>
        </section>

        <section className={styles.section}>
          <h2>Kontakt</h2>
          <form className={styles.form}>
            <input type="text" placeholder="Imię" required />
            <input type="email" placeholder="E-mail" required />
            <textarea placeholder="Wiadomość" required />
            <button type="submit">Wyślij wiadomość</button>
          </form>
        </section>

        <footer className={styles.footer}>
          <p>© 2025 Marcin L</p>
          <p><a href="#">Polityka prywatności</a> | <a href="#">Regulamin</a></p>
        </footer>
      </div>
    </>
  );
}
