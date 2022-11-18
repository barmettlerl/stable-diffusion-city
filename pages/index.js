import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <div className={`bg-img ${styles.container}`}>
        <Head>
          <title>Sankt Traum Stadt</title>
          <meta name="description" content="Stable diffusion generator für Sankt Gallen" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <div className='is-flex is-flex-direction-row'>
            <img src="/Logo_Sankt_Partizipation.png" width="200" alt="Sankt Traumstadt" />
          </div>
          <div className="mt-4" >
            <Link href="/select-image">
              <button className='button is-large is-primary border-two'>ST. GALLEN VERÄNDERN!</button>
            </Link>
          </div>

        </main>

      </div>
    </>
  )
}
