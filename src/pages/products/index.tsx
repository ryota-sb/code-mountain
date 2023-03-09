import { NextPage } from "next";
import Image from "next/image";

import { useState } from "react";

import Layout from "components/Layout";

import { Montserrat } from "next/font/google";
const roboto = Montserrat({ subsets: ["latin"], weight: "700" });

const Product: NextPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const products = [
    { name: "Code Atelier", img: "/images/woman.webp" },
    { name: "ally", img: "/images/woman.webp" },
    { name: "Spotify Playlist", img: "/images/woman.webp" },
  ];

  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Layout>
      <div className="mx-10 mt-20 flex min-h-screen flex-col gap-20">
        <h1
          className={`${roboto.className} fadein-left flex text-9xl tracking-wider text-gray-500 text-opacity-10`}
        >
          PRODUCTS
        </h1>
        <div className="grid grid-cols-2 gap-20">
          {products.map((product) => (
            <div className="aspect-w-16 aspect-h-9 overflow-hidden opacity-70 duration-700 hover:opacity-30">
              <Image
                src={product.img}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className={cn(
                  "duration-700 ease-in-out group-hover:opacity-40",
                  isLoading
                    ? "scale-100 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                )}
                onLoadingComplete={() => setLoading(false)}
              />
              <h1
                className={`${roboto.className} fadein-bottom flex items-end p-6 text-2xl hover:opacity-100`}
              >
                {product.name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Product;
