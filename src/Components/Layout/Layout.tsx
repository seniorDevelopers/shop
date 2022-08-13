import Footer from "Components/Footer/Footer";
import Header from "Components/header/Header";
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
