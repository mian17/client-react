import React, { Component } from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import DiscountedProductItem from "./DiscountedProduct/DiscountedProductItem";

import pd_1 from "../../../Assets/img/product/discount/pd-1.jpg";
import pd_2 from "../../../Assets/img/product/discount/pd-2.jpg";
import pd_3 from "../../../Assets/img/product/discount/pd-3.jpg";
import pd_4 from "../../../Assets/img/product/discount/pd-4.jpg";
import pd_5 from "../../../Assets/img/product/discount/pd-5.jpg";
import pd_6 from "../../../Assets/img/product/discount/pd-6.jpg";

const discountedProducts = [
  {
    imageUrl: pd_1,
    productName: "Hạt khô",
    discountedPrice: 36000,
    oldPrice: 30000,
    discountedRatio: 20,
    category: "Trái cây khô",
  },
  {
    imageUrl: pd_2,
    productName: "Bánh sandwich",
    discountedPrice: 23000,
    oldPrice: 25000,
    discountedRatio: 10,
    category: "Thức ăn nhanh",
  },
  {
    imageUrl: pd_3,
    productName: "Nước trái cây",
    discountedPrice: 10000,
    oldPrice: 15000,
    discountedRatio: 12,
    category: "Nước uống",
  },
  {
    imageUrl: pd_4,
    productName: "Xoài",
    discountedPrice: 30000,
    oldPrice: 50000,
    discountedRatio: 25,
    category: "Trái cây",
  },
  {
    imageUrl: pd_5,
    productName: "Bánh Hamburger",
    discountedPrice: 300000,
    oldPrice: 100000,
    discountedRatio: 26,
    category: "Thức ăn nhanh",
  },
  {
    imageUrl: pd_6,
    productName: "Nho Mỹ",
    discountedPrice: 400000,
    oldPrice: 200000,
    discountedRatio: 50,
    category: "Trái cây",
  },
];

const categoriesBreakpointsOption = {
  320: {
    slidesPerView: 1,
  },
  479: {
    slidesPerView: 2,
  },
  992: {
    slidesPerView: 3,
  },
};

class DiscountedProducts extends Component {
  render() {
    return (
      <div className="product__discount">
        <div className="section-title product__discount__title">
          <h2>Giảm giá</h2>
        </div>
        <Swiper
          breakpoints={categoriesBreakpointsOption}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000 }}
          speed={1000}
          slidesPerView={3}
          className="row"
        >
          {discountedProducts.map((image, index) => {
            return (
              <SwiperSlide key={index} className="col-lg-4">
                <DiscountedProductItem
                  imageUrl={image.imageUrl}
                  productName={image.productName}
                  discountedPrice={image.discountedPrice}
                  oldPrice={image.oldPrice}
                  discountedRatio={image.discountedRatio}
                  category={image.category}
                />
              </SwiperSlide>
            );
          })}
          {/*<SwiperSlide className="col-lg-4">*/}
          {/*  <div className="product__discount__item">*/}
          {/*    <div*/}
          {/*      className="product__discount__item__pic"*/}
          {/*      style={{*/}
          {/*        background: `url("${pd_3}") no-repeat center`,*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <div className="product__discount__percent">-20%</div>*/}
          {/*      <ul className="product__item__pic__hover">*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-heart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-retweet"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-shopping-cart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*    <div className="product__discount__item__text">*/}
          {/*      <span>Vegetables</span>*/}
          {/*      <h5>*/}
          {/*        <a href="/">Vegetables’package</a>*/}
          {/*      </h5>*/}
          {/*      <div className="product__item__price">*/}
          {/*        $30.00 <span>$36.00</span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</SwiperSlide>*/}
          {/*<SwiperSlide className="col-lg-4">*/}
          {/*  <div className="product__discount__item">*/}
          {/*    <div*/}
          {/*      className="product__discount__item__pic"*/}
          {/*      style={{*/}
          {/*        background: `url("${pd_4}") no-repeat center`,*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <div className="product__discount__percent">-20%</div>*/}
          {/*      <ul className="product__item__pic__hover">*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-heart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-retweet"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-shopping-cart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*    <div className="product__discount__item__text">*/}
          {/*      <span>Vegetables</span>*/}
          {/*      <h5>*/}
          {/*        <a href="/">Vegetables’package</a>*/}
          {/*      </h5>*/}
          {/*      <div className="product__item__price">*/}
          {/*        $30.00 <span>$36.00</span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</SwiperSlide>*/}
          {/*<SwiperSlide className="col-lg-4">*/}
          {/*  <div className="product__discount__item">*/}
          {/*    <div*/}
          {/*      className="product__discount__item__pic"*/}
          {/*      style={{*/}
          {/*        background: `url("${pd_2}") no-repeat center`,*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <div className="product__discount__percent">-20%</div>*/}
          {/*      <ul className="product__item__pic__hover">*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-heart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-retweet"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-shopping-cart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*    <div className="product__discount__item__text">*/}
          {/*      <span>Vegetables</span>*/}
          {/*      <h5>*/}
          {/*        <a href="/">Vegetables’package</a>*/}
          {/*      </h5>*/}
          {/*      <div className="product__item__price">*/}
          {/*        $30.00 <span>$36.00</span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</SwiperSlide>*/}
          {/*<SwiperSlide className="col-lg-4">*/}
          {/*  <div className="product__discount__item">*/}
          {/*    <div*/}
          {/*      className="product__discount__item__pic"*/}
          {/*      style={{*/}
          {/*        background: `url("${pd_5}") no-repeat center`,*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <div className="product__discount__percent">-20%</div>*/}
          {/*      <ul className="product__item__pic__hover">*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-heart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-retweet"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-shopping-cart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*    <div className="product__discount__item__text">*/}
          {/*      <span>Vegetables</span>*/}
          {/*      <h5>*/}
          {/*        <a href="/">Vegetables’package</a>*/}
          {/*      </h5>*/}
          {/*      <div className="product__item__price">*/}
          {/*        $30.00 <span>$36.00</span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</SwiperSlide>*/}
          {/*<SwiperSlide className="col-lg-4">*/}
          {/*  <div className="product__discount__item">*/}
          {/*    <div*/}
          {/*      className="product__discount__item__pic"*/}
          {/*      style={{*/}
          {/*        background: `url("${pd_6}") no-repeat center`,*/}
          {/*      }}*/}
          {/*    >*/}
          {/*      <div className="product__discount__percent">-20%</div>*/}
          {/*      <ul className="product__item__pic__hover">*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-heart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-retweet"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*          <a href="/">*/}
          {/*            <i className="fa fa-shopping-cart"></i>*/}
          {/*          </a>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </div>*/}
          {/*    <div className="product__discount__item__text">*/}
          {/*      <span>Vegetables</span>*/}
          {/*      <h5>*/}
          {/*        <a href="/">Vegetables’package</a>*/}
          {/*      </h5>*/}
          {/*      <div className="product__item__price">*/}
          {/*        $30.00 <span>$36.00</span>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</SwiperSlide>*/}
        </Swiper>
      </div>
    );
  }
}

export default DiscountedProducts;
