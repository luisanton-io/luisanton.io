import Head from 'next/head'
import styles from '../styles/index.module.scss'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Tech from './components/Tech'
import Contacts from './components/Contacts'

export default function Home() {
  return (
    <>
      <Head>
        <title>LuisAnton.io</title>
        <meta name="description" content="Luis Antonio is a Full Stack Web Developer for hire" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <Hero />
        <AboutMe />
        <Tech />
        <Contacts />

      </main>

    </>
  )
}
