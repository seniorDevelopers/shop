import Home from "../src/Pages/Home/Home";
import Product from "../src/Pages/Product/Product";

const routes = [
  { path: `/`, element: <Home/> },
  { path: `/product/:nameProduct`, element: <Product/> },
];
export default routes;
