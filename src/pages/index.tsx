import { NextPage } from "next";
import Head from "next/head";

import Layout from "components/Layout";
import TypingAnimation from "components/TypingAnimation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Code Mountain</title>
        <meta
          name="description"
          content="Ryotaのポートフォリオサイト[Code Mountain]です。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <Layout>
          <TypingAnimation />
        </Layout>
      </main>
    </>
  );
};

export default Home;
