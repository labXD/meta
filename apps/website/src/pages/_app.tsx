import "../styles/globals.css"

import { BaseLayout } from "@labxd/gustxd"
import type { AppProps } from "next/app"
import Head from "next/head"

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
    </>
  )
}

export default App
