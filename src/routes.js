import Home from "Pages/Home/Home";
import Product from "Pages/Product/Product";

const routes = [
  { path: `/`, element: <Home /> },
  { path: `/product/:nameProduct`, element: <Product /> },
];
export default routes;
