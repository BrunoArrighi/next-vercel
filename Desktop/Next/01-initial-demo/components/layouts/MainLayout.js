import React from 'react'
import Head from 'next/head'
import styles from './MainLayout.module.css'
import NavBar from '../NavBar/NavBar'

const MainLayout = ({ children }) => {
  return (
    <div className={styles.container}>
    <Head>
      <title>Home - Bruno</title>
      <meta name="description" content="Home Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NavBar />

    <main className={styles.main}>
        {children}
    </main>
  </div>
  )
}

export default MainLayout