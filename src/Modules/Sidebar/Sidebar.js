import React, { Component } from "react";
import PriceRangeSlider from "./RangeSlider/PriceRangeSlider";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: [20, 37] };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, newValue) {
    this.setState((prevState) => {
      prevState = newValue;
      return prevState;
    });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__item">
          <h4>Danh mục</h4>
          <ul>
            <li>
              <a href="/">Thịt tươi</a>
            </li>
            <li>
              <a href="/">Rau củ</a>
            </li>
            <li>
              <a href="/">Trái cây</a>
            </li>
            <li>
              <a href="/">Thủy sản</a>
            </li>
            <li>
              <a href="/">Bơ và Trứng</a>
            </li>
            <li>
              <a href="/">Thức ăn nhanh</a>
            </li>
            <li>
              <a href="/">Yến mạch </a>
            </li>
          </ul>
        </div>
        <div className="sidebar__item">
          <h4>Giá</h4>
          <div className="price-range-wrap">
            <PriceRangeSlider />
          </div>
        </div>
        <div className="sidebar__item sidebar__item__color--option">
          <h4>Colors</h4>
          <div className="sidebar__item__color sidebar__item__color--white">
            <label htmlFor="white">
              White
              <input type="radio" id="white" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--gray">
            <label htmlFor="gray">
              Gray
              <input type="radio" id="gray" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--red">
            <label htmlFor="red">
              Red
              <input type="radio" id="red" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--black">
            <label htmlFor="black">
              Black
              <input type="radio" id="black" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--blue">
            <label htmlFor="blue">
              Blue
              <input type="radio" id="blue" />
            </label>
          </div>
          <div className="sidebar__item__color sidebar__item__color--green">
            <label htmlFor="green">
              Green
              <input type="radio" id="green" />
            </label>
          </div>
        </div>
        <div className="sidebar__item">
          <h4>Popular Size</h4>
          <div className="sidebar__item__size">
            <label htmlFor="large">
              Large
              <input type="radio" id="large" />
            </label>
          </div>
          <div className="sidebar__item__size">
            <label htmlFor="medium">
              Medium
              <input type="radio" id="medium" />
            </label>
          </div>
          <div className="sidebar__item__size">
            <label htmlFor="small">
              Small
              <input type="radio" id="small" />
            </label>
          </div>
          <div className="sidebar__item__size">
            <label htmlFor="tiny">
              Tiny
              <input type="radio" id="tiny" />
            </label>
          </div>
        </div>
        <div className="sidebar__item">
          <div className="latest-product__text">
            <h4>Latest Products</h4>
            <div className="latest-product__slider owl-carousel">
              <div className="latest-product__slider__item">
                <a href="/" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img
                      src="../src/Assets/img/latest-product/lp-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>1</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="/" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img
                      src="../src/Assets/img/latest-product/lp-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>2</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="/" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img
                      src="../src/Assets/img/latest-product/lp-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>3</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
              <div className="latest-product__slider__item">
                <a href="/" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img
                      src="../src/Assets/img/latest-product/lp-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>4</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="/" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img
                      src="../src/Assets/img/latest-product/lp-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>5</h6>
                    <span>$30.00</span>
                  </div>
                </a>
                <a href="/" className="latest-product__item">
                  <div className="latest-product__item__pic">
                    <img
                      src="../src/Assets/img/latest-product/lp-3.jpg"
                      alt=""
                    />
                  </div>
                  <div className="latest-product__item__text">
                    <h6>6</h6>
                    <span>$30.00</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
