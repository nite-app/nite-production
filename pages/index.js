import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nite</title>
        <meta name="description" content="Coming soon!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to nite.</h1>
        <p className={styles.p}>Don&apos;t worry, we&apos;ll be live soon!</p>
      </main>
    </div>
  );
}
