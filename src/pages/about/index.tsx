import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";

import Layout from "components/Layout";

import { Montserrat } from "next/font/google";
const roboto = Montserrat({ subsets: ["latin"], weight: "700" });

const About: NextPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  const cn = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Layout>
      <div className="mx-10 mt-20 flex min-h-screen flex-col gap-20">
        <h1
          className={`${roboto.className} fadein-left flex text-9xl tracking-wider text-gray-500 text-opacity-10`}
        >
          ABOUT
        </h1>
        <div className="flex items-center gap-40">
          <Image
            src="/images/ryota.jpg"
            alt="Matsui Ryota"
            width={400}
            height={400}
            className={cn(
              "fancy-border-radius duration-700 ease-in-out group-hover:opacity-40",
              isLoading
                ? "scale-100 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
            )}
            onLoadingComplete={() => setLoading(false)}
          />
          <div className="fadein-top flex flex-col gap-6">
            <h1 className="text-4xl">松井 亮太</h1>
            <p>1994年12月6日生まれ</p>
            <p>静岡県浜松市在住</p>
            <p>趣味は、スノーボード、プログラミング、ゲームなどです。</p>
          </div>
        </div>
        <div className="fadein-top relative flex justify-end">
          <div className="arrow"></div>
          <button>
            <Link href="/about/details">Read more</Link>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default About;
