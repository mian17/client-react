import Tabs from "@mui/material/Tabs";
import { categories } from "../../../Hero/CategoryDrawer/categories-test-data/categories";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import Tab from "@mui/material/Tab";
import { NavLink, useParams } from "react-router-dom";
import Subcategory from "./subcategoryUtils/Subcategory";

export default function SubcategoryCollection(props) {
  const [subcategoryCollection, setSubcategoryCollection] = useState([]);
  const { id: categoryId } = useParams();
  const [currentCategoryId, setCurrentCategoryId] = useState(categoryId);

  // Ready for API connection
  const [error, setError] = useState(null);

  const fetchSubcategories = useCallback(async () => {
    setError(null);
    try {
      //Get Id from url
      setCurrentCategoryId(categoryId);

      // Get from api
      const response = await fetch(
        "http://127.0.0.1:8000/api/category/" + currentCategoryId
      );
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await response.json();
      const transformedSubcategories = data.subcategory.map((data) => {
        return new Subcategory(data.id, data.name);
      });

      setSubcategoryCollection(transformedSubcategories);
    } catch (error) {
      setError(error.message);
    }
  }, [categoryId, currentCategoryId]);
  // Request categories

  useEffect(() => {
    fetchSubcategories();
  }, [fetchSubcategories]);

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
      sx={{ display: "flex" }}
      TabScrollButtonProps={{
        sx: { color: props.onScrollTrigger ? "#321e1e" : "#f4f1e0" },
      }}
      // indicatorColor={props.onScrollTrigger ? "primary" : "secondary"}
      // indicatorColor="customTransparent"
      TabIndicatorProps={{
        style: { display: "none" },
      }}
      scrollButtons={true}
      allowScrollButtonsMobile
    >
      {subcategoryCollection.map((category, index) => {
        return (
          <Tab
            key={index}
            component={NavLink}
            to={"/category/" + category.id + "/product"}
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

// SubcategoryCollection.propTypes = {
//   value: PropTypes.number,
//   onChange: PropTypes.func,
//   laptopScreenMatch: PropTypes.bool,
//   trigger: PropTypes.bool,
//   callbackfn: PropTypes.func,
// };
