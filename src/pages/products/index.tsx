import { NextPage } from "next";
import Layout from "components/Layout";

import { Montserrat } from "next/font/google";
const roboto = Montserrat({ subsets: ["latin"], weight: "700" });

const Product: NextPage = () => {
  return (
    <Layout>
      <div className="mx-10 mt-20 flex min-h-screen flex-col gap-20">
        <h1
          className={`${roboto.className} fadein-left flex text-9xl tracking-wider text-gray-500 text-opacity-10`}
        >
          PRODUCTS
        </h1>
      </div>
    </Layout>
  );
};

export default Product;
