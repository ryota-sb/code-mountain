import { ReactNode } from "react";

import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="mx-4 max-w-7xl flex-grow md:mx-8 lg:mx-10">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
