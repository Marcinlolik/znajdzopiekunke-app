import Head from 'next/head';
import Link from 'next/link';
export default function Miesieczna() {
  return (
    <>
      <Head><title>Pakiet Opieka miesięczna</title></Head>
      <main style={padding:'2rem', fontFamily:'Arial'}>
        <h1>Opieka miesięczna</h1>
        <p>Stałe wsparcie przez cały miesiąc – dedykowane osobom wymagającym ciągłej obecności opiekunki.</p>
        <p><strong>Cena: 3990 zł</strong></p>
        <button onClick={() => alert("Funkcja w budowie")}>Zamów</button>
        <br /><br />
        <Link href="/">← Powrót</Link>
      </main>
    </>
  );
}