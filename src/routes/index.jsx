import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Product from "../pages/Product";
import ProductList from "../pages/ProductList";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
  { path: "/product-list/:categorySlug", component: ProductList },
  { path: "/product/:slug", component: Product },
];

export { publicRoutes };
