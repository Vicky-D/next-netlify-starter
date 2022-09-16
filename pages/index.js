import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
    <meta name="title" content="Business Energy Solutions | Shell Energy" data-react-helmet="true">
    <meta name="title" property="og:title" content="Business Energy Solutions | Shell Energy" data-react-helmet="true">
    <meta name="description" content="Shell Energy can help you build momentum by breaking down the complexities of your energy transition." data-react-helmet="true">
    <meta name="description" property="og:description" content="Shell Energy can help you build momentum by breaking down the complexities of your energy transition." data-react-helmet="true">
    <meta name="image" property="og:image" content="https://images.ctfassets.net/1n54v69mwqrd/2p7JxG9jdDmYv3q3NROBfv/6b107b898eef7b0b1b497b7c04ce08a8/banner.jpg" data-react-helmet="true">
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
