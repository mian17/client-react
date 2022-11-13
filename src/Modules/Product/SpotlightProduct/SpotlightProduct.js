// React imports
// Source imports

// Mui imports
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

// import { spotlightProduct } from "./spotlightProduct-test-data/spotlightProduct";
import ProductItem from "../ProductItem/ProductItem";
import * as React from "react";
import {useCallback, useEffect, useState} from "react";
import {productListingPartition} from "../../common/utils/productListingPartition";
import {setAlert} from "../../common/utils/helpers";
import {textLeftSideContainerBackgroundOnSmallerScreenSizeSx} from "./spotlightProductSx/spotlightProductSx";
import CommonSnackbar from "../../common/component/CommonSnackbar";
import useSnackbar from "../../../hooks/use-snackbar";

const SpotlightProduct = () => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

  const [spotlightProduct, setSpotlightProduct] = useState([]);
  const [summary, setSummary] = useState("");
  const [title, setTitle] = useState("");

  // const formattedProductPrice = new Intl.NumberFormat(
  //   "vi-VN",
  //   currencyFormatOptions
  // ).format(spotlightProduct.price);

  // Ready for API connection
  // const [error, setError] = useState(null);
  const {
    snackbarType,
    setSnackbarType,
    openSnackbar,
    setOpenSnackbar,
    alertContent,
    setAlertContent,
    handleCloseSnackbar,
  } = useSnackbar();

  const fetchSpotlightProduct = useCallback(async () => {
    // setError(null);
    try {
      // Get from api
      const response = await fetch(
        `http://127.0.0.1:8000/api/product/show-random-spotlight-product`
      );
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await response.json();
      const dataResponse = data.product;
      const transformedProduct = [productListingPartition(dataResponse)];

      setTitle(dataResponse.name);
      setSummary(dataResponse.summary);
      setSpotlightProduct(transformedProduct);
    } catch (error) {
      // setError(error.message);
      setAlert(
        setSnackbarType,
        "error",
        setOpenSnackbar,
        setAlertContent,
        error.message
      );
    }
  }, []); // DO NOT UPDATE THIS SPECIFIC DEPENDENCY WITH SNACKBAR STATE
  // Request;
  // categories;
  useEffect(() => {
    fetchSpotlightProduct();
  }, [fetchSpotlightProduct]);

  // Logic style Sx
  const textLeftSideContainerSx = {
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
  };

  const textLeftSideSummarySx = {
    p: 2,
    width: "70%",
    color: "inherit",
    fontSize: tabletScreenMatch ? 14 : 16,
    textAlign: "center",
    lineHeight: 1.3,
    position: "absolute",
    bottom: 0,
    right: 0,
  };
  return (
    <Grid
      component="section"
      sx={{ borderBottom: "1px solid #bdb498" }}
      container
    >
      <Grid md={4} item sx={textLeftSideContainerSx}>
        <Typography
          component="h4"
          variant={tabletScreenMatch ? "h5" : "h4"}
          fontFamily="Libre Bodoni"
          sx={{ fontWeight: 700, m: 4 }}
          textAlign={tabletScreenMatch ? "left" : "center"}
        >
          {title}
        </Typography>
        {!tabletScreenMatch && (
          <Box sx={textLeftSideContainerBackgroundOnSmallerScreenSizeSx} />
        )}

        <Typography paragraph variant="body" sx={textLeftSideSummarySx}>
          {summary}
        </Typography>
      </Grid>
      <Grid md={8} sx={{ position: "relative" }} item>
        {spotlightProduct.map((product, index) => {
          return <ProductItem key={index} product={product} />;
        })}
      </Grid>
      <CommonSnackbar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        snackbarType={snackbarType}
        alertContent={alertContent}
      />
    </Grid>
  );
};
export default SpotlightProduct;
