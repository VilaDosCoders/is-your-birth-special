import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Is your birthday special</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@Moguenao" />
        <meta name="twitter:creator" content="@odasflavio" />
        <meta name="twitter:creator" content="@RonalderaZ" />
        <meta
          property="og:url"
          content="https://isyourbirthdayspecial.com/"
        />
        <meta property="og:title" content="Is your Birthday Special?" />
        <meta
          property="og:description"
          content="Discover what events, births and deaths happened on your birthday."
        />
        <meta
          property="og:image"
          content="https://picsum.photos/500/500"
        />

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
