import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import CategoryDrawer from "../../Hero/CategoryDrawer/CategoryDrawer";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import EmptyCart from "../../Hero/HeaderMenu/EmptyCart/EmptyCart";
import Cart from "../../Hero/HeaderMenu/Cart/Cart";
import PersonIcon from "@mui/icons-material/Person";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Link from "@mui/material/Link";
import apiClient from "../../../api";
import AuthContext from "../../../store/auth-context";
import SearchDialog from "../../Modal/SearchDialog";

const ShopDetailsHeader = (props) => {
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

  // const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });

  const [headerBackgroundIndex, setHeaderBackgroundIndex] = useState(undefined);

  const changeHeaderBackgroundHandler = (e) => {
    setHeaderBackgroundIndex(+e.target.closest("a").dataset.category);
  };

  // Media Query for Close Menu Button

  const theme = useTheme();
  // const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));

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
  const { loggedIn, setLoggedOut } = useContext(AuthContext);
  useEffect(() => {
    setAppBarBoxHeight(navBarHeightRef.current.clientHeight);
    if (loggedIn) {
      apiClient.get("/sanctum/csrf-cookie").then(() => {
        const userToken = JSON.parse(
          localStorage.getItem("personalAccessToken")
        );
        apiClient
          .get("api/user-is-admin", {
            headers: {
              Authorization: `Bearer ${userToken}`,
              Hashed:
                "$2y$10$TDNaEhzST7979Sj6JQtSc.8kSZhQuQlfgkQ0IrIv/Tp4D7R04aeqq",
            },
          })
          .then((response) => {
            if (response.status === 204) {
              setIsAdmin(true);
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              setIsAdmin(false);
            }
          });
      });
    }

    return function cleanup() {
      setAppBarBoxHeight(0);
    };
  }, [setAppBarBoxHeight, appBarBoxHeight, loggedIn]);

  const normalHeaderCondition =
    hideCategories ||
    ((headerBackgroundIndex === undefined || headerBackgroundIndex === null) &&
      !hideCategories) ||
    !(
      (headerBackgroundIndex || headerBackgroundIndex === 0) &&
      !hideCategories
    ) ||
    !smallScreenMatch;

  // const normalHeaderCondition =
  //   hideCategories ||
  //   ((headerBackgroundIndex === undefined || headerBackgroundIndex === null) &&
  //     !hideCategories) ||
  //   !(
  //     (headerBackgroundIndex || headerBackgroundIndex === 0) &&
  //     !hideCategories
  //   );
  const [isAdmin, setIsAdmin] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const phoneScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      {!props.noFixed && <Box sx={{ height: appBarBoxHeight }}></Box>}
      <Box component="header">
        <Box
          sx={{
            position: props.noFixed ? "" : "fixed",
            width: "100%",
            top: 0,
            zIndex: 200,
          }}
        >
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
                <div className="col-lg-4 col-md-3 col-2">
                  <div>
                    {!props.noFixed &&
                      (changeMenuButton ? (
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

                            color: normalHeaderCondition
                              ? "#321e1e"
                              : "#f4f1e0",
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
                            color: normalHeaderCondition
                              ? "#321e1e"
                              : "#f4f1e0",
                            transition: "all 0.3s",
                          }}
                          size={smallScreenMatch ? "large" : "medium"}
                        >
                          <MenuIcon />
                        </IconButton>
                      ))}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-5">
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
                        {!phoneScreenMatch ? "Wieder_ Markt" : "W_Markt"}
                      </Typography>
                    </NavLink>
                  </Box>
                </div>
                <Box className="col-lg-4 col-md-3 col-5">
                  <Box sx={{ textAlign: "right" }}>
                    <SearchDialog
                      smallScreenMatch={smallScreenMatch}
                      notTriggeredCase={!normalHeaderCondition}
                      triggeredCase={!normalHeaderCondition}
                    />
                    {loggedIn && (
                      <>
                        <IconButton
                          color="customTransparent"
                          size={smallScreenMatch ? "large" : "medium"}
                          sx={{
                            color: normalHeaderCondition
                              ? "#321e1e"
                              : "#f4f1e0",
                            transition: "all 0.3s",
                          }}
                          onClick={handleClick}
                        >
                          <PersonIcon />
                        </IconButton>
                        <Menu
                          id="basic-menu"
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          MenuListProps={{
                            "aria-labelledby": "basic-button",
                          }}
                          disableScrollLock
                        >
                          {isAdmin && (
                            <MenuItem
                              component={Link}
                              href="http://localhost:3001/"
                              onClick={handleClose}
                            >
                              Trang Admin
                            </MenuItem>
                          )}

                          <MenuItem
                            component={NavLink}
                            to="/user/account/profile"
                            onClick={handleClose}
                          >
                            Hồ sơ tài khoản
                          </MenuItem>
                          <MenuItem
                            component={NavLink}
                            to="/user/orders"
                            onClick={handleClose}
                          >
                            Đơn hàng của tôi
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              const userToken = JSON.parse(
                                localStorage.getItem("personalAccessToken")
                              );
                              apiClient.get("/sanctum/csrf-cookie").then(() => {
                                apiClient
                                  .post(
                                    "/logout",
                                    {},
                                    {
                                      headers: {
                                        Authorization: `Bearer ${userToken}`,
                                      },
                                    }
                                  )
                                  .then((response) => {
                                    console.log(response);
                                    setLoggedOut();
                                  })
                                  .catch((err) => {
                                    console.log(err);
                                  });
                              });
                            }}
                          >
                            Đăng xuất
                          </MenuItem>
                        </Menu>
                      </>
                    )}
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
        </Box>
      </Box>
    </>
  );
};

export default ShopDetailsHeader;
