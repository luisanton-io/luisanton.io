import Loader from 'components/Loader'
import Head from 'next/head'
import { useState } from 'react'
import AboutMe from '../components/AboutMe'
import Contacts from '../components/Contacts'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Tech from '../components/Tech'
import styles from './styles.module.scss'

export default function Home() {

  const [pageReady, setPageReady] = useState(false)

  return (
    <>
      <Head>
        <title>LuisAnton.io</title>
        <meta name="description" content="Luis Antonio | Full Stack Web Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Loader pageReady={pageReady} />

      <main className={styles.main}>
        <Hero pageReady={pageReady} setPageReady={() => {
          setTimeout(() => {
            setPageReady(true)
          }, 300)
        }} />
        <AboutMe />
        <Projects />
        <Tech />
        <Contacts />
      </main>

    </>
  )
}
