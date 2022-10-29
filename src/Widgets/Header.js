import * as React from "react";
import { useContext, useState } from "react";

import CartContext from "../store/cart-context";

import Box from "@mui/material/Box";
import CategoryDrawer from "../Modules/Hero/CategoryDrawer/CategoryDrawer";
import HeaderMenu from "../Modules/Hero/HeaderMenu/HeaderMenu";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header = () => {
  const cartCtx = useContext(CartContext);

  // cartCtx operations
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.productQuantity;
  }, 0);

  // Categories
  const [hideCategories, setHideCategories] = useState(true);
  const [hideCart, setHideCart] = useState(true);

  const toggleLeftDrawerHandler = () => {
    // console.log("clicked");
    setHideCategories(!hideCategories);
    setTimeout(() => {
      setHeaderBackgroundIndex(undefined);
    }, 10);
  };

  const toggleRightDrawerHandler = () => {
    setHideCart(!hideCart);
  };

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 38 });

  const [headerBackgroundIndex, setHeaderBackgroundIndex] = useState(undefined);

  const changeHeaderBackgroundHandler = (e) => {
    setHeaderBackgroundIndex(+e.target.closest("a").dataset.category);
  };

  // Media Query for Close Menu Button
  const theme = useTheme();

  // Remove background changing effect on small devices
  // and later on other effects too, such as hovering link to change text's color
  const changeCartToFullWidth = useMediaQuery(theme.breakpoints.up("md"));
  const changeMenuButton = useMediaQuery(theme.breakpoints.up("md"));

  const smallScreenMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const extraSmallScreenMatch = useMediaQuery(theme.breakpoints.up("xs"));

  // Conditions to trigger on scroll
  const notTriggeredCase =
    (hideCategories && !trigger) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch &&
      !trigger) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch &&
      !trigger);

  const triggeredCase =
    (!trigger && hideCategories) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch &&
      trigger) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch &&
      trigger);

  return (
    <Box component="header">
      <AppBar
        sx={{
          backgroundColor: !trigger ? "transparent" : "#f4f1e0",
          color: hideCategories && !trigger ? "#f4f1e0" : "#321e1e",
          transition: "all 0.3s",
        }}
        // elevation={!trigger ? 0 : 2}
        elevation={0}
        position="fixed"
      >
        <CategoryDrawer
          hideCategories={hideCategories}
          toggleLeftDrawerHandler={toggleLeftDrawerHandler}
          getCategoryId={changeHeaderBackgroundHandler}
          headerBackgroundIndex={headerBackgroundIndex}
          changeLinkColorCondition={notTriggeredCase || triggeredCase}
        />
        {/*<HeaderTop />*/}

        <HeaderMenu
          changeMenuButton={changeMenuButton}
          onClick={toggleLeftDrawerHandler}
          notTriggeredCase={notTriggeredCase}
          triggeredCase={triggeredCase}
          hideCategories={hideCategories}
          smallScreenMatch={smallScreenMatch}
          extraSmallScreenMatch={extraSmallScreenMatch}
          onClick1={toggleRightDrawerHandler}
          badgeContent={numberOfCartItems}
          hideCart={hideCart}
          changeCartToFullWidth={changeCartToFullWidth}
        />
      </AppBar>
    </Box>
  );
};

export default Header;
