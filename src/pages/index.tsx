import { NextPage } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import TypingAnimation from "components/TypingAnimation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Code Mountain</title>
        <meta
          name="description"
          content="Ryotaのポートフォリオサイト[Code Mountain]です。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <TypingAnimation />
      </Layout>
    </div>
  );
};

export default Home;
