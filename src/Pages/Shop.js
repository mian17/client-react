// Source imports

import Grid from "@mui/material/Grid";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, {useEffect, useState} from "react";

import ShoppingFunctions from "../Modules/Shop/ShopFunctions/ShopFunctions";

import ShopProductListing from "../Modules/Shop/ShopProductListing/ShopProductListing";
import SortServiceBox from "../Modules/Shop/ShopFunctions/FilterService/SortServiceBox/SortServiceBox";
import ShopBanner from "../Modules/Shop/ShopBanner/ShopBanner";
import ShopHeader from "../Modules/Shop/ShopHeader/ShopHeader";
import MessageBanner from "../Modules/Banner/MessageBanner";
import Footer from "../Widgets/Footer";

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
      <ShopBanner />
      <ShoppingFunctions
        onClick={filterOnClickHandler}
        filterIsClicked={filterIsClicked}
        animatedIcon={animatedIcon}
        onClick1={sortOnClickHandler}
        sortIsClicked={sortIsClicked}
        filteredValueLabel={filteredValue}
      />
      <Grid container>
        {!laptopScreenMatch && sortIsClicked && <SortServiceBox />}
        {/*{!laptopScreenMatch && filterIsClicked && <FilterServiceBox />}*/}

        <ShopProductListing
          filterIsClicked={filterIsClicked}
          sortIsClicked={sortIsClicked}
        />
        {/*{!laptopScreenMatch && sortIsClicked && <SortServiceBox />}*/}
      </Grid>

        <MessageBanner/>
        <Footer/>
    </>
  );
};

export default Shop;
