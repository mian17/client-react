import { useState, useCallback } from "react";
import CategoryItem from "./CategoryItem";
import React, { useEffect } from "react";
import classes from "../Products/ProductItems/ProductItems.module.css";
import { Skeleton } from "@mui/material";

const CategoriesSidebar = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCategories = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://fakestoreapi.com/products/");
      if (!response.ok) {
        throw new Error("Không lấy được dữ liệu");
      }

      const data = await response.json();

      const transformedProductData = data.map((productData) => {
        return (
          productData.category[0].toUpperCase() + productData.category.slice(1)
        );
      });
      const transformedProductDataSet = new Set(transformedProductData);
      const transformedProductDataToOutput = Array.from(
        transformedProductDataSet
      ).sort();
      setCategories(transformedProductDataToOutput);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  // Request products
  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Status handling and setting content to return
  let content = <p className={classes["status-message"]}>Không có sản phẩm</p>;

  if (categories.length > 0) {
    content = categories.map((category, index) => {
      return <CategoryItem key={index} receivedCategory={category} />;
    });
  }
  if (error) {
    content = <p className={classes["status-message"]}>{error}</p>;
  }
  if (isLoading) {
    // content = (
    //   <p className={classes["status-message"]}>
    //     Đang lấy thông tin các sản phẩm...
    //   </p>
    // );
    content = (
      <>
        <li>
          <a href="/">
            <Skeleton />
          </a>
        </li>
        <li>
          <a href="/">
            <Skeleton />
          </a>
        </li>
        <li>
          <a href="/">
            <Skeleton />
          </a>
        </li>
        <li>
          <a href="/">
            <Skeleton />
          </a>
        </li>
      </>
    );
  }
  return (
    <div className="sidebar__item">
      <h4>Danh mục</h4>
      <ul>{content}</ul>
    </div>
  );
};
export default CategoriesSidebar;
