<<<<<<< HEAD
import Home from "Pages/Home/Home";
import Product from "Pages/Product/Product";
=======
import Account from "pages/Account/Account";
import Cart from "./pages/Cart/Cart";
import Favorites from "./pages/Favorites/Favorites";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
>>>>>>> 13b2689ab2c9cdd1e19818c914c43024de8c0aec

const routes = [
  { path: `/`, element: <Home/> },
  { path: `/product/:nameProduct`, element: <Product/> },
  { path: `/favorites`, element: <Favorites/> },
  { path: `/cart`, element: <Cart/> },
  { path: `/account`, element: <Account/> }
];
export default routes;
