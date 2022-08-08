// React imports
import { useState } from "react";

// Source imports
import { currencyFormatOptions } from "../../../utils/utils";
import classes from "./SpotlightProduct.module.css";

// Mui imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HoverableProductItemImage from "../HoverableProductItemImage/HoverableProductItemImage";

const product = {
  productId: 1,
  imageUrl: "/img/spotlight-product/spotlight-product-1.png",
  altImageUrl: "something",
  imageUrlOnHover: "/img/spotlight-product/spotlight-product-1-hover.jpg",
  altImageUrlOnHover: "other something",
  productName: "Táo Braeburn",
  price: "159000",
  description:
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
  statusCode: 1,
};

const SpotlightProduct = () => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const formattedProductPrice = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(product.price);

  return (
    <Grid sx={{ borderBottom: "1px solid #bdb498" }} container>
      <Grid
        md={4}
        item
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          borderRight: "1px solid #bdb498",
          height: tabletScreenMatch ? "32vh" : null,
          width: tabletScreenMatch ? "100%" : null,
          backgroundImage: tabletScreenMatch
            ? "url('/img/spotlight-product/spotlight-product-background.png')"
            : null,
          backgroundPosition: tabletScreenMatch ? "bottom" : null,
          backgroundSize: tabletScreenMatch ? "cover" : null,
        }}
      >
        {/*Tên sản phẩm và description*/}

        <Typography
          component="h4"
          variant={tabletScreenMatch ? "h5" : "h4"}
          fontFamily="Libre Bodoni"
          sx={{ fontWeight: 700, m: 4 }}
          textAlign={tabletScreenMatch ? "left" : "center"}
        >
          {product.productName}
        </Typography>
        {!tabletScreenMatch && (
          <Box
            sx={{
              flexGrow: 1,
              backgroundImage:
                "url('/img/spotlight-product/spotlight-product-background.png')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></Box>
        )}

        <Typography
          paragraph
          variant="body"
          sx={{
            p: 2,
            width: "70%",
            color: "inherit",
            fontSize: tabletScreenMatch ? 14 : 16,
            textAlign: "center",
            lineHeight: 1.3,
            position: "absolute",

            bottom: 0,
            right: 0,
          }}
        >
          {product.description}
        </Typography>
      </Grid>
      <Grid md={8} sx={{ position: "relative" }} item>
        {/*Hình sản phẩm, nút mua hàng, giá tiền*/}

        <HoverableProductItemImage product={product} />

        <Box
          m={4}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography
            component="h5"
            variant={tabletScreenMatch ? "h6" : "h5"}
            sx={{ fontWeight: 700 }}
            fontFamily="Libre Bodoni"
          >
            {product.productName}
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: tabletScreenMatch ? 14 : null }}
          >
            Chọn mua - {formattedProductPrice}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default SpotlightProduct;
