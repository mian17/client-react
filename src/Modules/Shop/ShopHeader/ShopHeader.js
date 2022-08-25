import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import EmptyCart from "../../Hero/HeaderMenu/EmptyCart/EmptyCart";
import Cart from "../../Hero/HeaderMenu/Cart/Cart";
import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CategoryDrawer from "../../Hero/CategoryDrawer/CategoryDrawer";

import SubcategoryCollection from "../ShopBanner/SubcategoryCollection/SubcategoryCollection";

const ShopHeader = () => {
  const cartCtx = useContext(CartContext);

  // cartCtx operations
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.productQuantity;
  }, 0);

  // Categories
  const [hideCategories, setHideCategories] = useState(true);
  const [hideCart, setHideCart] = useState(true);

  const toggleLeftDrawerHandler = () => {
    setHideCategories(!hideCategories);
    setTimeout(() => {
      setHeaderBackgroundIndex(undefined);
    }, 10);
  };

  const toggleRightDrawerHandler = () => {
    setHideCart(!hideCart);
  };

  const [headerBackgroundIndex, setHeaderBackgroundIndex] = useState(undefined);

  const changeHeaderBackgroundHandler = (e) => {
    setHeaderBackgroundIndex(+e.target.closest("a").dataset.category);
  };

  // Media Query for Close Menu Button
  const theme = useTheme();
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));

  // Remove background changing effect on small devices
  // and later on other effects too, such as hovering link to change text's color
  const changeCartToFullWidth = useMediaQuery(theme.breakpoints.up("md"));
  const changeMenuButton = useMediaQuery(theme.breakpoints.up("md"));

  const smallScreenMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const extraSmallScreenMatch = useMediaQuery(theme.breakpoints.up("xs"));

  // Conditions to trigger on scroll

  // hideCategories is currently true
  // const notTriggeredCase =
  const notTriggeredCase =
    hideCategories ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch);

  const navBarHeightRef = useRef();
  const [appBarBoxHeight, setAppBarBoxHeight] = useState(0);

  useEffect(() => {
    setAppBarBoxHeight(navBarHeightRef.current.clientHeight);

    return function cleanup() {
      setAppBarBoxHeight(0);
    };
  }, [setAppBarBoxHeight, appBarBoxHeight]);

  const normalHeaderCondition =
    hideCategories ||
    ((headerBackgroundIndex === undefined || headerBackgroundIndex === null) &&
      !hideCategories) ||
    !(
      (headerBackgroundIndex || headerBackgroundIndex === 0) &&
      !hideCategories
    ) ||
    !smallScreenMatch;

  const [tabValue, setTabValue] = React.useState(0);

  const tabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const onScrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  const [subcategoryCount, setSubcategoryCount] = useState(null);
  const { id: categoryId } = useParams();
  const [currentCategoryId, setCurrentCategoryId] = useState(categoryId);
  useEffect(() => {
    async function fetchCategoryLength() {
      //Get Id from url
      setCurrentCategoryId(categoryId);
      const response = await fetch(
        "http://127.0.0.1:8000/api/category/" + currentCategoryId
      );
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await response.json();
      // console.log(data.subcategory.length);
      setSubcategoryCount(data.subcategory.length);
    }

    fetchCategoryLength();
  }, [categoryId, currentCategoryId, subcategoryCount]);

  return (
    <>
      <Box sx={{ height: appBarBoxHeight }}></Box>
      <Box component="header">
        <Box sx={{ position: "fixed", width: "100%", top: 0, zIndex: 200 }}>
          <Box
            sx={{
              backgroundColor: normalHeaderCondition
                ? "#f4f1e0"
                : "transparent",
              color: "#321e1e",
              transition: "all 0.3s",
            }}
            elevation={0}
            ref={navBarHeightRef}
          >
            <CategoryDrawer
              hideCategories={hideCategories}
              getCategoryId={changeHeaderBackgroundHandler}
              headerBackgroundIndex={headerBackgroundIndex}
              changeLinkColorCondition={notTriggeredCase}
            />

            {/*<HeaderMenu*/}
            {/*  changeMenuButton={changeMenuButton}*/}
            {/*  onClick={toggleLeftDrawerHandler}*/}
            {/*  notTriggeredCase={notTriggeredCase}*/}
            {/*  triggeredCase={triggeredCase}*/}
            {/*  hideCategories={hideCategories}*/}
            {/*  smallScreenMatch={smallScreenMatch}*/}
            {/*  extraSmallScreenMatch={extraSmallScreenMatch}*/}
            {/*  onClick1={toggleRightDrawerHandler}*/}
            {/*  badgeContent={numberOfCartItems}*/}
            {/*  hideCart={hideCart}*/}
            {/*  changeCartToFullWidth={changeCartToFullWidth}*/}
            {/*/>*/}
            <Box component="nav" className="container-fluid">
              <Box className="row align-items-center">
                <div className="col-lg-3 col-2">
                  <div>
                    {changeMenuButton ? (
                      <Button
                        variant="contained"
                        size="large"
                        color="customTransparent"
                        onClick={toggleLeftDrawerHandler}
                        sx={{
                          textTransform: "capitalize",
                          minWidth: 140,
                          backgroundColor: hideCategories
                            ? "#f4f1e0"
                            : "transparent",

                          color: normalHeaderCondition ? "#321e1e" : "#f4f1e0",
                          transition: "all 0.3s",
                        }}
                      >
                        {hideCategories ? "Danh mục" : "Đóng menu"}
                      </Button>
                    ) : (
                      <IconButton
                        color="customTransparent"
                        onClick={toggleLeftDrawerHandler}
                        sx={{
                          textTransform: "capitalize",
                          color: normalHeaderCondition ? "#321e1e" : "#f4f1e0",
                          transition: "all 0.3s",
                        }}
                        size={smallScreenMatch ? "large" : "medium"}
                      >
                        <MenuIcon />
                      </IconButton>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 col-8">
                  <Box
                    sx={{
                      padding: "30px 0",
                      textAlign: "center",
                    }}
                  >
                    <NavLink to="/" style={{ textDecoration: "none" }}>
                      <Typography
                        component="h1"
                        sx={{
                          display: "inline-block",
                          borderBottom: `2px solid ${
                            normalHeaderCondition ? "#321e1e" : "#f4f1e0"
                          }`,
                          color: normalHeaderCondition ? "#321e1e" : "#f4f1e0",
                          fontSize: changeMenuButton
                            ? 40
                            : extraSmallScreenMatch
                            ? 28
                            : 36,
                          mr: 2,
                          transition: "all 0.3s",
                        }}
                      >
                        Wieder_ Markt
                      </Typography>
                    </NavLink>
                  </Box>
                </div>
                <Box className="col-lg-3 col-2">
                  <Box sx={{ textAlign: "right" }}>
                    <IconButton
                      color="customTransparent"
                      size={smallScreenMatch ? "large" : "medium"}
                      sx={{
                        color: normalHeaderCondition ? "#321e1e" : "#f4f1e0",
                        transition: "all 0.3s",
                      }}
                      onClick={toggleRightDrawerHandler}
                    >
                      <Badge
                        badgeContent={numberOfCartItems}
                        color="customBadge"
                        showZero
                      >
                        <ShoppingCartIcon />
                      </Badge>
                    </IconButton>
                  </Box>
                  <Drawer
                    anchor="right"
                    open={!hideCart}
                    onClose={toggleRightDrawerHandler}
                    PaperProps={{
                      sx: {
                        width: changeCartToFullWidth ? "54%" : "100%",
                        backgroundColor: "#f4f1e0",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                      },
                    }}
                    SlideProps={{ direction: "left" }}
                    disableScrollLock
                    ModalProps={{
                      keepMounted: true,
                    }}
                  >
                    <Box
                      p={!numberOfCartItems ? 2 : 0}
                      sx={{ height: "100%", width: "100%", py: 1 }}
                    >
                      <IconButton
                        onClick={toggleRightDrawerHandler}
                        size="large"
                        color="primary"
                        sx={{ position: "absolute", right: 20, top: "78px" }}
                      >
                        <CloseIcon />
                      </IconButton>

                      {!numberOfCartItems ? <EmptyCart /> : <Cart />}
                    </Box>
                  </Drawer>
                </Box>
              </Box>
            </Box>
          </Box>
          {subcategoryCount !== 0 && subcategoryCount > 0 && hideCategories && (
            <Box
              sx={{
                width: "100%",

                backgroundColor: onScrollTrigger ? "#f4f1e0" : "transparent",
                transition: "all 0.3s",
                pb: 0.6,
              }}
            >
              {/*SubCategory selection*/}
              {hideCategories && (
                <SubcategoryCollection
                  value={tabValue}
                  onChange={tabChangeHandler}
                  laptopScreenMatch={laptopScreenMatch}
                  onScrollTrigger={onScrollTrigger}
                />
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
export default ShopHeader;
