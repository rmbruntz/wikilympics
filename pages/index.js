import Head from 'next/head'
import { WikilympicsGame } from '@components/wikilympicsgame.js'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Wikilympics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <WikilympicsGame />

      </main>
    </div>
  )
}
