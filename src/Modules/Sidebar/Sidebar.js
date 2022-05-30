import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__item">
          <h4>Department</h4>
          <ul>
            <li>
              <a href="/">Fresh Meat</a>
            </li>
            <li>
              <a href="/">Vegetables</a>
            </li>
            <li>
              <a href="/">Fruit & Nut Gifts</a>
            </li>
            <li>
              <a href="/">Fresh Berries</a>
            </li>
            <li>
              <a href="/">Ocean Foods</a>
            </li>
            <li>
              <a href="/">Butter & Eggs</a>
            </li>
            <li>
              <a href="/">Fastfood</a>
            </li>
            <li>
              <a href="/">Fresh Onion</a>
            </li>
            <li>
              <a href="/">Papayaya & Crisps</a>
            </li>
            <li>
              <a href="/">Oatmeal</a>
            </li>
          </ul>
        </div>
        <div className="sidebar__item">
          <h4>Price</h4>
          <div className="price-range-wrap">
            <div
              className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
              data-min="10"
              data-max="540"
            >
              <div className="ui-slider-range ui-corner-all ui-widget-header"></div>
              <span
                tabIndex="0"
                className="ui-slider-handle ui-corner-all ui-state-default"
              ></span>
              <span
                tabIndex="0"
                className="ui-slider-handle ui-corner-all ui-state-default"
              ></span>
            </div>
            <div className="range-slider">
              <div className="price-input">
                <input type="text" id="minamount" />
                <input type="text" id="maxamount" />
              </div>
            </div>
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
