import Box from "@mui/material/Box";
import classes from "../SpotlightProduct/SpotlightProduct.module.css";
import { useState } from "react";
import ProductItemStatus from "../ProductItem/ProductItemStatus/ProductItemStatus";
import Typography from "@mui/material/Typography";

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

  // console.log(props.selectedPosition);
  if (isSelectable)
    console.log(
      "Property for object with productId " + props.product.productId,
      props.product.categoryImages
    );

  return (
    <Box
      onMouseEnter={hoverOnImageHandler}
      onMouseLeave={hoverOutImageHandler}
      onTouchStart={hoverOnImageHandler}
      sx={{ position: "relative", width: "100%", height: "auto" }}
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
      {/*<Box*/}
      {/*    component="img"*/}
      {/*    src={*/}
      {/*      // If the first selected position is 0, since the data does not have negative indexes,*/}
      {/*      // the condition must be default to 0 in such a case like that*/}
      {/*      props.product.categoryImages[*/}
      {/*          props.selectedPosition - 1 < 0 ? 0 : props.selectedPosition - 1*/}
      {/*          ].url*/}
      {/*    }*/}
      {/*    alt={*/}
      {/*      props.product.categoryImages[*/}
      {/*          props.selectedPosition - 1 < 0 ? 0 : props.selectedPosition - 1*/}
      {/*          ].alt*/}
      {/*    }*/}
      {/*    sx={{ width: "100%", height: "100%" }}*/}
      {/*    className={`${classes.image}  ${*/}
      {/*        props.selectedPosition !== 0 ? "" : classes.hidden*/}
      {/*    } `}*/}
      {/*/>*/}
      <Box
        component="img"
        src={props.product.imageUrlOnHover}
        alt={props.product.altImageUrlOnHover}
        sx={{ width: "100%", height: "100%", zIndex: 30 }}
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
