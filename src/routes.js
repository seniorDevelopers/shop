import About from "pages/About/About";
import Account from "pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

const routes = [
  { path: `/`, element: <Home/> },
  { path: `/product/:nameProduct`, element: <Product/> },
  { path: `/product/:nameProduct/:id`, element: <About/> },
  { path: `/favorites`, element: <Favorites/> },
  { path: `/cart`, element: <Cart/> },
  { path: `/account`, element: <Account/> }
];
export default routes;
