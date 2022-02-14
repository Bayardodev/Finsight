import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../../components/layout'

export default function cindex() {
  return (

    <Layout>

    <Head>
        <title>Finsight Corporation LLC</title>
    </Head>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

    </Layout>

  )
}