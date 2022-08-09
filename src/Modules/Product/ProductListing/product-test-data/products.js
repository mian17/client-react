// Status code
// 0: normal
// 1: new
// 2: on sale
// 3: back in stock

import Product from "../../Class/Product";
import CategoricalProduct from "../../Class/CategoricalProduct";
import CategoryImage from "../../Class/CategoryImage";
import DiscountedProduct from "../../Class/DiscountedProduct";

import {
  NORMAL_STATUS_CODE,
  NEW_STATUS_CODE,
  ON_SALE_STATUS_CODE,
  BACK_IN_STOCK_STATUS_CODE,
} from "../../common/utils/statusCode";

export const products = [
  new Product(
    1,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    10000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    NORMAL_STATUS_CODE,
    false
  ),
  new CategoricalProduct(
    2,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    20000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    NEW_STATUS_CODE,
    true,
    "#FF0000",
    [
      new CategoryImage(
        "Táo xanh",
        "/img/product-listing/apple-category.jpg",
        "#00ff00",
        "green apple"
      ),
      new CategoryImage(
        "Nước soda táo",
        "/img/product-listing/apple-2-category.jpg",
        "#FFFF00",
        "yellow apple soda bottle"
      ),
    ]
  ),
  new DiscountedProduct(
    3,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    30000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    ON_SALE_STATUS_CODE,
    false,
    8000
  ),
  new Product(
    4,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    40000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    BACK_IN_STOCK_STATUS_CODE,
    false
  ),
  new Product(
    5,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    50000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    NORMAL_STATUS_CODE,
    false
  ),
  new Product(
    6,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    60000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    NEW_STATUS_CODE,
    false
  ),
  new DiscountedProduct(
    7,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    70000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    ON_SALE_STATUS_CODE,
    false,
    50000
  ),
  new Product(
    8,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    80000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    BACK_IN_STOCK_STATUS_CODE,
    false
  ),
  new Product(
    9,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    90000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    NORMAL_STATUS_CODE,
    false
  ),
  new Product(
    10,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    100000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    NEW_STATUS_CODE,
    false
  ),
  new DiscountedProduct(
    11,
    "/img/product-listing/product-listing.png",
    "something",
    "/img/product-listing/product-listing-hover.jpg",
    "other something",
    "Táo Braeburn",
    110000,
    "Hương vị đậm đà của trái táo Braeburn không thể nào cưỡng lại được. Loại táo giòn này mang tới vị chua ngọt với hương vị đậm ngọt ngào.",
    ON_SALE_STATUS_CODE,
    false,
    90000
  ),
];
