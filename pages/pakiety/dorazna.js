import Head from 'next/head';
import Link from 'next/link';
export default function Dorazna() {
  return (
    <>
      <Head><title>Pakiet Opieka doraźna</title></Head>
      <main style={padding:'2rem', fontFamily:'Arial'}>
        <h1>Opieka doraźna</h1>
        <p>Pomoc na godziny w nagłych przypadkach. Idealna dla osób potrzebujących wsparcia ad hoc.</p>
        <p><strong>Cena: 49 zł</strong></p>
        <button onClick={() => alert("Funkcja w budowie")}>Zamów</button>
        <br /><br />
        <Link href="/">← Powrót</Link>
      </main>
    </>
  );
}