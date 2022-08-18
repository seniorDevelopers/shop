<<<<<<< HEAD
import Footer from "Components/Footer/Footer";
import Header from "Components/header/Header";
import React from "react";


=======
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
>>>>>>> 13b2689ab2c9cdd1e19818c914c43024de8c0aec

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
