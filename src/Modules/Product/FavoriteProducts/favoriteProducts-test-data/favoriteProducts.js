import Product from "../../Class/Product";
import {
  NEW_STATUS_CODE,
  NORMAL_STATUS_CODE,
  ON_SALE_STATUS_CODE,
} from "../../common/utils/statusCode";
import DiscountedProduct from "../../Class/DiscountedProduct";

export const favoriteProducts = [
  new Product(
    1,
    1,
    "/img/favorite-products/favorite-product-1.png",
    "something",
    "/img/favorite-products/favorite-product-1-hover.jpg",
    "other something",
    "Táo Braeburn",
    159000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    NORMAL_STATUS_CODE,
    false
  ),
  new Product(
    2,
    1,
    "/img/favorite-products/favorite-product-1.png",
    "something",
    "/img/favorite-products/favorite-product-1-hover.jpg",
    "other something",
    "Táo Braeburn",
    159000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    NEW_STATUS_CODE,
    false
  ),

  new DiscountedProduct(
    3,
    1,
    "/img/favorite-products/organic-products/th-true-milk.png",
    "something",
    "/img/favorite-products/organic-products/th-true-milk-hover.jpg",
    "other something",
    "TH True Milk Organic - 500ml",
    159000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    ON_SALE_STATUS_CODE,
    false,
    12000
  ),
];
