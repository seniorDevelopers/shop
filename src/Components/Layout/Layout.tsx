import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
