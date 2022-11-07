// Source imports
import classes from "./ProductSlide.module.css";

// Mui imports
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// React router dom imports
import { NavLink } from "react-router-dom";
import { innerBoxSx } from "./productSlideSx/productSlideSx";

const ProductSlide = (props) => {
  const theme = useTheme();
  const smallScreenMatch = useMediaQuery(theme.breakpoints.up("sm"));

  // Logic styles Sx
  const bannerBackgroundSx = {
    backgroundImage: `linear-gradient(rgba(85, 85, 85, 0.4), rgba(85, 85, 85, 0.4)), url(${props.imgUrl})`,
    height: smallScreenMatch ? "88vh" : "96vh",
  };
  const bannerTitleSx = {
    fontSize: smallScreenMatch ? 48 : 38,
    marginBottom: 1,
  };
  const bannerSubtitleSx = {
    fontSize: smallScreenMatch ? 20 : 16,
    marginBottom: 4,
  };

  return (
    <Box
      component="section"
      sx={bannerBackgroundSx}
      className={classes["background-slide"]}
    >
      <Box sx={innerBoxSx}>
        <Typography
          fontFamily={"Libre Bodoni"}
          component="h2"
          color="#f4f1e0"
          sx={bannerTitleSx}
          textAlign="center"
        >
          {props.title}
        </Typography>
        <Typography
          fontFamily={"Inter"}
          component="h2"
          color="#f4f1e0"
          sx={bannerSubtitleSx}
          textAlign="center"
        >
          {props.subtitle}
        </Typography>
        <Box sx={{ textAlign: "center" }}>
          <Button
            component={NavLink}
            to={props.link}
            variant="contained"
            size="large"
            sx={{
              ":hover": {
                color: "#f4f1e0",
              },
            }}
          >
            {props.btnCTAContent}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ProductSlide;
