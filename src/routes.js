import Home from "Pages/Home/Home";
import Product from "Pages/Product/Product";
import Account from "Pages/Account/Account";
import Cart from "./Pages/Cart/Cart";
import Favorites from "./Pages/Favorites/Favorites";


const routes = [
  { path: `/`, element: <Home/> },
  { path: `/product/:nameProduct`, element: <Product/> },
  { path: `/favorites`, element: <Favorites/> },
  { path: `/cart`, element: <Cart/> },
  { path: `/account`, element: <Account/> }
];
export default routes;
