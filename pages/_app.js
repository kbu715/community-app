import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Community App with Next.js</title>

    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
