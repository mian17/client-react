import logo from "../Assets/img/logo.png";
import language from "../Assets/img/language.png";

import $ from "jquery";

import { Component } from "react";

import classes from "./Header.module.css";

class Header extends Component {
  render() {
    return (
      <>
        <div
          className="hamburger__menu__overlay"
          onClick={() => {
            $(".hamburger__menu__wrapper").removeClass(
              "show__hamburger__menu__wrapper"
            );
            $(".hamburger__menu__overlay").removeClass("active");
            $("body").removeClass("over_hid");
          }}
        ></div>
        <div className="hamburger__menu__wrapper">
          <div className="hamburger__menu__logo">
            <a href="/">
              <img src={logo} alt="Shop's Logo" />
            </a>
          </div>
          <div className="hamburger__menu__cart">
            <ul>
              <li>
                <a href="/">
                  <i className="fa fa-heart"></i> <span>1</span>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="fa fa-shopping-bag"></i> <span>3</span>
                </a>
              </li>
            </ul>
            <div className="header__cart__price">
              <span>100.000 VNĐ</span>
            </div>
          </div>
          <div className="hamburger__menu__widget">
            <div className="header__top__right__language">
              <img src={language} alt="" />
              <div>Tiếng Việt</div>
              <span className="arrow_carrot-down"></span>
              <ul>
                <li>
                  <a href="/">Tiếng Việt</a>
                </li>
                <li>
                  <a href="/">English</a>
                </li>
              </ul>
            </div>
            <div className="header__top__right__auth">
              <a href="/">
                <i className="fa fa-user"></i> Đăng nhập
              </a>
            </div>
          </div>
          <nav className="mobile-menu">
            <ul className={classes["mobile-menu-list"]}>
              <li className="active">
                <a href="/">Trang chủ</a>
              </li>
              <li>
                <a href="%PUBLIC_URL%/shop.html">Mua sắm</a>
              </li>
              <li>
                <a href="/">Pages</a>
              </li>
              <li>
                <a href="%PUBLIC_URL%/blog.html">Blog</a>
              </li>
              <li>
                <a href="%PUBLIC_URL%/contact.html">Liên hệ</a>
              </li>
            </ul>
          </nav>
          {/*<div id="mobile-menu-wrap"></div>*/}
          <div className="header__top__right__social">
            <a href="/">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="/">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="/">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="/">
              <i className="fa fa-pinterest-p"></i>
            </a>
          </div>
          <div className="hamburger__menu__contact">
            <ul>
              <li>
                <i className="fa fa-envelope"></i> info@ogani.com
              </li>
              <li>Miễn phí vận chuyển cho đơn hàng từ 200.000 VNĐ.</li>
            </ul>
          </div>
        </div>
        <header className="header">
          <div className="header__top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__left">
                    <ul>
                      <li>
                        <i className="fa fa-envelope"></i> info@ogani.com
                      </li>
                      <li>Miễn phí vận chuyển cho đơn hàng từ 200.000 VNĐ.</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="header__top__right">
                    <div className="header__top__right__social">
                      <a href="/">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="/">
                        <i className="fa fa-pinterest-p"></i>
                      </a>
                    </div>
                    <div className="header__top__right__language">
                      <img src={language} alt="" />
                      <div>Tiếng Việt</div>
                      <span className="arrow_carrot-down"></span>
                      <ul>
                        <li>
                          <a href="/">English</a>
                        </li>
                      </ul>
                    </div>
                    <div className="header__top__right__auth">
                      <a href="/">
                        <i className="fa fa-user"></i> Đăng nhập
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="header__logo">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <nav className="header__menu">
                  <ul>
                    <li className="active">
                      <a href="/">Trang chủ</a>
                    </li>
                    <li>
                      <a href="%PUBLIC_URL%/shop.html">Mua sắm</a>
                    </li>
                    {/*<li>*/}
                    {/*  <a href="/">Pages</a>*/}
                    {/*  <ul className="header__menu__dropdown">*/}
                    {/*    <li>*/}
                    {/*      <a href="%PUBLIC_URL%/shop-details.html">*/}
                    {/*        Shop Details*/}
                    {/*      </a>*/}
                    {/*    </li>*/}
                    {/*//     <li>*/}
                    {/*      <a href="%PUBLIC_URL%/shopping-cart.html">*/}
                    {/*        Shoping Cart*/}
                    {/*      </a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*      <a href="%PUBLIC_URL%/checkout.html">Check Out</a>*/}
                    {/*    </li>*/}
                    {/*    <li>*/}
                    {/*      <a href="%PUBLIC_URL%/blog-details.html">*/}
                    {/*        Blog Details*/}
                    {/*      </a>*/}
                    {/*    </li>*/}
                    {/*  </ul>*/}
                    {/*</li>*/}
                    <li>
                      <a href="%PUBLIC_URL%/blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="%PUBLIC_URL%/contact.html">Liên hệ</a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-lg-3">
                <div className="header__cart">
                  <ul>
                    <li>
                      <a href="/">
                        <i className="fa fa-heart"></i> <span>1</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <i className="fa fa-shopping-bag"></i> <span>3</span>
                      </a>
                    </li>
                  </ul>
                  <div className="header__cart__price">
                    <span>100.000 VNĐ</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hamburger__open"
              onClick={() => {
                $(".hamburger__menu__wrapper").addClass(
                  "show__hamburger__menu__wrapper"
                );
                $(".hamburger__menu__overlay").addClass("active");
                $("body").addClass("over_hid");
              }}
            >
              <i className="fa fa-bars"></i>
            </div>
          </div>
        </header>
      </>
    );
  }
}

export default Header;
