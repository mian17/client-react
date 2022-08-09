import Product from "../../Class/Product";

import {
  NORMAL_STATUS_CODE,
  NEW_STATUS_CODE,
  ON_SALE_STATUS_CODE,
  BACK_IN_STOCK_STATUS_CODE,
} from "../../common/utils/statusCode";

export const spotlightProduct = new Product(
  1,
  "/img/spotlight-product/spotlight-product-1.png",
  "something",
  "/img/spotlight-product/spotlight-product-1-hover.jpg",
  "other something",
  "Táo Braeburn",
  159000,
  "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
  NORMAL_STATUS_CODE,
  false
);
