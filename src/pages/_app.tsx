import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import '../styles/react-date-picker.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Is your birthday special</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-colo" content="#06092b" />
        <meta
          name="description"
          content="App to show events that happened on your birthday"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
