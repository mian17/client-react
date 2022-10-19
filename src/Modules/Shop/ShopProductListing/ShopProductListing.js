import Grid from "@mui/material/Grid";
import ProductItem from "../../Product/ProductItem/ProductItem";
import React, { useCallback, useEffect, useState } from "react";
import ProductItemLoader from "../../Product/ProductItems/ProductItemLoader/ProductItemLoader";
import Typography from "@mui/material/Typography";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { productListingPartition } from "../../common/utils/productListingPartition";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { PaginationItem } from "@mui/material";

const ShopProductListing = (props) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const { search: pageInitialValue } = useLocation();

  const [categoryId, setCategoryId] = useState(id);
  let currentPageNum;

  if (pageInitialValue) {
    currentPageNum = pageInitialValue.match(/\d+/)[0];
  } else {
    currentPageNum = 1;
  }
  const [pagePos, setPagePos] = useState(currentPageNum ? currentPageNum : 1);

  const pagePosChangeHandler = (e, value) => {
    setPagePos(value);
  };

  const [pageNum, setPageNum] = useState(1);

  const fetchProductItems = useCallback(async () => {
    setCategoryId(id);
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/category/${categoryId}/product?page=${pagePos}&filter=${props.filteredState}`
      );
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }
      // console.log(response)
      const data = await response.json();

      setPageNum(data.pagination.last_page);

      const productsReceived = data.pagination.data;
      // console.log(productsReceived);

      const transformedProductData = productsReceived.map(
        productListingPartition
      );

      setProducts(transformedProductData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [categoryId, id, pagePos, props.filteredState]);

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
    content = products.map((product, index) => {
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
        <Grid
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{
            borderBottom: "1px solid #bdb498",
            borderRight: "1px solid #bdb498",
            p: 4,
          }}
          item
        >
          <ProductItemLoader />
        </Grid>
        <Grid
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{
            borderBottom: "1px solid #bdb498",
            borderRight: "1px solid #bdb498",
            p: 4,
          }}
          item
        >
          <ProductItemLoader />
        </Grid>
        <Grid
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{
            borderBottom: "1px solid #bdb498",
            borderRight: "1px solid #bdb498",
            p: 4,
          }}
          item
        >
          <ProductItemLoader />
        </Grid>
        <Grid
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{
            borderBottom: "1px solid #bdb498",
            borderRight: "1px solid #bdb498",
            p: 4,
          }}
          item
        >
          <ProductItemLoader />
        </Grid>
        <Grid
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{
            borderBottom: "1px solid #bdb498",
            borderRight: "1px solid #bdb498",
            p: 4,
          }}
          item
        >
          <ProductItemLoader />
        </Grid>
        <Grid
          lg={4}
          md={6}
          sm={6}
          xs={6}
          sx={{
            borderBottom: "1px solid #bdb498",
            borderRight: "1px solid #bdb498",
            p: 4,
          }}
          item
        >
          <ProductItemLoader />
        </Grid>
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
      <Box
        width="100%"
        sx={{ display: "flex", justifyContent: "center" }}
        p={4}
      >
        <Pagination
          page={pagePos}
          onChange={pagePosChangeHandler}
          size="large"
          count={pageNum}
          renderItem={(item) => (
            <PaginationItem
              component={NavLink}
              to={`/category/${categoryId}/product${
                item.page === 1 ? "" : `?page=${item.page}`
              }`}
              {...item}
            />
          )}
        />
      </Box>
    </>
  );
};

export default ShopProductListing;
