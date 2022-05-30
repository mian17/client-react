import React, { Component } from "react";
import pd_1 from "../../../../Assets/img/product/discount/pd-1.jpg";

class ProductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="product__discount__item">
        <div
          className="product__discount__item__pic"
          style={{
            background: `url("${pd_1}") no-repeat center`,
          }}
        >
          <div className="product__discount__percent">-20%</div>
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
          <span>Trái cây khô</span>
          <h5>
            <a href="/">Nho khô</a>
          </h5>
          <div className="product__item__price">
            $30.00 <span>$36.00</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
