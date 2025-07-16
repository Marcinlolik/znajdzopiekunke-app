import Head from 'next/head';

export default function Opiekunki() {
  return (
    <>
      <Head><title>Zgłoś się jako opiekunka</title></Head>
      <main style={{padding:'2rem', fontFamily:'Arial'}}>
        <h1>Zostań opiekunką</h1>
        <p>Wypełnij formularz zgłoszeniowy – skontaktujemy się z Tobą w ciągu 24h.</p>
        <form method="POST" action="https://formspree.io/f/xnqegogp" style={{display:'flex', flexDirection:'column', gap:'0.5rem', maxWidth:'400px'}}>
          <input name="name" type="text" placeholder="Imię i nazwisko" required />
          <input name="email" type="email" placeholder="E-mail" required />
          <input name="phone" type="tel" placeholder="Telefon" required />
          <textarea name="experience" placeholder="Doświadczenie" required />
          <textarea name="qualifications" placeholder="Kwalifikacje" required />
          <textarea name="availability" placeholder="Preferowane godziny" required />
          <button type="submit">Wyślij</button>
        </form>
      </main>
    </>
  )
}
