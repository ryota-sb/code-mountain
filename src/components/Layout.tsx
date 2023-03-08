import { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="mx-20 mt-10 mb-5 flex-grow">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
