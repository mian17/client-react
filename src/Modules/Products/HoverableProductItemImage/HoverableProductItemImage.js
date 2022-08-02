import Box from "@mui/material/Box";
import classes from "../SpotlightProduct/SpotlightProduct.module.css";
import * as PropTypes from "prop-types";
import { useState } from "react";

const HoverableProductItemImage = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const hoverOnImageHandler = () => {
    setIsHovered(true);
  };
  const hoverOutImageHandler = () => {
    setIsHovered(false);
  };

  return (
    <Box
      onMouseEnter={hoverOnImageHandler}
      onMouseLeave={hoverOutImageHandler}
      onTouchStart={hoverOnImageHandler}
      onTouchEnd={hoverOutImageHandler}
      sx={{ position: "relative" }}
    >
      <Box
        component="img"
        src={props.product.imageUrlOnHover}
        alt={props.product.altImageUrlOnHover}
        sx={{ width: "100%", height: "100%" }}
        className={`${classes.image} ${isHovered ? "" : classes.hidden}`}
      />
      <Box
        component="img"
        src={props.product.imageUrl}
        alt={props.product.altImageUrl}
        sx={{ width: "100%", height: "100%", opacity: 1 }}
        className={`${isHovered ? classes.hidden : ""}`}
      />
    </Box>
  );
};

export default HoverableProductItemImage;
