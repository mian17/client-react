import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ProductItem from "../../Product/ProductItem/ProductItem";
import { useCallback, useEffect, useState } from "react";
import { productListingPartition } from "../../common/utils/productListingPartition";

const ShopDetailsYouMayLike = () => {
  const theme = useTheme();
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  // Ready for API connection
  const [error, setError] = useState(null);
  const fetchProductsOneMayLike = useCallback(async () => {
    setError(null);
    try {
      // Get from api
      const response = await fetch(
        "http://127.0.0.1:8000/api/products-one-may-like"
      );
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }
      const data = await response.json();
      console.log(data);
      const transformedProducts = data.products.map(productListingPartition);

      setFavoriteProducts(transformedProducts);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchProductsOneMayLike();
  }, [fetchProductsOneMayLike]);

  return (
    <Grid component="section" container>
      <Grid
        lg={3}
        md={6}
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
          Các sản phẩm mà bạn có thể thích
        </Typography>
        <Typography
          // paragraph
          variant=" body"
          sx={{
            color: "inherit",
            textAlign: "right",
            fontSize: tabletScreenMatch ? 14 : 16,
          }}
        >
          A id laborum minus necessitatibus unde. Dolores laboriosam porro quo
          recusandae tempore velit vitae!
        </Typography>
      </Grid>
      {favoriteProducts.map((product, index) => {
        return (
          <Grid
            key={index}
            lg={3}
            md={6}
            sm={6}
            xs={6}
            sx={{
              borderBottom: "1px solid #bdb498",
              borderRight: "1px solid #bdb498",
            }}
            item
          >
            <ProductItem product={product} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ShopDetailsYouMayLike;
