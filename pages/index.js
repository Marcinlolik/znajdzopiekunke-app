import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Znajdź Opiekunkę</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Profesjonalna opieka domowa</h1>
          <p>Połączymy Cię z odpowiednią opiekunką</p>
        </div>
        <h2>Nasze pakiety</h2>
        <div className={styles.cards}>
          <Link href="/pakiety/dorazna" className={styles.card}><h3>Doraźna</h3><p>Pomoc na godziny</p></Link>
          <Link href="/pakiety/dzienna" className={styles.card}><h3>Dzienna</h3><p>Opieka w ciągu dnia</p></Link>
          <Link href="/pakiety/tygodniowa" className={styles.card}><h3>Tygodniowa</h3><p>7 dni opieki</p></Link>
          <Link href="/pakiety/miesieczna" className={styles.card}><h3>Miesięczna</h3><p>Stałe wsparcie</p></Link>
        </div>
        <div className={styles.callToAction}>
          <Link href="/opiekunki"><button>Zostań opiekunką</button></Link>
        </div>
      </div>
    </>
  );
}
