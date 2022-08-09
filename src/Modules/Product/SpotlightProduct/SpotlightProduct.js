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

import { spotlightProduct } from "./spotlightProduct-test-data/spotlightProduct";
import { NavLink } from "react-router-dom";

const SpotlightProduct = () => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

  const formattedProductPrice = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(spotlightProduct.price);
  // Ready for API connection
  // const [error, setError] = useState(null);
  // const fetchCategories = useCallback(async () => {
  //   setError(null);
  //   try {
  //     // Get from api
  //     const response = await fetch("https://example.com");
  //     if (!response.ok) {
  //       throw new Error("Không lấy được dữ liệu");
  //     }
  //
  //     const data = await response.json();
  //     // console.log(data);
  //     const transformedCategory = data.map((categoryData) => {
  //       return new Category()
  //     });
  //
  //     setCategories(transformedCategory);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //
  // }, []);
  // Request categories
  // useEffect(() => {
  //     fetchCategories();
  // }, [fetchCategories]);

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
        <Typography
          component="h4"
          variant={tabletScreenMatch ? "h5" : "h4"}
          fontFamily="Libre Bodoni"
          sx={{ fontWeight: 700, m: 4 }}
          textAlign={tabletScreenMatch ? "left" : "center"}
        >
          {spotlightProduct.productName}
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
          {spotlightProduct.description}
        </Typography>
      </Grid>
      <Grid md={8} sx={{ position: "relative" }} item>
        <HoverableProductItemImage product={spotlightProduct} />

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
            {spotlightProduct.productName}
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
