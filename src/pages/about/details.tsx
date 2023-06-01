import { NextPage } from "next";
import Layout from "components/Layout";

import { Montserrat } from "next/font/google";
const roboto = Montserrat({ subsets: ["latin"], weight: "700" });

const ReadMore: NextPage = () => {
  return (
    <main className="flex justify-center">
      <Layout>
        <section className="m-auto flex min-h-screen flex-col gap-10 md:mx-8 md:gap-14 lg:mx-10 lg:mt-20 lg:gap-20">
          <h1
            className={`${roboto.className} fadein-left flex justify-center text-5xl tracking-wider text-gray-500 text-opacity-10 sm:text-7xl md:text-8xl lg:justify-start lg:text-9xl`}
          >
            DATAILS
          </h1>
        </section>
      </Layout>
    </main>
  );
};

export default ReadMore;
