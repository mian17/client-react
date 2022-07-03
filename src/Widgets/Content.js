import React from "react";
import Shop from "../Pages/Shop";
import Homepage from "../Pages/Homepage";
import ShopDetails from "../Pages/ShopDetails";
import ShoppingCart from "../Pages/ShoppingCart";
import Checkout from "../Pages/Checkout";
import SignUp from "../Modules/SignUp/SignUp";
import { Routes, Route } from "react-router-dom";

const Content = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />

      {/*<Route path="/shopdetails" element={<ShopDetails />} />*/}
      {/*<ShopDetails />*/}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Content;
