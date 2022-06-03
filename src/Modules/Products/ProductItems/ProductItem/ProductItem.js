import React, { Component } from "react";

const currentFormatOptions = {
  style: "currency",
  currency: "VND",
};

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formattedDiscountedPrice: new Intl.NumberFormat(
        "vi-VN",
        currentFormatOptions
      ).format(this.props.discountedPrice),
      formattedOldPrice: new Intl.NumberFormat(
        "vi-VN",
        currentFormatOptions
      ).format(this.props.oldPrice),
    };
  }

  render() {
    return (
      <div className="product__discount__item">
        <div
          className="product__discount__item__pic"
          style={{
            background: `url("${this.props.imageUrl}") no-repeat center`,
          }}
        >
          <div className="product__discount__percent">
            -{this.props.discountedRatio}%
          </div>
          <ul className="product__item__pic__hover">
            <li>
              <a href="/">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="product__discount__item__text">
          <span>{this.props.category}</span>
          <h5>
            <a href="/">{this.props.productName}</a>
          </h5>
          <div className="product__item__price">
            {this.state.formattedDiscountedPrice}{" "}
            <span>{this.state.formattedOldPrice}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
