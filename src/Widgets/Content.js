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

import Account from "../Modules/User/Account/Account";
import Profile from "../Modules/User/Account/AccountContent/Profile/Profile";
import Address from "../Modules/User/Account/AccountContent/Address/Address";
import ChangePassword from "../Modules/User/Account/AccountContent/ChangePassword/ChangePassword";
import Orders from "../Modules/User/Orders/Orders";
import Notifications from "../Modules/User/Notification/Notifications";

const Content = () => {
  return (
    <Routes>
      <Route index path="/" element={<Homepage />} />
      <Route path="/product/all" element={<Shop />} />

      {/*<Route path="/shopdetails" element={<ShopDetails />} />*/}

      <Route path="/signinmobile" element={<SignInMobile />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/cart" element={<ShoppingCart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/user">
        <Route path="/user/account" element={<Account />}>
          {/*<Route index element={<Account />} />*/}
          <Route path="profile" element={<Profile />} />
          <Route path="address" element={<Address />} />
          <Route path="changepassword" element={<ChangePassword />} />
          {/*<Route*/}
        </Route>

        <Route path="/user/orders" element={<Orders />} />
        <Route path="/user/notifications" element={<Notifications />} />

        {/*/!*<Route index element={<Account />} />*!/*/}
        {/*<Route path="profile" element={<Profile />} />*/}
        {/*<Route path="address" element={<Address />} />*/}
        {/*<Route path="changepassword" element={<ChangePassword />} />*/}
        {/*/!*<Route*!/*/}
      </Route>
    </Routes>
  );
};

export default Content;
