import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={`bg-img ${styles.container}`}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className='is-flex is-flex-direction-row'>
            <img src="/Logo_Sankt_Partizipation.png" width="200px" />
          </div>
          <div className="mt-4" >
            <Link href="/select-image">
              <button className='button is-large is-primary border-two'>Jetzt verändern!</button>
            </Link>
          </div>

        </main>

      </div>
    </>
  )
}
