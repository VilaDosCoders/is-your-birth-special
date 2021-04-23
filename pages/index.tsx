import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Is your birthday Special?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Is your birthday special?
      </main>
    </div>
  )
}
