
import Home from "pages/Home/Home";
import Product from "pages/Product/Product";
import Account from "pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";



const routes = [
  { path: `/`, element: <Home/> },
  { path: `/product/:nameProduct`, element: <Product/> },
  { path: `/favorites`, element: <Favorites/> },
  { path: `/cart`, element: <Cart/> },
  { path: `/account`, element: <Account/> }
];
export default routes;
