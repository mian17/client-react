import React, { useState } from "react";

import { Button, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import Input from "@mui/material/Input";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";

import classes from "./ProductDetailsBasicInfo.module.css";

const ProductDetailsBasicInfo = () => {
  const [productNum, setProductNum] = useState(1);

  const increaseProductNum = () => {
    setProductNum((prevState) => prevState + 1);
  };

  const decreaseProductNum = () => {
    if (productNum > 1) {
      setProductNum((prevState) => prevState - 1);
    }
  };

  const editProductNum = (e) => {
    setProductNum(+e.target.value);
  };

  // Props:
  // {productName, productReviewNum, productBasicInfo, productShippingTime, productWeight}
  return (
    <div className="product__details__text">
      <h3>
        {/*{props.productName}*/}
        Tên sản phẩm
      </h3>
      <div className="product__details__rating">
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
        {/*{props.productReviewNum}*/}
        <span>(18 bài đánh giá)</span>
      </div>
      <div className="product__details__price">500.000 đ</div>
      <p>
        {/*{props.productBasicInfo}*/}
        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum
        ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor
        lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit
        amet dui. Proin eget tortor risus.
      </p>
      <IconButton onClick={decreaseProductNum}>
        <RemoveIcon />
      </IconButton>
      <Input
        type="number"
        value={productNum}
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
        min="1"
        sx={{ width: "30%" }}
        onChange={editProductNum}
        required
      />
      <IconButton onClick={increaseProductNum}>
        <AddIcon />
      </IconButton>
      <Button size="large" sx={{ borderRadius: "0px" }} variant="contained">
        THÊM VÀO GIỎ HÀNG
      </Button>
      <IconButton size="large" color="primary" variant="outlined" href="/">
        <FavoriteIcon color="primary" />
      </IconButton>
      <ul className={classes["product-details-info-list"]}>
        <li>
          <strong>Tình trạng kho</strong> <span>Còn hàng</span>
        </li>
        <li>
          <strong>Thời gian vận chuyển</strong>{" "}
          <span>
            {/*Vận chuyển trong 1 ngày. <samp>Free pickup today</samp>*/}1 ngày
            {/*  {props.productShippingTime}*/}
          </span>
        </li>
        <li>
          <strong>Khối lượng</strong>{" "}
          <span>
            {/*{props.productWeight}*/}
            0.5 kg
          </span>
        </li>
        <li>
          <strong>Chia sẻ</strong>
          <div className="share">
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="/">
              <i className="fa fa-pinterest"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default ProductDetailsBasicInfo;
