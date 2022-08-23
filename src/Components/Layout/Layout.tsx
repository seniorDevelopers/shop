import FooterContainer from "components/Footer/Footer";
import Header from "components/Header/Header";

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
