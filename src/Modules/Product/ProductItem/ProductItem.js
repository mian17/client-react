import Box from "@mui/material/Box";
import HoverableProductItemImage from "../HoverableProductItemImage/HoverableProductItemImage";
import ProductItemInfo from "../ProductItemInfo/ProductItemInfo";

import { useState } from "react";
import { productItemContainerSx } from "./productItemSx/productItemSx";

const ProductItem = (props) => {
  const [selectedCategoryPos, setSelectedCategoryPos] = useState(0);

  const getSelectedCategoryPositionForImageChange = (position) => {
    setSelectedCategoryPos(position);
  };

  return (
    <Box sx={productItemContainerSx}>
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
