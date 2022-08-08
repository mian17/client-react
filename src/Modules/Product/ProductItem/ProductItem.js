import Box from "@mui/material/Box";
import HoverableProductItemImage from "../HoverableProductItemImage/HoverableProductItemImage";
import ProductItemInfo from "../ProductItemInfo/ProductItemInfo";

import { useState } from "react";

const ProductItem = (props) => {
  const [selectedCategoryPos, setSelectedCategoryPos] = useState(0);

  const getSelectedCategoryPositionForImageChange = (position) => {
    setSelectedCategoryPos(position);
  };
  return (
    <Box
      sx={{
        position: "relative",
        // minHeight: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <HoverableProductItemImage
        selectedPosition={selectedCategoryPos}
        product={props.product}
      />
      <ProductItemInfo
        getSelectedCategoryPositionForImageChange={
          getSelectedCategoryPositionForImageChange
        }
        product={props.product}
      />
    </Box>
  );
};
export default ProductItem;
