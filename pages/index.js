import Head from 'next/head'
import Image from 'next/image'
import Layout from '../Components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <Layout />
    </>
  )
}
