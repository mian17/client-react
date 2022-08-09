// React imports
import * as PropTypes from "prop-types";
import * as React from "react";

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

// React router dom imports
import { NavLink } from "react-router-dom";

export default function HeaderMenu(props) {
  return (
    <Box className="container-fluid">
      <Box className="row align-items-center">
        <div className="col-lg-3 col-2">
          <nav className="header__menu">
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
          </nav>
        </div>
        <div className="col-lg-6 col-8">
          <div className="header__logo">
            <NavLink to="/" style={{ textDecoration: "none" }}>
              <Typography
                component="h1"
                sx={{
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
                Wieder_ Markt
              </Typography>
            </NavLink>
          </div>
        </div>
        <div className="col-lg-3 col-2">
          <div className="header__cart">
            <ul>
              <li>
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
              </li>
            </ul>
          </div>
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
        </div>
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
