// React imports
import * as React from "react";
import { useContext, useState } from "react";

// Source imports
import CartContext from "../../../../store/cart-context";

// React Router Dom imports
import { NavLink } from "react-router-dom";

// Mui Imports
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Mui Components Imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import { currencyFormatOptions } from "../../../../utils/utils";
import CartItem from "./CartItem/CartItem";
import CartMoneyInfo from "./CartMoneyInfo/CartMoneyInfo";

const Cart = (props) => {
  const theme = useTheme();

  const extraSmallScreenMatch = useMediaQuery(theme.breakpoints.up("xs"));

  const cartCtx = useContext(CartContext);
  const products = cartCtx.items;
  console.log(products);

  const totalCartMoney = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(cartCtx.totalMoney);

  // const titleMatch = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography
        fontFamily="Libre Bodoni"
        component="h3"
        variant="h4"
        mt={16}
        mb={8}
        textAlign="center"
      >
        Giỏ hàng
      </Typography>
      <Box
        sx={{
          overflow: "auto",

          minHeight: extraSmallScreenMatch ? "348px" : "500px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {products &&
            products.map((product, index) => {
              return (
                <CartItem
                  key={index}
                  cartId={index}
                  product={product}
                  removeItem={cartCtx.removeItem.bind(null, product.cartId)}
                  increaseItemQuantityFromCart={cartCtx.increaseItemQuantityFromCart.bind(
                    null,
                    product.cartId
                  )}
                  decreaseItemQuantityFromCart={cartCtx.decreaseItemQuantityFromCart.bind(
                    null,
                    product.cartId
                  )}
                />
              );
            })}
        </Box>
      </Box>
      <Box sx={{ minHeight: "140px" }}>
        {/*<Typography fontFamily="Inter" component="h5" mb={4}>*/}
        {/*  Bạn có thể sẽ thích các sản phẩm sau*/}
        {/*</Typography>*/}
      </Box>
      <Box
        sx={{
          pl: 2,
          pr: 2,
          pb: 1,
          justifySelf: "flex-end",
          my: 2,
          backgroundColor: "transparent",
          flexGrow: 1,
        }}
      >
        <CartMoneyInfo totalCartMoney={totalCartMoney} />
        <Button color="primary" variant="contained" fullWidth>
          Thanh toán
        </Button>
      </Box>
    </Box>
  );
};
export default Cart;
