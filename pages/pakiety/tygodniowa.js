import Head from 'next/head';
import Link from 'next/link';
export default function Tygodniowa() {
  return (
    <>
      <Head><title>Pakiet Opieka tygodniowa</title></Head>
      <main style={padding:'2rem', fontFamily:'Arial'}>
        <h1>Opieka tygodniowa</h1>
        <p>7 dni kompleksowej opieki – idealne przy dłuższej nieobecności rodziny.</p>
        <p><strong>Cena: 1190 zł</strong></p>
        <button onClick={() => alert("Funkcja w budowie")}>Zamów</button>
        <br /><br />
        <Link href="/">← Powrót</Link>
      </main>
    </>
  );
}