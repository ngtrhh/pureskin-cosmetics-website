import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Header from "./components/Header";
const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/signup" element={<Register />} exact />
          <Route path="/login" element={<SignIn />} exact />
          <Route
            path="product-list/:categorySlug"
            element={<ProductList />}
            exact
          />
          <Route path="/product-list/:slug" element={<Product />} exact />
        </Routes>
      </Router>
    </>
  );
};

export default App;
