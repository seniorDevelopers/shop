
import Footer from "components/Footer/Footer";
import Header from "components/header/Header";


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
