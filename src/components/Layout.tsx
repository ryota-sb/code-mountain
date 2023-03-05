import { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col bg-black text-white">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
