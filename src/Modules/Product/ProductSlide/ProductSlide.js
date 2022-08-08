import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import classes from "./ProductSlide.module.css";
import { NavLink, Link } from "react-router-dom";
import { ButtonBase } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

// Từ những sản phẩm hoàn toàn đến từ
// <em style={{ color: "#b2f2bb" }}>thiên nhiên</em>.
const ProductSlide = (props) => {
  const theme = useTheme();
  const smallScreenMatch = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(rgba(85, 85, 85, 0.4), rgba(85, 85, 85, 0.4)), url(${props.imgUrl})`,
        height: smallScreenMatch ? "88vh" : "96vh",
      }}
      className={classes["background-slide"]}
    >
      <Box
        sx={{
          position: "absolute",
          top: "55%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
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
          <Button variant="contained" size="large">
            {props.btnCTAContent}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default ProductSlide;
