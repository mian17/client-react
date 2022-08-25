import DiscountedProduct from "../../Product/Class/DiscountedProduct";
import { backendServerPath } from "./backendServerPath";
import Product from "../../Product/Class/Product";
import CategoricalDiscountedProduct from "../../Product/Class/CategoricalDiscountedProduct";
import CategoryImage from "../../Product/Class/CategoryImage";
import CategoricalProduct from "../../Product/Class/CategoricalProduct";

export const productListingPartition = (productData) => {
  return productData.kinds.length === 1
    ? productData.cost_price > productData.price
      ? new DiscountedProduct(
          productData.id,
          backendServerPath + productData.kinds[0].image_1,
          "something",
          backendServerPath + productData.kinds[0].image_2,
          "other something",
          productData.name,
          productData.cost_price,
          "",
          2,
          false,
          productData.price
        )
      : new Product(
          productData.id,
          backendServerPath + productData.kinds[0].image_1,
          "something",
          backendServerPath + productData.kinds[0].image_2,
          "other something",
          productData.name,
          productData.price,
          "",
          productData.cost_price > productData.price ? 2 : 0,
          false
        )
    : productData.cost_price > productData.price
    ? new CategoricalDiscountedProduct(
        productData.id,
        backendServerPath + productData.kinds[0].image_1,
        "something",
        backendServerPath + productData.kinds[0].image_2,
        "other something",
        productData.name,
        productData.cost_price,
        "",
        2,
        true,
        productData.kinds[0].hex_color,
        productData.price,
        productData.kinds.slice(1).map((data) => {
          return new CategoryImage(
            data.name,
            backendServerPath + data.image_1,
            data.hex_color,
            "categorical something"
          );
        })
      )
    : new CategoricalProduct(
        productData.id,
        backendServerPath + productData.kinds[0].image_1,
        "something",
        backendServerPath + productData.kinds[0].image_2,
        "other something",
        productData.name,
        productData.price,
        "",
        0,
        true,
        productData.kinds[0].hex_color,
        productData.kinds.slice(1).map((data) => {
          return new CategoryImage(
            data.name,
            backendServerPath + data.image_1,
            data.hex_color,
            "categorical something"
          );
        })
      );
};
// export const productListingPartition = (productData) => {
//   return new Product(
//     productData.id,
//     "",
//     "something",
//     "",
//     "other something",
//     productData.name,
//     productData.price,
//     "",
//     productData.cost_price > productData.price ? 2 : 0,
//     false
//   );
// };
