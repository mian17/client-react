// React Imports
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
// Source imports
import classes from "./CategoryDrawer.module.css";
// import { categories as categoriesDumpData } from "./categories-test-data/categories";
// Mui imports
import { useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import ListItemText from "@mui/material/ListItemText";

import Fade from "@mui/material/Fade";

// React router dom
import { NavLink } from "react-router-dom";
import Background from "./categoryDrawerUtils/Background";
import { backendServerPath } from "../../common/utils/backendServerPath";
import Category from "./categoryDrawerUtils/Category";

const CategoryDrawer = (props) => {
  const [categories, setCategories] = useState([]);
  const theme = useTheme();

  // Remove background changing effect on small devices
  // and later on other effects too, such as hovering link to change text's color
  const removeBackgroundMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const backgrounds = categories.map((category, index) => {
    return new Background(index, category.id, category.imgUrl);
  });

  // Ready for API connection
  const [error, setError] = useState(null);
  const fetchCategories = useCallback(async () => {
    setError(null);
    try {
      // Get from api
      const response = await fetch(
        "http://127.0.0.1:8000/api/parent-categories"
      );
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await response.json();
      // console.log(data);
      const transformedCategory = data.map((categoryData) => {
        return new Category(
          categoryData.id,
          categoryData.name,
          "/category/" + categoryData.id + "/product/",
          backendServerPath + categoryData["img_url"]
        );
      });

      setCategories(transformedCategory);
    } catch (error) {
      setError(error.message);
    }
  }, []);
  // Request categories
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Props for styling
  const paperSx = {
    height: "100vh",
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    zIndex: -1,
    backgroundColor: "#f4f1e0",
    transition: "all 0.3s",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };
  const listSx = {
    maxWidth: "88%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    mt: 12,
    overflow: "auto",
    maxHeight: "68%",
  };

  return (
    <Fade timeout={300} in={!props.hideCategories}>
      <Paper component="section" elevation={0} sx={paperSx} square>
        {backgrounds.map((background, index) => {
          const backgroundRemoveOnMediaQuery = removeBackgroundMatch
            ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("${background.imgUrl}")`
            : "#f4f1e0";
          return (
            <Box
              key={index}
              sx={{
                backgroundImage: backgroundRemoveOnMediaQuery,
              }}
              className={`${classes["category-background"]} ${
                +props.headerBackgroundIndex === background.categoryId
                  ? classes["active"]
                  : ""
              }`}
            ></Box>
          );
        })}
        <List sx={listSx}>
          {categories.map((category, index) => {
            const primaryTypographyProps = {
              sx: {
                fontSize: 24,
                textTransform: "uppercase",
                fontWeight: 700,
                fontFamily: "Libre Bodoni",
                mY: -3,
              },
            };
            return (
              <ListItem
                sx={{
                  position: "relative",
                  flexBasis: "fit-content",
                }}
                key={index}
              >
                <Link
                  component={NavLink}
                  to={category.url}
                  sx={{
                    color:
                      props.changeLinkColorCondition && removeBackgroundMatch
                        ? "rgba(244,241,224,0.6)"
                        : "#321e1e",
                    textDecoration: "none",
                    dataCategory: category.id,
                    letterSpacing: -0.2,

                    borderBottom: `2px solid transparent`,
                    m: 1,
                    transition: "all 0.15s linear",

                    ":hover": {
                      color: removeBackgroundMatch ? "#f4f1e0" : "inherit",
                      textDecoration: "none",
                    },
                    ":active": {
                      borderBottom: `2px solid ${
                        removeBackgroundMatch ? "#f4f1e0" : "#321e1e"
                      }`,
                    },
                  }}
                  data-category={category.id}
                  onMouseEnter={props.getCategoryId}
                  onClick={props.toggleLeftDrawerHandler}
                >
                  <ListItemText
                    primaryTypographyProps={primaryTypographyProps}
                    sx={{ marginBottom: 0.2 }}
                    primary={category.name}
                  />
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Paper>
    </Fade>
  );
};
export default React.memo(CategoryDrawer);
