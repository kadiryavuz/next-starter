import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link';

const Home = () =>  {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <Link href="/posts/first-post"><a>catch me!</a></Link>
        </p>
      </section>
    </Layout>
  )
}

export default Home;