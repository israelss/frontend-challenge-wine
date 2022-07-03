import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Wine</title>
        <meta name='description' content='Wine - A maior loja de vinhos online!' />
        <link rel='icon' href='../favicon.ico' />
      </Head>

      <main>
        <h1>Seja bem vindo à Wine!</h1>
        <Link href='/loja'>
          <a>Visite nossa loja!</a>
        </Link>
      </main>
    </div>
  )
}

export default Home
