import Image from "next/image";
import { NextPage } from "next";

// types
import type {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import type { ProductObject } from "types";

import { Montserrat } from "next/font/google";
const roboto = Montserrat({ subsets: ["latin"], weight: "700" });

import Layout from "components/Layout";

// product data
import data from "data/data.json";

type Props = { product: ProductObject };

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { id } = context.params!;
  const product = data.find((item) => item.id === parseInt(id as string));

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = data.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

const Product: NextPage<Props> = ({ product }: Props) => {
  const replaceDescription = product.description.replace(/\n/g, "</br>");

  return (
    <main className="flex justify-center">
      <Layout>
        <section className="m-auto flex min-h-screen flex-col md:mx-8 lg:mx-10 lg:mt-20">
          <h1
            className={`${roboto.className} fadein-left mb-10 flex justify-center text-5xl tracking-wider text-gray-500 text-opacity-10 sm:text-7xl md:text-8xl lg:mb-20 lg:justify-start lg:text-9xl`}
          >
            {product.title}
          </h1>
          <h2 className="mb-4">{product.subTitle}</h2>

          <div className="flex flex-col gap-10">
            <div className="aspect-w-16 aspect-h-9 bg-white opacity-80">
              <Image
                src={product.image!}
                alt={product.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="fadein-top flex flex-col gap-3">
              <h2 className="border-l-2 border-white pl-2 text-2xl">
                使用技術
              </h2>
              <div className="flex gap-4">
                {product.skills?.map((skill) => (
                  <ul key={product.id}>
                    <li>{skill}</li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="fadein-top flex flex-col gap-3">
              <h2 className="border-l-2 border-white pl-2 text-2xl">{`${product.title}の説明`}</h2>
              <p dangerouslySetInnerHTML={{ __html: replaceDescription }} />
            </div>

            <div></div>
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default Product;
