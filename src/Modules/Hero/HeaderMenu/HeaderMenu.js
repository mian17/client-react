// React imports
import * as PropTypes from "prop-types";
import * as React from "react";
import { useContext, useEffect, useState } from "react";

// Source imports
import EmptyCart from "./EmptyCart/EmptyCart";
import Cart from "./Cart/Cart";

// Mui imports
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Badge from "@mui/material/Badge";

import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import PersonIcon from "@mui/icons-material/Person";
// React router dom imports
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import AuthContext from "../../../store/auth-context";
import apiClient from "../../../api";
import Link from "@mui/material/Link";
import SearchDialog from "../../Modal/SearchDialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function HeaderMenu(props) {
  const { loggedIn, setLoggedOut } = useContext(AuthContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const [openSearch, setOpenSearch] = React.useState(false);

  const handleSearchClickOpen = () => {
    setOpenSearch(true);
  };

  const handleSearchClose = () => {
    setOpenSearch(false);
  };

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
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
  }, [loggedIn]);
  // Media Query for Close Menu Button
  const theme = useTheme();

  // Remove background changing effect on small devices
  // and later on other effects too, such as hovering link to change text's color
  const phoneScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box component="nav" className="container-fluid">
      <Box className="row align-items-center">
        <div className="col-lg-4 col-md-3 col-2">
          <div>
            {props.changeMenuButton ? (
              <Button
                variant="contained"
                size="large"
                color="customTransparent"
                onClick={props.onClick}
                sx={{
                  textTransform: "capitalize",
                  minWidth: 140,
                  backgroundColor:
                    props.notTriggeredCase || props.triggeredCase
                      ? "transparent"
                      : "#f4f1e0",
                  color:
                    props.notTriggeredCase || props.triggeredCase
                      ? "#f4f1e0"
                      : "#321e1e",
                  transition: "all 0.3s",
                }}
              >
                {props.hideCategories ? "Danh mục" : "Đóng menu"}
              </Button>
            ) : (
              <IconButton
                color="customTransparent"
                onClick={props.onClick}
                sx={{
                  textTransform: "capitalize",
                  color:
                    props.notTriggeredCase || props.triggeredCase
                      ? "#f4f1e0"
                      : "#321e1e",
                  transition: "all 0.3s",
                }}
                size={props.smallScreenMatch ? "large" : "medium"}
              >
                <MenuIcon />
              </IconButton>
            )}
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
                    props.notTriggeredCase || props.triggeredCase
                      ? "#f4f1e0"
                      : "#321e1e"
                  }`,
                  color:
                    props.notTriggeredCase || props.triggeredCase
                      ? "#f4f1e0"
                      : "#321e1e",
                  fontSize: props.changeMenuButton
                    ? 40
                    : props.extraSmallScreenMatch
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
            {/*<IconButton*/}
            {/*  color="customTransparent"*/}
            {/*  size={props.smallScreenMatch ? "large" : "medium"}*/}
            {/*  sx={{*/}
            {/*    color:*/}
            {/*      props.notTriggeredCase || props.triggeredCase*/}
            {/*        ? "#f4f1e0"*/}
            {/*        : "#321e1e",*/}
            {/*    transition: "all 0.3s",*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <SearchIcon />*/}
            {/*</IconButton>*/}
            <SearchDialog
              smallScreenMatch={props.smallScreenMatch}
              notTriggeredCase={props.notTriggeredCase}
              triggeredCase={props.triggeredCase}
            />

            {loggedIn && (
              <>
                <IconButton
                  color="customTransparent"
                  size={props.smallScreenMatch ? "large" : "medium"}
                  sx={{
                    color:
                      props.notTriggeredCase || props.triggeredCase
                        ? "#f4f1e0"
                        : "#321e1e",
                    transition: "all 0.3s",
                  }}
                  onClick={handleMenuClick}
                >
                  <PersonIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleMenuClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  disableScrollLock
                >
                  {isAdmin && (
                    <MenuItem
                      component={Link}
                      href="http://localhost:3001/"
                      onClick={handleMenuClose}
                    >
                      Trang Admin
                    </MenuItem>
                  )}

                  <MenuItem
                    component={NavLink}
                    to="/user/account/profile"
                    onClick={handleMenuClose}
                  >
                    Hồ sơ tài khoản
                  </MenuItem>
                  <MenuItem
                    component={NavLink}
                    to="/user/orders"
                    onClick={handleMenuClose}
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
              size={props.smallScreenMatch ? "large" : "medium"}
              sx={{
                color:
                  props.notTriggeredCase || props.triggeredCase
                    ? "#f4f1e0"
                    : "#321e1e",
                transition: "all 0.3s",
              }}
              onClick={props.onClick1}
            >
              <Badge
                badgeContent={props.badgeContent}
                color="customBadge"
                showZero
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Box>
          <Drawer
            anchor="right"
            open={!props.hideCart}
            onClose={props.onClick1}
            PaperProps={{
              sx: {
                width: props.changeCartToFullWidth ? "54%" : "100%",
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
              p={!props.badgeContent ? 2 : 0}
              sx={{ height: "100%", width: "100%", py: 1 }}
            >
              <IconButton
                onClick={props.onClick1}
                size="large"
                color="primary"
                sx={{ position: "absolute", right: 20, top: "78px" }}
              >
                <CloseIcon />
              </IconButton>

              {!props.badgeContent ? <EmptyCart /> : <Cart />}
            </Box>
          </Drawer>
        </Box>
      </Box>
    </Box>
  );
}

HeaderMenu.propTypes = {
  changeMenuButton: PropTypes.bool,
  onClick: PropTypes.func,
  notTriggeredCase: PropTypes.any,
  triggeredCase: PropTypes.any,
  hideCategories: PropTypes.bool,
  smallScreenMatch: PropTypes.bool,
  extraSmallScreenMatch: PropTypes.bool,
  onClick1: PropTypes.func,
  badgeContent: PropTypes.any,
  hideCart: PropTypes.bool,
  changeCartToFullWidth: PropTypes.bool,
};
