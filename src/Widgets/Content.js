import React from "react";
import Shop from "../Pages/Shop";
import Homepage from "../Pages/Homepage";
import ShopDetails from "../Pages/ShopDetails";
import ForgotPassword from "../Modules/ForgotPassword/ForgotPassword";
import ShoppingCart from "../Pages/ShoppingCart";
import Checkout from "../Pages/Checkout";
import SignUp from "../Modules/SignUp/SignUp";

import { Routes, Route } from "react-router-dom";
import SignInMobile from "../Modules/SignIn/SignInMobile";

import Profile from "../Modules/User/Account/Profile";
// import User from "../Modules/User/User";
// import User from "../Modules/User/User";

const Content = () => {
  return (
    <Routes>
      <Route index path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />

      {/*<Route path="/shopdetails" element={<ShopDetails />} />*/}
      {/*<ShopDetails />*/}
      <Route path="/signinmobile" element={<SignInMobile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/user/account" element={<Profile />}>
        <Route index element={<Profile />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default Content;
