// Source imports

import Grid from "@mui/material/Grid";
import ProductItem from "../Modules/Product/ProductItem/ProductItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { useEffect, useState } from "react";

import ShoppingFunctions from "../Modules/Shop/ShopFunctions/ShopFunctions";

import ShopProductListing from "../Modules/Shop/ShopProductListing/ShopProductListing";

import FilterServiceBox from "../Modules/Shop/ShopFunctions/FilterService/FilterServiceBox/FilterServiceBox";
import SortServiceBox from "../Modules/Shop/ShopFunctions/FilterService/SortServiceBox/SortServiceBox";
import ShopBanner from "../Modules/Shop/ShopBanner/ShopBanner";
import ShopHeader from "../Modules/Shop/ShopHeader/ShopHeader";
import MessageBanner from "../Modules/Banner/MessageBanner";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

const Shop = () => {
  const theme = useTheme();
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));

  const [filterIsClicked, setFilterIsClicked] = useState(false);
  const [sortIsClicked, setSortIsClicked] = useState(false);

  const animatedIcon = {
    transform: "scaleY(-1)",
  };
  useEffect(() => {
    if (laptopScreenMatch) {
      setFilterIsClicked(false);
      setSortIsClicked(false);
      setFilteredValue(null);
    }
  }, [laptopScreenMatch]);

  const filterOnClickHandler = () => {
    setFilterIsClicked(!filterIsClicked);
    if (sortIsClicked) setSortIsClicked(!sortIsClicked);
  };
  const sortOnClickHandler = () => {
    setSortIsClicked(!sortIsClicked);
    if (filterIsClicked) setFilterIsClicked(!filterIsClicked);
  };
  const [filteredValue, setFilteredValue] = useState(null);
  // const radioButtonChangeHandler = (event) => {
  //   setFilteredValue(event.target.value);
  // };

  return (
    <>
      <ShopHeader />

      <ShopBanner
        backgroundUrl={"/img/categories/category-all.jpg"}
        title={"Tất cả"}
      />
      <ShoppingFunctions
        onClick={filterOnClickHandler}
        filterIsClicked={filterIsClicked}
        animatedIcon={animatedIcon}
        onClick1={sortOnClickHandler}
        sortIsClicked={sortIsClicked}
        filteredValueLabel={filteredValue}
      />
      <Grid container>
        {!laptopScreenMatch && filterIsClicked && <FilterServiceBox />}

        <ShopProductListing
          filterIsClicked={filterIsClicked}
          sortIsClicked={sortIsClicked}
        />
        {!laptopScreenMatch && sortIsClicked && <SortServiceBox />}
      </Grid>
      <Box
        width="100%"
        sx={{ display: "flex", justifyContent: "center" }}
        p={4}
      >
        <Pagination size="large" count={10} />
      </Box>
      <MessageBanner />
    </>
  );
};

export default Shop;
