import React, { Component } from "react";

// Imports from Swiper API (documentation link:https://swiperjs.com/react#installation=)
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/bundle";

import lp1 from "../../../Assets/img/latest-product/lp-1.jpg";
import lp2 from "../../../Assets/img/latest-product/lp-2.jpg";
import lp3 from "../../../Assets/img/latest-product/lp-3.jpg";

class LatestProducts extends Component {
  render() {
    return (
      <div className="col-lg-4 col-md-6">
        <div className="latest-product__text">
          <h4>Latest Products</h4>
          <div className="latest-product__slider">
            <div className="latest-product__slider__item">
              <a href="/" className="latest-product__item">
                <div className="latest-product__item__pic">
                  <img src={lp1} alt="Vegetable" />
                </div>
                <div className="latest-product__item__text">
                  <h6>1</h6>
                  <span>$30.00</span>
                </div>
              </a>
              <a href="/" className="latest-product__item">
                <div className="latest-product__item__pic">
                  <img src={lp2} alt="Pepper" />
                </div>
                <div className="latest-product__item__text">
                  <h6>2</h6>
                  <span>$30.00</span>
                </div>
              </a>
              <a href="/" className="latest-product__item">
                <div className="latest-product__item__pic">
                  <img src={lp3} alt="Meat" />
                </div>
                <div className="latest-product__item__text">
                  <h6>3</h6>
                  <span>$30.00</span>
                </div>
              </a>
            </div>
            <div className="latest-prdouct__slider__item">
              <a href="/" className="latest-product__item">
                <div className="latest-product__item__pic">
                  <img src={lp1} alt="Vegetable" />
                </div>
                <div className="latest-product__item__text">
                  <h6>4</h6>
                  <span>$30.00</span>
                </div>
              </a>
              <a href="/" className="latest-product__item">
                <div className="latest-product__item__pic">
                  <img src={lp2} alt="Pepper" />
                </div>
                <div className="latest-product__item__text">
                  <h6>5</h6>
                  <span>$30.00</span>
                </div>
              </a>
              <a href="/" className="latest-product__item">
                <div className="latest-product__item__pic">
                  <img src={lp3} alt="Meat" />
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
    );
  }
}

export default LatestProducts;
