import 'tailwindcss/tailwind.css'
import Head from 'next/head'
function Robes({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>
        {`
          body {
            background: #00004d;
            color: white;
            overflow-x: hidden;
          }
        `}
      </style>
      <Head>
        <title>ghosts.market</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DotGothic16:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@12yrold_with_cc" />
        <meta property="og:url" content="https://ghosts.market" />
        <meta property="og:title" content="ghosts.market" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          property="og:description"
          content="See the floor price of Ghost Toadz from the CrypToadz project."
        />
        <meta property="og:image" content="https://alientoadz.market/og.png" />
        <script
          data-goatcounter="https://ghoststoadz.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>
      </Head>
    </>
  )
}

export default Robes
