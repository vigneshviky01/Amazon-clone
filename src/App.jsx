import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Logobar from "./components/Logobar";
import MiniCart from "./components/MiniCart";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import SearchPage from "./pages/SearchPage";
// import CheckOutPage from "./pages/CheckOutPage";

import { calculateTotals } from "./features/cart/cartSlice";
import Checkout from './pages/Checkout';

function App() {
  const { quantity, cartShow, cartItems } = useSelector((store) => store.cart);

  const dispatch = useDispatch();
  const location = useLocation();

  // Hide Navbar on login and signup pages
  const hideNavbarRoutes = ["/login", "/signup"];
  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);
  const showMiniCartRoutes = ["/", "/product", "/search"];
  const productDetailRegex = /^\/product\/[^/]+$/; // Matches /product/:id

  const hideMiniCart = !(
    showMiniCartRoutes.includes(location.pathname) ||
    productDetailRegex.test(location.pathname)
  );

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <>
      {shouldShowNavbar ? <Navbar /> : <Logobar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/checkout" element={<Checkout />}/>
        {/* <Route path="/checkout" element={<CheckOutPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideMiniCart && cartShow && <MiniCart />}
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}