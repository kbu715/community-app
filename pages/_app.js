import '../styles/globals.css'
import Head from 'next/head'
import Cookies from 'universal-cookie'
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  const cookies = new Cookies();
  const token = cookies.get('token');

  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  return <>
    <Head>
      <title>Community App with Next.js</title>

    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
