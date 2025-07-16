import Head from 'next/head';
import Link from 'next/link';
export default function Dzienna() {
  return (
    <>
      <Head><title>Pakiet Opieka dzienna</title></Head>
      <main style={padding:'2rem', fontFamily:'Arial'}>
        <h1>Opieka dzienna</h1>
        <p>Opieka od rana do wieczora – dla rodzin aktywnych zawodowo.</p>
        <p><strong>Cena: 199 zł</strong></p>
        <button onClick={() => alert("Funkcja w budowie")}>Zamów</button>
        <br /><br />
        <Link href="/">← Powrót</Link>
      </main>
    </>
  );
}