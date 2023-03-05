import { NextPage } from "next";
import Layout from "components/Layout";
import Image from "next/image";

import { useState } from "react";

const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const About: NextPage = () => {
  const [isLoading, setLoading] = useState<boolean>(true);

  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center gap-20">
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
        <div>
          <h1 className="text-4xl">Matsui Ryota</h1>
        </div>
      </div>
    </Layout>
  );
};

export default About;
