import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { currencyFormatOptions } from "../../../../../utils/utils";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import InputBase from "@mui/material/InputBase";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect, useContext } from "react";
import CartContext from "../../../../../store/cart-context";
const CartItem = (props) => {
  // props.product.productImgAlt = "t-shirt";

  const cartCtx = useContext(CartContext);

  const theme = useTheme();
  const mediumScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          marginTop: 1,
          marginBottom: 1,
          gap: 2,
          alignItems: "center",
        }}
        data-cart-id={props.cartId}
      >
        <Box sx={{ width: 142, height: 142 }}>
          <Box
            component="img"
            src={props.product.productImgUrl}
            sx={{ width: "100%", height: "100%" }}
            alt={
              props.product.hasOwnProperty("productImgAlt")
                ? props.product?.productImgAlt
                : ""
            }
          />
        </Box>
        <Box
          sx={{
            marginY: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 4,
              flexGrow: 1,
            }}
          >
            <Box>
              <Typography
                fontFamily={"Inter"}
                component="h5"
                // noWrap
                variant="subtitle1"
                sx={{
                  fontSize: smallScreenMatch ? 16 : 18,
                }}
              >
                {props.product.productName}
              </Typography>
            </Box>
            <Typography
              component="h6"
              variant="h6"
              fontFamily="Libre Bodoni"
              sx={{
                fontWeight: "bold",
                fontSize: smallScreenMatch ? 16 : 18,
                marginRight: 6,
                justifySelf: "flex-end",
              }}
            >
              {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
                props.product.productPrice
              )}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              // fontSize: smallScreenMatch ? 14 : 16,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid #321e1e",
                width: "fit-content",
              }}
            >
              <IconButton
                disableRipple
                onClick={props.decreaseItemQuantityFromCart}
              >
                <RemoveIcon />
              </IconButton>
              <InputBase
                sx={{
                  color: "inherit",
                  width: smallScreenMatch ? "32px" : "60px",
                }}
                // disabled
                value={props.product.productQuantity}
                //   value={cartCtx.items[props.]}
                inputProps={{
                  style: {
                    textAlign: "center",
                    caretColor: "transparent",
                  },
                }}
              ></InputBase>
              <IconButton
                onClick={props.increaseItemQuantityFromCart}
                disableRipple
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              sx={{
                textTransform: "capitalize",
                textDecoration: "underline",
                fontSize: 16,
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
              size="large"
              variant="text"
              disableRipple
              disableFocusRipple
              disableTouchRipple
              onClick={props.removeItem}
            >
              Xóa
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CartItem;
