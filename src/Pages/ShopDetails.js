import React from "react";
import Breadcrumb from "../Modules/Breadcrumb/Breadcrumb";
import ProductDetails from "../Modules/Products/ProductDetails/ProductDetails";

const ShopDetails = () => {
  return (
    <div>
      <Breadcrumb
        pageName={"Vegetable Package"}
        prevPages={["Trang chủ", "Mua sắm"]}
        curPage="Vegetable Package"
      />
      <ProductDetails />
    </div>
  );
};

export default ShopDetails;
