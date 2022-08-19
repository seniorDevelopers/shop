import FooterContainer from "components/Footer/Footer";
import Header from "components/Header/Header";
import React from "react";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <FooterContainer />
    </>
  );
};

export default Layout;
