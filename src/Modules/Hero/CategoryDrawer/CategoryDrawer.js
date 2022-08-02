// React Imports
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

// Source imports
import classes from "./CategoryDrawer.module.css";

// Mui imports
import { useTheme } from "@mui/material/styles";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import { ListItem } from "@mui/material";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { useState } from "react";

const CategoryDrawer = (props) => {
  const theme = useTheme();

  // Remove background changing effect on small devices
  // and later on other effects too, such as hovering link to change text's color
  const removeBackgroundMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const backgrounds = props.categories.map((category, index) => {
    return {
      id: index,
      categoryId: category.id,
      imgUrl: category.imgUrl,
    };
  });
  // const [linkAnimationUnderline, setLinkAnimationUnderline] = useState(0);
  return (
    <Fade timeout={300} in={!props.hideCategories}>
      <Paper
        elevation={0}
        sx={{
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
        }}
        square
      >
        {backgrounds.map((background, index) => {
          const backgroundRemoveOnMediaQuery = removeBackgroundMatch
            ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${background.imgUrl})`
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

        <List
          sx={{
            maxWidth: "88%",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            // maxHeight: "100%",
            mt: 12,
            overflow: "auto",
            maxHeight: "68%",
          }}
          // dense
        >
          {props.categories.map((category, index) => {
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
                  to="/"
                  sx={{
                    ":hover": {
                      color: removeBackgroundMatch ? "#f4f1e0" : "inherit",
                      textDecoration: "none",
                      // borderBottom: `2px solid ${
                      //   removeBackgroundMatch ? "#f4f1e0" : "#321e1e"
                      // }`,
                    },
                    ":active": {
                      borderBottom: `2px solid ${
                        removeBackgroundMatch ? "#f4f1e0" : "#321e1e"
                      }`,
                    },
                    textDecoration: "none",
                    dataCategory: category.id,
                    letterSpacing: -0.2,
                    color:
                      props.changeLinkColorCondition && removeBackgroundMatch
                        ? "rgba(244,241,224,0.6)"
                        : "#321e1e",
                    // borderBottom: `2px solid ${
                    //   props.changeLinkColorCondition ? "#f4f1e0" : "#321e1e"
                    // }`,
                    borderBottom: `2px solid transparent`,
                    m: 1,
                    transition: "all 0.15s linear",
                  }}
                  data-category={category.id}
                  onMouseEnter={props.getCategoryId}
                >
                  <ListItemText
                    primaryTypographyProps={{
                      sx: {
                        fontSize: 24,
                        textTransform: "uppercase",
                        fontWeight: 700,
                        fontFamily: "Libre Bodoni",
                        mY: -3,
                      },
                    }}
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
