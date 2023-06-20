import Head from 'next/head'
import styles from './styles.module.scss'
import Hero from '../components/Hero'
import AboutMe from '../components/AboutMe'
import Tech from '../components/Tech'
import Contacts from '../components/Contacts'
import Projects from '../components/Projects'
import { useState } from 'react'

export default function Home() {

  const [pageReady, setPageReady] = useState(false)

  return (
    <>
      <Head>
        <title>LuisAnton.io</title>
        <meta name="description" content="Luis Antonio | Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>PAGE IS {pageReady ? "READY" : "NOT READY"}</h1>

        <Hero setPageReady={() => setPageReady(true)} />
        <AboutMe />
        <Projects />
        <Tech />
        <Contacts />

      </main>

    </>
  )
}
