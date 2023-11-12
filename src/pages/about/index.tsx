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
    <main className="flex justify-center">
      <Layout>
        <section className="m-auto flex min-h-screen flex-col gap-10 md:mx-8 md:gap-14 lg:mx-10 lg:mt-20 lg:gap-20">
          <h1
            className={`${roboto.className} fadein-left flex justify-center text-6xl tracking-wider text-gray-500 text-opacity-10 sm:text-7xl md:text-8xl lg:justify-start lg:text-9xl`}
          >
            ABOUT
          </h1>
          <div className="relative flex flex-col items-center gap-10 lg:flex-row lg:gap-40">
            <div
              className={cn(
                "w-64 duration-700 ease-in-out group-hover:opacity-40",
                isLoading
                  ? "scale-100 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              )}
            >
              <Image
                src="/images/ryota.jpg"
                alt="Matsui Ryota"
                width={400}
                height={400}
                className="fancy-border-radius"
                onLoadingComplete={() => setLoading(false)}
              />
            </div>

            <div className="fadein-top flex flex-col gap-6 text-center md:text-start">
              <h2 className="text-3xl md:text-4xl">松井 亮太</h2>
              <p>生年月日: 1994年12月6日生まれ</p>
              <p>出身地: 静岡県</p>
              <p>現住: 東京都</p>
              <p>趣味: スノーボード、プログラミング、ゲーム</p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start">
            <div className="fadein-top relative left-10 flex justify-end">
              <span className="arrow" />
              <button>
                <Link href="/about/details">Read more</Link>
              </button>
            </div>
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default About;
