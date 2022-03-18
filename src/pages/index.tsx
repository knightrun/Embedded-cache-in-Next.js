import type { NextPage } from 'next'
import Head from 'next/head'
import Link from '@/components/common/utils/Link'

const Home: NextPage = () => {
  return (
    <>
      {' '}
      <Head>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Head>
      <div className="container">
        <Link href={'/form'}>테스트 페이지 이동</Link>
      </div>
    </>
  )
}

export default Home
