// types
import type {
  NextPage,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from "next";
import type { ProductObject } from "types";

// Font
import { Montserrat } from "next/font/google";
const roboto = Montserrat({ subsets: ["latin"], weight: "700" });

// Components
import Layout from "components/Layout";
import SplideImage from "components/SplideImage";

// product data
import data from "data/data.json";

// Font Awesome Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// Framer Motion
import { motion } from "framer-motion";

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
  // 改行コードを</br>タグに置き換えて取得
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
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm md:text-lg">{product.subTitle}</h2>
            <motion.button
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
              className="text-sm md:text-lg"
            >
              <a href={product.url} target="_blank" rel="noopener noreferrer">
                {product.url}
              </a>
            </motion.button>
            <motion.button
              whileHover={{ scale: 0.8 }}
              whileTap={{ scale: 0.8 }}
            >
              <a
                href={product.githubSrc}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub as IconDefinition} size="2xl" />
              </a>
            </motion.button>
          </div>

          <div className="flex flex-col gap-10">
            <SplideImage images={product.images} title={product.title} />

            <div className="fadein-top flex flex-col gap-3">
              <h2 className="border-l-2 border-white pl-2 text-2xl">
                使用技術
              </h2>
              <div className="flex gap-4">
                {product.skills.map((skill, index) => (
                  <ul key={index}>
                    <li>{skill}</li>
                  </ul>
                ))}
              </div>
            </div>

            <div className="fadein-top flex flex-col gap-3">
              <h2 className="border-l-2 border-white pl-2 text-2xl">{`${product.title}の説明`}</h2>
              <p dangerouslySetInnerHTML={{ __html: replaceDescription }} />
            </div>

            <div className="fadein-top flex flex-col gap-3">
              <h2 className="border-l-2 border-white pl-2 text-2xl">機能</h2>
              {product.features.map((feature, index) => (
                <ul key={index} className="ml-4 list-disc">
                  <li>{feature}</li>
                </ul>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default Product;
