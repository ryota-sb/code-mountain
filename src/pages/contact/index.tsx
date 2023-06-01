import { NextPage } from "next";

import { useForm, SubmitHandler } from "react-hook-form";

import Layout from "components/Layout";

import { ContactFormInput } from "types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import { Montserrat } from "next/font/google";
import React from "react";
const roboto = Montserrat({ subsets: ["latin"], weight: "700" });

const Contact: NextPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInput>({
    mode: "onChange",
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactFormInput> = async (data) => {
    await fetch("api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.status === 200) console.log("メールの送信が完了しました");
    });
    reset();
  };
  return (
    <main className="flex justify-center">
      <Layout>
        <section className="m-auto flex min-h-screen flex-col gap-10 md:mx-8 md:gap-14 lg:mx-10 lg:mt-20 lg:gap-20">
          <h1
            className={`${roboto.className} fadein-left flex justify-center text-5xl tracking-wider text-gray-500 text-opacity-10 sm:text-7xl md:text-8xl lg:justify-start lg:text-9xl`}
          >
            CANTACT
          </h1>
          <div className="h-full rounded-3xl p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-10">
                <div className="grid grid-cols-2 gap-20">
                  <div className="flex flex-col gap-y-3">
                    <label>お名前</label>
                    <input
                      {...register("name", { required: true })}
                      className="rounded-3xl border border-white bg-gray-500 bg-opacity-0 py-2 px-4"
                      placeholder="例) 松井 亮太"
                    />
                    {errors.name && (
                      <h1 className="text-red-500">お名前を入力してください</h1>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-3">
                    <label>メールアドレス</label>
                    <input
                      {...register("email", { required: true })}
                      className="rounded-3xl border border-white bg-gray-500 bg-opacity-0 py-2 px-4"
                      placeholder="例) code@example.com"
                    />
                    {errors.email && (
                      <h1 className="text-red-500">
                        メールアドレスを入力してください
                      </h1>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-3">
                  <label>メッセージ内容</label>
                  <textarea
                    {...register("message", { required: true })}
                    className="h-96 rounded-3xl border border-white bg-gray-500 bg-opacity-0 py-2 px-4"
                    placeholder="メッセージを記入してください。"
                  />
                  {errors.message && (
                    <h1 className="text-red-500">
                      メッセージを入力してください
                    </h1>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="my-4 h-14 w-14 cursor-pointer rounded-full bg-gray-500 bg-opacity-10 hover:scale-110 hover:duration-500"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </main>
  );
};

export default Contact;
