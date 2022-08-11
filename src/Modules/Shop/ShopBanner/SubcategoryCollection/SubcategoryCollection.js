import Tabs from "@mui/material/Tabs";
import { categories } from "../../../Hero/CategoryDrawer/categories-test-data/categories";
import * as PropTypes from "prop-types";
import * as React from "react";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";
import { subcategories as subcategoriesDumpData } from "./subcategory-test-data/subcategories";
import { useState } from "react";

export default function SubcategoryCollection(props) {
  const [subcategoryCollection, setSubcategoryCollection] = useState(
    subcategoriesDumpData
  );

  return (
    <Tabs
      value={props.value}
      onChange={props.onChange}
      aria-label="basic tabs example"
      variant={
        props.laptopScreenMatch || categories.length > 8
          ? "scrollable"
          : "standard"
      }
      centered={!props.laptopScreenMatch && categories.length < 8}
      textColor={props.onScrollTrigger ? "primary" : "secondary"}
      // indicatorColor="transparentText"
      sx={{ display: "flex" }}
      TabScrollButtonProps={{
        sx: { color: props.onScrollTrigger ? "#321e1e" : "#f4f1e0" },
      }}
      indicatorColor={props.onScrollTrigger ? "primary" : "secondary"}
      scrollButtons={true}
      allowScrollButtonsMobile
    >
      {subcategoryCollection.map((category, index) => {
        return (
          <Tab
            key={index}
            component={NavLink}
            to={category.url}
            label={category.name}
            sx={{
              color: props.onScrollTrigger ? "#321e1e" : "#e7e0ba",
              fontSize: 18,
              fontFamily: "Libre Bodoni",
              textTransform: "capitalize",
              wordSpacing: -1,
              ":hover": {
                color: props.onScrollTrigger ? "#321e1e" : "#e7e0ba",
                textDecoration: "none",
              },
            }}
          />
        );
      })}

      {/*<Divider orientation="vertical" variant="middle" flexItem />*/}
    </Tabs>
  );
}

SubcategoryCollection.propTypes = {
  value: PropTypes.number,
  onChange: PropTypes.func,
  laptopScreenMatch: PropTypes.bool,
  trigger: PropTypes.bool,
  callbackfn: PropTypes.func,
};
