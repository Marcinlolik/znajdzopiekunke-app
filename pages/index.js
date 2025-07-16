export default function Home() {
  return (
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
        <form>
          <input name="name" placeholder="Imię i nazwisko" required /><br />
          <input name="email" placeholder="E-mail" required /><br />
          <input name="phone" placeholder="Telefon" required /><br />
          <textarea name="experience" placeholder="Doświadczenie" required /><br />
          <textarea name="qualifications" placeholder="Kwalifikacje" required /><br />
          <textarea name="availability" placeholder="Preferowane godziny" required /><br />
          <button type="submit">Wyślij zgłoszenie</button>
        </form>
      </section>

      <section>
        <h2>Kontakt</h2>
        <form>
          <input name="name" placeholder="Imię" required /><br />
          <input name="email" placeholder="E-mail" required /><br />
          <textarea name="message" placeholder="Wiadomość" required /><br />
          <button type="submit">Wyślij wiadomość</button>
        </form>
      </section>

      <footer style={{ marginTop: '4rem', borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
        <p>© 2025 Marcin L</p>
        <p><a href="#">Polityka prywatności</a> | <a href="#">Regulamin</a></p>
      </footer>
    </main>
  );
}