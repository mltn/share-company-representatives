import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Predstavnici' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" type="image/png" href="/img/Favicon.png"/>
      <meta property="og:title" content="predstavnici.mojipodaci.rs"/>
      <meta property="og:description" content="Ovde se mogu naći kontakti predstavnika stranih kompanija u Srbiji, kojima se građani mogu obratiti da ostvare svoja zakonska prava kao što su pristup, brisanje, prenos i druga prava u odnosu na lične podatke."/>
      <meta property="og:image" content="https://predstavnici.mojipodaci.rs/Facebook-1.png"/>
      <meta property="og:url" content="https://predstavnici.mojipodaci.rs"/>
      <meta property="twitter:image" content="https://predstavnici.mojipodaci.rs/Twitter-1.png"/>
      <meta property="twitter:url" content="https://predstavnici.mojipodaci.rs"/>
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
    <div id="body">
      <Navbar />
      {children}
      <Footer />
    </div>
  </div>
)

export default Layout
