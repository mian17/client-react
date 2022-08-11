import Grid from "@mui/material/Grid";
import { favoriteProducts } from "../../Product/FavoriteProducts/favoriteProducts-test-data/favoriteProducts";
import ProductItem from "../../Product/ProductItem/ProductItem";
import React, { useCallback, useEffect, useState } from "react";

import ProductItemLoader from "../../Product/ProductItems/ProductItemLoader/ProductItemLoader";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

const ShopProductListing = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductItems = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await response.json();
      // console.log(data);
      const transformedProductData = data.map((productData) => {
        return {
          productId: productData.id,
          imageUrl: productData.image,
          productName: productData.title,
          price: productData.price * 1000,
          rating: productData.rating.rate,
        };
      });

      setProducts(transformedProductData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // Request products
  useEffect(() => {
    fetchProductItems();
  }, [fetchProductItems]);

  // Status handling and setting content to return
  let content = (
    <Typography component="p" variant="body">
      Không có sản phẩm
    </Typography>
  );

  if (products.length > 0) {
    content = favoriteProducts.map((product, index) => {
      return (
        <Grid
          key={index}
          lg={4}
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
    });
  }
  if (error) {
    content = (
      <Typography component="p" variant="body">
        {error}
      </Typography>
    );
  }
  if (isLoading)
    content = (
      <>
        <ProductItemLoader />
        <ProductItemLoader />
        <ProductItemLoader />
        <ProductItemLoader />
        <ProductItemLoader />
        <ProductItemLoader />
      </>
    );

  return (
    <>
      <Grid
        lg={props.filterIsClicked || props.sortIsClicked ? 10 : 12}
        component="section"
        container
        item
      >
        {content}
      </Grid>
    </>
  );
};

export default ShopProductListing;
