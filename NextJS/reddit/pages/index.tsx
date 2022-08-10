import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import PostBox from "../components/PostBox";
import Feed from "../components/Feed";
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="my-7 max-w-5xl mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Post Box */}
      <PostBox />
      {/* Feed */}
      <div className="flex">
        <Feed />
      </div>
    </div>
  );
};

export default Home;
