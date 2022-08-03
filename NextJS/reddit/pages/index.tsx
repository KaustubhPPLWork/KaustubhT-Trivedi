import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import PostBox from '../components/PostBox'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Post Box */}
      <PostBox />
      <div>
        {/* Feed */}
      </div>
    </div>
  )
}

export default Home
