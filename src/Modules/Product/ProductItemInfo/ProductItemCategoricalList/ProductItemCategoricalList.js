import { useState } from "react";
import Box from "@mui/material/Box";
import ProductItemCategoricalButton from "../ProductItemCategoricalButton/ProductItemCategoricalButton";

const ProductItemCategoricalList = (props) => {
  const [selectedPos, setSelectedPos] = useState(0);

  const onClickSelectedPosHandler = (e) => {
    const pos = +e.target.closest("li").dataset.position;

    setSelectedPos(pos);
    props.getSelectedCategoryPosition(pos);
  };
  const isSelectable =
    props.product.isSelectable &&
    props.product.hasOwnProperty("colorCode") &&
    props.product.hasOwnProperty("categoryImages") &&
    props.product.categoryImages.length > 0;

  const colorList = [];

  if (isSelectable) {
    // Getting first main color;
    const objToPush = {};
    objToPush.colorCode = props.product.colorCode;
    objToPush.toolTipName = props.product.productName;

    colorList.push(objToPush);

    // toolTipNames.push(props.product.productName);

    // Adding the remaining color list if the product is in itself selectable
    props.product.categoryImages.forEach((category) => {
      const objToPush = {};
      objToPush.colorCode = category.colorCode;
      objToPush.toolTipName = category.name;

      colorList.push(objToPush);
    });
  }

  return (
    <Box component="ul" sx={{ display: "flex", gap: 1, mt: 1 }}>
      {colorList.map((color, index) => {
        return (
          <ProductItemCategoricalButton
            key={index}
            selectedPos={selectedPos}
            position={index}
            colorCode={color.colorCode}
            toolTipName={color.toolTipName}
            onClick={onClickSelectedPosHandler}
          />
        );
      })}
    </Box>
  );
};

export default ProductItemCategoricalList;
