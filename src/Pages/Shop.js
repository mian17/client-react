// Source imports

import Grid from "@mui/material/Grid";
import ProductItem from "../Modules/Product/ProductItem/ProductItem";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";

import ShoppingFunctions from "../Modules/Shop/ShopFunctions/ShopFunctions";

import ShopProductListing from "../Modules/Shop/ShopProductListing/ShopProductListing";

import FilterServiceBox from "../Modules/Shop/ShopFunctions/FilterService/FilterServiceBox/FilterServiceBox";
import SortServiceBox from "../Modules/Shop/ShopFunctions/FilterService/SortServiceBox/SortServiceBox";

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
  const radioButtonChangeHandler = (event) => {
    setFilteredValue(event.target.value);
  };

  return (
    <>
      {/*<ShopFunctions getShopFunctionStates={getShopFunctionStates} />*/}

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
          callbackfn={(product, index) => {
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
          }}
        />
        {!laptopScreenMatch && sortIsClicked && <SortServiceBox />}
      </Grid>
    </>
  );
};

export default Shop;
