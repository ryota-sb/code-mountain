import { NextPage } from "next";
import Image from "next/image";

import { useState } from "react";

import Layout from "components/Layout";

import { Montserrat } from "next/font/google";
const roboto = Montserrat({ subsets: ["latin"], weight: "700" });

const Product: NextPage = () => {
  const [isLoading, setLoading] = useState(true);

  const products = [
    {
      name: "Code Atelier",
      img: "/images/products/code_atelier.png",
      discription: "技術ブログサイト",
    },
    { name: "ally", img: "/images/woman.webp" },
    { name: "Spotify Playlist", img: "/images/woman.webp" },
  ];

  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <main className="flex justify-center">
      <Layout>
        <section className="m-auto flex min-h-screen flex-col gap-10 md:mx-8 md:gap-14 lg:mx-10 lg:mt-20 lg:gap-20">
          <h1
            className={`${roboto.className} fadein-left flex justify-center text-5xl tracking-wider text-gray-500 text-opacity-10 sm:text-7xl md:text-8xl lg:justify-start lg:text-9xl`}
          >
            PRODUCTS
          </h1>
          <div className="grid grid-cols-1 gap-8 md:gap-16 lg:grid-cols-2 lg:gap-20">
            {products.map((product, index) => (
              <div
                key={index}
                className="aspect-w-16 aspect-h-9 overflow-hidden opacity-80 duration-700"
              >
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className={cn(
                    "bg-gray-200 object-contain duration-700 ease-in-out group-hover:opacity-40",
                    isLoading
                      ? "scale-100 blur-2xl grayscale"
                      : "scale-100 blur-0 grayscale-0"
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
                <div className="fadein-bottom z-10 flex flex-col items-center justify-center text-black backdrop-blur-sm">
                  <h1
                    className={`${roboto.className} p-2 text-2xl text-opacity-100`}
                  >
                    {product.name}
                  </h1>
                  <p>{product.discription}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default Product;
