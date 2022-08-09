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

const ProductSlide = (props) => {
  const theme = useTheme();
  const smallScreenMatch = useMediaQuery(theme.breakpoints.up("sm"));

  const innerBoxSx = {
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `linear-gradient(rgba(85, 85, 85, 0.4), rgba(85, 85, 85, 0.4)), url(${props.imgUrl})`,
        height: smallScreenMatch ? "88vh" : "96vh",
      }}
      className={classes["background-slide"]}
    >
      <Box sx={innerBoxSx}>
        <Typography
          fontFamily={"Libre Bodoni"}
          component="h2"
          color="#f4f1e0"
          sx={{ fontSize: smallScreenMatch ? 48 : 38, marginBottom: 1 }}
          textAlign="center"
        >
          {props.title}
        </Typography>
        <Typography
          fontFamily={"Inter"}
          component="h2"
          color="#f4f1e0"
          sx={{ fontSize: smallScreenMatch ? 20 : 16, marginBottom: 4 }}
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
