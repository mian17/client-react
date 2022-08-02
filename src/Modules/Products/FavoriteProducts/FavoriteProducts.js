import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import HoverableProductItemImage from "../HoverableProductItemImage/HoverableProductItemImage";
import { useState } from "react";
import Button from "@mui/material/Button";
import { currencyFormatOptions } from "../../../utils/utils";
import { ButtonBase } from "@mui/material";
import * as PropTypes from "prop-types";
import ProductItemInfo from "../ProductItemInfo/ProductItemInfo";

const products = [
  {
    productId: 1,
    imageUrl: "/img/spotlight-product/spotlight-product.png",
    altImageUrl: "something",
    imageUrlOnHover: "/img/spotlight-product/spotlight-product-hover.jpg",
    altImageUrlOnHover: "other something",
    productName: "Táo Braeburn",
    price: "159000",
    description:
      "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    status: "Hàng mới!",
  },
  {
    productId: 2,
    imageUrl: "/img/spotlight-product/spotlight-product.png",
    altImageUrl: "something",
    imageUrlOnHover: "/img/spotlight-product/spotlight-product-hover.jpg",
    altImageUrlOnHover: "other something",
    productName: "Táo Braeburn",
    price: "159000",
    description:
      "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    status: "Hàng mới!",
  },
  {
    productId: 3,
    imageUrl: "/img/spotlight-product/spotlight-product.png",
    altImageUrl: "something",
    imageUrlOnHover: "/img/spotlight-product/spotlight-product-hover.jpg",
    altImageUrlOnHover: "other something",
    productName: "Táo Braeburn",
    price: "159000",
    description:
      "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    status: "Hàng mới!",
  },
];

const FavoriteProducts = () => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid container>
      <Grid
        md={3}
        sm={6}
        xs={6}
        sx={{
          borderBottom: "1px solid #bdb498",
          borderRight: "1px solid #bdb498",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
          // maxWidth: "25%",
        }}
        item
      >
        <Typography
          component="h4"
          variant={tabletScreenMatch ? "h5" : "h4"}
          sx={{ fontWeight: 700 }}
          fontFamily="Libre Bodoni"
        >
          Sản phẩm Organic
        </Typography>
        <Typography
          paragraph
          variant="body"
          sx={{ color: "inherit", textAlign: "right" }}
        >
          A id laborum minus necessitatibus unde. Dolores laboriosam porro quo
          recusandae tempore velit vitae!
        </Typography>
      </Grid>
      {products.map((product, index) => {
        const formattedProductPrice = new Intl.NumberFormat(
          "vi-VN",
          currencyFormatOptions
        ).format(product.price);
        return (
          <Grid
            key={index}
            md={3}
            sm={6}
            xs={6}
            sx={{
              borderBottom: "1px solid #bdb498",
              borderRight: "1px solid #bdb498",
            }}
            item
          >
            <Box sx={{ position: "relative" }}>
              <HoverableProductItemImage product={product} />
              <ProductItemInfo
                product={product}
                formattedProductPrice={formattedProductPrice}
              />
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
};
export default FavoriteProducts;
