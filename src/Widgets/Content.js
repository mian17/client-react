import React, {useContext, useLayoutEffect} from "react";
import Shop from "../Pages/Shop";
import Homepage from "../Pages/Homepage";
import ShopDetails from "../Pages/ShopDetails";
import ForgotPassword from "../Modules/ForgotPassword/ForgotPassword";
import Checkout from "../Pages/Checkout";
import SignUp from "../Modules/SignUp/SignUp";

import {Navigate, Outlet, Route, Routes, useLocation} from "react-router-dom";
import SignInMobile from "../Modules/SignIn/SignInMobile";

import Account from "../Modules/User/Account/Account";
import Profile from "../Modules/User/Account/AccountContent/Profile/Profile";
import Address from "../Modules/User/Account/AccountContent/Address/Address";
import ChangePassword from "../Modules/User/Account/AccountContent/ChangePassword/ChangePassword";
import Orders from "../Modules/User/Orders/Orders";
import Notifications from "../Modules/User/Notification/Notifications";
import ShopDetailsHeader from "../Modules/ShopDetails/ShopDetailsHeader/ShopDetailsHeader";
import AuthContext from "../store/auth-context";
import Footer from "./Footer";
import ThankYou from "../Pages/ThankYou";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const Content = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <Wrapper>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/category/:id/product" element={<Shop />} />

        <Route path="/product/:id" element={<ShopDetails />} />

        <Route
          path="/signin"
          element={
            <>
              <ShopDetailsHeader />
              <SignInMobile/>
              <Footer/>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <ShopDetailsHeader />
              <SignUp/>
              <Footer/>
            </>
          }
        />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/*<Route path="/cart" element={<ShoppingCart />} />*/}
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/user"
          element={loggedIn ? <Outlet /> : <Navigate to="/signin" />}
        >
          <Route path="/user/account" element={<Account/>}>
            <Route path="profile" element={<Profile/>}/>
            <Route path="address" element={<Address/>}/>
            <Route path="changepassword" element={<ChangePassword/>}/>
          </Route>

          <Route path="/user/orders" element={<Orders/>}/>
          <Route path="/user/notifications" element={<Notifications/>}/>
        </Route>

        <Route path="/thank-you" element={<ThankYou/>}/>
      </Routes>
    </Wrapper>
  );
};

export default Content;
