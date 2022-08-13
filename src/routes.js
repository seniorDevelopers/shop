import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

const routes = [
  { path: `/`, element: <Home/> },
  { path: `/product/:nameProduct`, element: <Product/> },
];
export default routes;
