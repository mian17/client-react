import React from "react";
import { useCallback, useEffect, useState } from "react";

import classes from "./ProductItems.module.css";

import ProductItem from "./ProductItem/ProductItem";
import FilterProductItems from "../FilterProductItems/FilterProductItems";
import ProductItemLoader from "./ProductItemLoader/ProductItemLoader";
import ProductItemList from "./ProductItem/ProductItemList";

// const products = [
//   { imageUrl: product_1, productName: "Thịt", price: 10000 },
//   { imageUrl: product_2, productName: "Excepteur", price: 25000 },
//   { imageUrl: product_3, productName: "Duis", price: 99000 },
//   { imageUrl: product_4, productName: "labore", price: 125000 },
//   { imageUrl: product_5, productName: "minim", price: 150000 },
//   { imageUrl: product_6, productName: "dolor", price: 25000 },
//   { imageUrl: product_7, productName: "reprehenderit", price: 125000 },
//   { imageUrl: product_8, productName: "voluptate", price: 25000 },
//   { imageUrl: product_9, productName: "velit", price: 99000 },
//   { imageUrl: product_10, productName: "cillum", price: 10000 },
//   { imageUrl: product_11, productName: "proident", price: 125000 },
//   { imageUrl: product_12, productName: "laborum", price: 99000 },
// ];

const ProductItems = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortLayout, setSortLayout] = useState("grid");

  const fetchProductItems = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await response.json();

      const transformedProductData = data.map((productData) => {
        return {
          productId: productData.id,
          imageUrl: productData.image,
          productName: productData.title,
          price: productData.price * 1000,
          rating: productData.rating.rate,
        };
      });

      setProducts(transformedProductData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // Request products
  useEffect(() => {
    fetchProductItems();
  }, [fetchProductItems]);

  // Status handling and setting content to return
  let content = <p className={classes["status-message"]}>Không có sản phẩm</p>;

  if (products.length > 0) {
    content = products.map((product, index) => {
      return <ProductItem key={index} sortLayout={"grid"} product={product} />;
    });
  }
  if (error) {
    content = <p className={classes["status-message"]}>{error}</p>;
  }
  if (isLoading)
    content = (
      <>
        <ProductItemLoader />
        <ProductItemLoader />
        <ProductItemLoader />
        <ProductItemLoader />
        <ProductItemLoader />
        <ProductItemLoader />
      </>
    );

  const getFilterStatus = (status) => {
    if (status === null) return;
    if (status === "price-goes-up") {
      setProducts((prevState) => {
        return prevState.slice().sort((a, b) => a.price - b.price);
      });
    }
    if (status === "price-goes-down") {
      setProducts((prevState) => {
        return prevState.slice().sort((a, b) => b.price - a.price);
      });
    }
  };

  const getSortLayout = (layout) => {
    if (layout === "grid") setSortLayout(layout);
    if (layout === "list") setSortLayout(layout);
  };

  return (
    <>
      <FilterProductItems
        getFilterStatus={getFilterStatus}
        getSortLayout={getSortLayout}
        foundNum={products.length}
      />
      <div className="row">{content}</div>
    </>
  );
};

export default ProductItems;
