import { ReactNode } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
