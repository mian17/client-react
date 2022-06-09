import React from "react";
import product_1 from "../../../Assets/img/product/product-1.jpg";
import product_2 from "../../../Assets/img/product/product-2.jpg";
import product_3 from "../../../Assets/img/product/product-3.jpg";
import product_4 from "../../../Assets/img/product/product-4.jpg";
import product_5 from "../../../Assets/img/product/product-5.jpg";
import product_6 from "../../../Assets/img/product/product-6.jpg";
import product_7 from "../../../Assets/img/product/product-7.jpg";
import product_8 from "../../../Assets/img/product/product-8.jpg";
import product_9 from "../../../Assets/img/product/product-9.jpg";
import product_10 from "../../../Assets/img/product/product-10.jpg";
import product_11 from "../../../Assets/img/product/product-11.jpg";
import product_12 from "../../../Assets/img/product/product-12.jpg";
import ProductItem from "./ProductItem/ProductItem";

const products = [
  { imageUrl: product_1, productName: "Thịt", price: 10000 },
  { imageUrl: product_2, productName: "Excepteur", price: 25000 },
  { imageUrl: product_3, productName: "Duis", price: 99000 },
  { imageUrl: product_4, productName: "labore", price: 125000 },
  { imageUrl: product_5, productName: "minim", price: 150000 },
  { imageUrl: product_6, productName: "dolor", price: 25000 },
  { imageUrl: product_7, productName: "reprehenderit", price: 125000 },
  { imageUrl: product_8, productName: "voluptate", price: 25000 },
  { imageUrl: product_9, productName: "velit", price: 99000 },
  { imageUrl: product_10, productName: "cillum", price: 10000 },
  { imageUrl: product_11, productName: "proident", price: 125000 },
  { imageUrl: product_12, productName: "laborum", price: 99000 },
];

const ProductItems = () => {
  return (
    <div className="row">
      {products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            imageUrl={product.imageUrl}
            productName={product.productName}
            price={product.price}
          />
        );
      })}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      style={{*/}
      {/*        background: `url("${product_1}") no-repeat center`,*/}
      {/*      }}*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">1</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-2.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">2</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-3.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">3</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-4.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">4</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-5.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">5</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-6.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">6</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-7.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">7</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-8.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">8</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-9.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">9</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-10.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">10</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-11.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">11</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<div className="col-lg-4 col-md-6 col-sm-6">*/}
      {/*  <div className="product__item">*/}
      {/*    <div*/}
      {/*      className="product__item__pic set-bg"*/}
      {/*      data-setbg="img/product/product-12.jpg"*/}
      {/*    >*/}
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
      {/*    <div className="product__item__text">*/}
      {/*      <h6>*/}
      {/*        <a href="/">12</a>*/}
      {/*      </h6>*/}
      {/*      <h5>$30.00</h5>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  );
};

export default ProductItems;
