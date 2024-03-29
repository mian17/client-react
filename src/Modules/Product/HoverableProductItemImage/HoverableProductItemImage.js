import Box from "@mui/material/Box";
import classes from "../SpotlightProduct/SpotlightProduct.module.css";
import { useState } from "react";
import ProductItemStatus from "../ProductItem/ProductItemStatus/ProductItemStatus";
import { NavLink } from "react-router-dom";

const HoverableProductItemImage = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverOnImageHandler = () => {
    setIsHovered(!isHovered);
  };
  const hoverOutImageHandler = () => {
    setIsHovered(false);
  };

  // const categoryImages =

  const isSelectable =
    props.product.isSelectable &&
    props.product.hasOwnProperty("colorCode") &&
    props.product.hasOwnProperty("categoryImages") &&
    props.product.categoryImages.length > 0;

  return (
    <Box
      onMouseEnter={hoverOnImageHandler}
      onMouseLeave={hoverOutImageHandler}
      onTouchStart={hoverOnImageHandler}
      sx={{
        position: "relative",
        width: "100%",
        height: "auto",
      }}
      component={NavLink}
      to={"/product/" + props.product.productId}
    >
      <ProductItemStatus
        statusCode={props.product.statusCode}
        product={props.product}
      />
      {isSelectable &&
        props.product.categoryImages.map((image, index) => {
          return (
            <Box
              key={index}
              component="img"
              src={image.url}
              alt={image.alt}
              sx={{ width: "100%", height: "100%", opacity: 0 }}
              className={`${classes.image}  ${
                index + 1 === props.selectedPosition ? classes.show : ""
              }`}
            ></Box>
          );
        })}
      <Box
        component="img"
        src={props.product.imageUrlOnHover}
        alt={props.product.altImageUrlOnHover}
        sx={{ width: "100%", height: "100%", zIndex: 20 }}
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
