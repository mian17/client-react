import React, { Component } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Input from "@mui/material/Input";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RemoveIcon from "@mui/icons-material/Remove";

import classes from "./ProductDetails.module.css";
import product_details_1 from "../../../Assets/img/product/details/product-details-1.jpg";
import product_details_2 from "../../../Assets/img/product/details/product-details-2.jpg";
import product_details_3 from "../../../Assets/img/product/details/product-details-3.jpg";
import product_details_4 from "../../../Assets/img/product/details/product-details-4.jpg";
import product_details_5 from "../../../Assets/img/product/details/product-details-5.jpg";
import { Button, IconButton } from "@mui/material";

class ProductDetails extends Component {
  render() {
    return (
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={product_details_1}
                    alt=""
                  />
                </div>
                {/*<div className="product__details__pic__slider owl-carousel">*/}
                {/*<img data-imgbigurl="img/product/details/product-details-2.jpg"*/}
                <div className="product__details__pic__slider">
                  <Swiper
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 4000 }}
                    speed={1000}
                    slidesPerView={4}
                    // navigation TODO: STYLE NAVIGATION, CHECK SWIPER DOCUMENTATION FOR MORE INFO https://swiperjs.com/react
                  >
                    <SwiperSlide>
                      <img
                        className={classes["product-details-swiperslide-pic"]}
                        src={product_details_1}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className={classes["product-details-swiperslide-pic"]}
                        src={product_details_2}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className={classes["product-details-swiperslide-pic"]}
                        src={product_details_3}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className={classes["product-details-swiperslide-pic"]}
                        src={product_details_4}
                        alt=""
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        className={classes["product-details-swiperslide-pic"]}
                        src={product_details_5}
                        alt=""
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>Vegetable’s Package</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">$50.00</div>
                <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit
                  amet quam vehicula elementum sed sit amet dui. Proin eget
                  tortor risus.
                </p>

                <IconButton>
                  <RemoveIcon />
                </IconButton>
                <Input
                  type="number"
                  defaultValue="1"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                  }}
                  min="1"
                  sx={{ width: "30%" }}
                />
                <IconButton>
                  <AddIcon />
                </IconButton>

                <Button
                  size="large"
                  sx={{ borderRadius: "0px" }}
                  variant="contained"
                >
                  ADD TO CART
                </Button>

                <IconButton
                  size="large"
                  color="primary"
                  variant="outlined"
                  href="/"
                >
                  <FavoriteIcon color="primary" />
                </IconButton>

                <ul className={classes["product-details-info-list"]}>
                  <li>
                    <strong>Availability</strong> <span>In Stock</span>
                  </li>
                  <li>
                    <strong>Shipping</strong>{" "}
                    <span>
                      01 day shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <strong>Weight</strong> <span>0.5 kg</span>
                  </li>
                  <li>
                    <strong>Share on</strong>
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
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Reviews <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                      <p>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies
                        ligula sed magna dictum porta. Cras ultricies ligula sed
                        magna dictum porta. Sed porttitor lectus nibh. Mauris
                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Sed porttitor lectus nibh. Vestibulum ac
                        diam sit amet quam vehicula elementum sed sit amet dui.
                        Proin eget tortor risus.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies
                        ligula sed magna dictum porta. Cras ultricies ligula sed
                        magna dictum porta. Sed porttitor lectus nibh. Mauris
                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
