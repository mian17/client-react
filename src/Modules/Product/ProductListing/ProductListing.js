// Source Imports
import ProductItem from "../ProductItem/ProductItem";
import ProductItemTitle from "../ProductItemTitle/ProductItemTitle";

// Mui Imports
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";

// Test data
import { products } from "./product-test-data/products";
import { useEffect, useState } from "react";

const ProductListing = () => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   // const productsReponse = await getProductsFromServer()
  //   setProducts(products);
  // }, [products]);

  // Count num to specify row position for this special grid layout
  let count = 1;

  return (
    <Box
      display="grid"
      gridTemplateColumns={`${
        tabletScreenMatch ? "1fr 1fr" : "repeat(3, 1fr)"
      }`}
      gridTemplateRows={`${tabletScreenMatch ? "" : "repeat(4, 1fr)"}`}
    >
      <ProductItemTitle
        title="Top các sản phẩm bán chạy nhất"
        description="A id laborum minus necessitatibus unde. Dolores laboriosam porro quo recusandae tempore velit vitae!"
      />
      {products.map((product, i) => {
        // console.log(typeof product);
        const conditionToApplySpecialLayout = i % 3 === 0 && i > 0;

        if (conditionToApplySpecialLayout) {
          // I want row position 3, 6, in 3 steps to apply this special layout

          // Beginning condition, because i want row pos 2 to apply the layout
          if (count === 1) count++;
          else {
            count += 2;
          }
        }

        // Props for when device is in tablet mode
        const propsToAssign = {
          gridColumn: conditionToApplySpecialLayout ? "span 2" : null,
          gridRow: null,
          height: null,
        };

        if (!tabletScreenMatch) {
          propsToAssign.gridColumn = conditionToApplySpecialLayout
            ? "2 / span 2"
            : null;
          propsToAssign.gridRow = conditionToApplySpecialLayout
            ? `${count} / span 2`
            : null;
          propsToAssign.height = conditionToApplySpecialLayout ? "100%" : null;
        }

        return (
          <Box
            key={i}
            component="article"
            sx={{
              borderBottom: "1px solid #bdb498",
              borderRight: "1px solid #bdb498",
              blockSize: "fit-content",
              ...propsToAssign,
            }}
            item
          >
            <ProductItem product={product} />
          </Box>
        );
      })}
    </Box>
  );
};
export default ProductListing;
