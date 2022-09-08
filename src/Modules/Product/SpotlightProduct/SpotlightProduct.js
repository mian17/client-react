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
import {useCallback, useEffect, useState} from "react";
import {productListingPartition} from "../../common/utils/productListingPartition";

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
    const [error, setError] = useState(null);

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const fetchSpotlightProduct = useCallback(async () => {
        setError(null);
        try {
            // Get from api
            const response = await fetch(
                `http://127.0.0.1:8000/api/product/show-front-page/${getRandomIntInclusive(
                    1,
                    10
                )}`
            );
            if (!response.ok) {
                throw new Error("Không lấy được dữ liệu");
            }

            const data = await response.json();
            // console.log(data.product[0]);
            const transformedProduct = [productListingPartition(data.product[0])];

            setTitle(data.product[0].name);
            setSummary(data.product[0].summary);
            setSpotlightProduct(transformedProduct);
        } catch (error) {
            setError(error.message);
        }
    }, []);
    // Request;
    // categories;
    useEffect(() => {
        fetchSpotlightProduct();
    }, [fetchSpotlightProduct]);

    console.log(spotlightProduct);
    return (
        <Grid
            component="section"
            sx={{borderBottom: "1px solid #bdb498"}}
            container
        >
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
            {title}
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
            {summary}
        </Typography>
            </Grid>
            <Grid md={8} sx={{position: "relative"}} item>
                {/*<HoverableProductItemImage product={spotlightProduct} />*/}

                {/*<Box*/}
                {/*  m={4}*/}
                {/*  sx={{*/}
                {/*    display: "flex",*/}
                {/*    justifyContent: "space-between",*/}
                {/*    alignItems: "center",*/}
                {/*    gap: 2,*/}
                {/*  }}*/}
                {/*>*/}
                {/*  <Typography*/}
                {/*    component="h5"*/}
                {/*    variant={tabletScreenMatch ? "h6" : "h5"}*/}
                {/*    sx={{ fontWeight: 700 }}*/}
                {/*    fontFamily="Libre Bodoni"*/}
                {/*  >*/}
                {/*    {spotlightProduct.productName}*/}
                {/*  </Typography>*/}
                {/*  <Button*/}
                {/*    variant="contained"*/}
                {/*    size="large"*/}
                {/*    sx={{ fontSize: tabletScreenMatch ? 14 : null }}*/}
                {/*  >*/}
                {/*    Chọn mua - {formattedProductPrice}*/}
                {/*  </Button>*/}
                {/*</Box>*/}
                {spotlightProduct.map((product, index) => {
                    return <ProductItem key={index} product={product}/>;
                })}
            </Grid>
    </Grid>
  );
};
export default SpotlightProduct;
