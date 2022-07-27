import { useContext, useState } from "react";

import logo from "../Assets/img/logo.png";
import language from "../Assets/img/language.png";

import CartContext from "../store/cart-context";
import $ from "jquery";

import { NavLink } from "react-router-dom";

import Modal from "../Modules/Modal/SignInModal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import classes from "./Header.module.css";

import { currencyFormatOptions } from "../utils/utils";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

const Header = () => {
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
      {/*<div className="hamburger__menu__wrapper">*/}
      {/*  <div className="hamburger__menu__logo">*/}
      {/*    <a href="/">*/}
      {/*      <img src={logo} alt="Shop's Logo" />*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div className="hamburger__menu__cart">*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        <a href="/">*/}
      {/*          <i className="fa fa-heart"></i> <span>1</span>*/}
      {/*        </a>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <a href="/">*/}
      {/*          <i className="fa fa-shopping-bag"></i>{" "}*/}
      {/*          <span>{numberOfCartItems}</span>*/}
      {/*        </a>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*    <div className="header__cart__price">*/}
      {/*      <span>{totalMoneyInCart}</span>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <div className="hamburger__menu__widget">*/}
      {/*    <div className="header__top__right__language">*/}
      {/*      <img src={language} alt="" />*/}
      {/*      <div>Tiếng Việt</div>*/}
      {/*      <span className="arrow_carrot-down"></span>*/}
      {/*      <ul>*/}
      {/*        <li>*/}
      {/*          <a href="/">Tiếng Việt</a>*/}
      {/*        </li>*/}
      {/*        <li>*/}
      {/*          <a href="/">English</a>*/}
      {/*        </li>*/}
      {/*      </ul>*/}
      {/*    </div>*/}
      {/*    <div className="header__top__right__auth">*/}
      {/*      <NavLink*/}
      {/*        to="/signinmobile"*/}
      {/*        onClick={() => {*/}
      {/*          $(".hamburger__menu__wrapper").removeClass(*/}
      {/*            "show__hamburger__menu__wrapper"*/}
      {/*          );*/}
      {/*          $(".hamburger__menu__overlay").removeClass("active");*/}
      {/*          $("body").removeClass("over_hid");*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        <i className="fa fa-user"></i> Đăng nhập*/}
      {/*      </NavLink>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*  <nav className="mobile-menu">*/}
      {/*    <ul className={classes["mobile-menu-list"]}>*/}
      {/*      <li className="active">*/}
      {/*        <NavLink*/}
      {/*          className={({ isActive }) =>*/}
      {/*            isActive ? classes["active-nav-link"] : undefined*/}
      {/*          }*/}
      {/*          to="/"*/}
      {/*        >*/}
      {/*          Trang chủ*/}
      {/*        </NavLink>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <NavLink*/}
      {/*          className={({ isActive }) =>*/}
      {/*            isActive ? classes["active-nav-link"] : undefined*/}
      {/*          }*/}
      {/*          to="/shop"*/}
      {/*        >*/}
      {/*          Mua sắm*/}
      {/*        </NavLink>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <NavLink*/}
      {/*          className={({ isActive }) =>*/}
      {/*            isActive ? classes["active-nav-link"] : undefined*/}
      {/*          }*/}
      {/*          to="/blog"*/}
      {/*        >*/}
      {/*          Blog*/}
      {/*        </NavLink>*/}
      {/*      </li>*/}
      {/*      <li>*/}
      {/*        <NavLink*/}
      {/*          className={({ isActive }) =>*/}
      {/*            isActive ? classes["active-nav-link"] : undefined*/}
      {/*          }*/}
      {/*          to="/contact"*/}
      {/*        >*/}
      {/*          Liên hệ*/}
      {/*        </NavLink>*/}
      {/*      </li>*/}
      {/*    </ul>*/}
      {/*  </nav>*/}
      {/*  /!*<div id="mobile-menu-wrap"></div>*!/*/}
      {/*  <div className="header__top__right__social">*/}
      {/*    <a href="/">*/}
      {/*      <i className="fa fa-facebook"></i>*/}
      {/*    </a>*/}
      {/*    <a href="/">*/}
      {/*      <i className="fa fa-twitter"></i>*/}
      {/*    </a>*/}
      {/*    <a href="/">*/}
      {/*      <i className="fa fa-linkedin"></i>*/}
      {/*    </a>*/}
      {/*    <a href="/">*/}
      {/*      <i className="fa fa-pinterest-p"></i>*/}
      {/*    </a>*/}
      {/*  </div>*/}
      {/*  <div className="hamburger__menu__contact">*/}
      {/*    <ul>*/}
      {/*      <li>*/}
      {/*        <i className="fa fa-envelope"></i> info@ogani.com*/}
      {/*      </li>*/}
      {/*      <li>Miễn phí vận chuyển cho đơn hàng từ 200.000 VNĐ.</li>*/}
      {/*    </ul>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/*<header className="header">*/}
      {/*  <div className="header__top">*/}
      {/*    <div className="container-fluid">*/}
      {/*      <div className="row align-items-center justify-content-center">*/}
      {/*        /!*<div className="col-lg-6 col-md-6">*!/*/}
      {/*        /!*  <div className="header__top__left">*!/*/}
      {/*        /!*    <ul>*!/*/}
      {/*        /!*      <li>*!/*/}
      {/*        /!*        <i className="fa fa-envelope"></i> info@ogani.com*!/*/}
      {/*        /!*      </li>*!/*/}
      {/*        /!*      <li>Miễn phí vận chuyển cho đơn hàng từ 200.000 VNĐ.</li>*!/*/}
      {/*        /!*    </ul>*!/*/}
      {/*        /!*  </div>*!/*/}
      {/*        /!*</div>*!/*/}

      {/*        /!*<div className="col-lg-6 col-md-6">*!/*/}
      {/*        /!*  <div className="header__top__right">*!/*/}
      {/*        /!*    <div className="header__top__right__social">*!/*/}
      {/*        /!*      <a href="/">*!/*/}
      {/*        /!*        <i className="fa fa-facebook"></i>*!/*/}
      {/*        /!*      </a>*!/*/}
      {/*        /!*      <a href="/">*!/*/}
      {/*        /!*        <i className="fa fa-twitter"></i>*!/*/}
      {/*        /!*      </a>*!/*/}

      {/*        /!*      <a href="/">*!/*/}
      {/*        /!*        <i className="fa fa-linkedin"></i>*!/*/}
      {/*        /!*      </a>*!/*/}
      {/*        /!*      <a href="/">*!/*/}
      {/*        /!*        <i className="fa fa-pinterest-p"></i>*!/*/}
      {/*        /!*      </a>*!/*/}
      {/*        /!*    </div>*!/*/}

      {/*        /!*    <div className="header__top__right__language">*!/*/}
      {/*        /!*      <img src={language} alt="" />*!/*/}
      {/*        /!*      <div>Tiếng Việt</div>*!/*/}
      {/*        /!*      <span className="arrow_carrot-down"></span>*!/*/}
      {/*        /!*      <ul>*!/*/}
      {/*        /!*        <li>*!/*/}
      {/*        /!*          <a href="/">English</a>*!/*/}
      {/*        /!*        </li>*!/*/}
      {/*        /!*      </ul>*!/*/}
      {/*        /!*    </div>*!/*/}

      {/*        /!*    <div className="header__top__right__auth">*!/*/}
      {/*        /!*      <Modal />*!/*/}
      {/*        /!*    </div>*!/*/}
      {/*        /!*  </div>*!/*/}
      {/*        /!*</div>*!/*/}
      {/*        <div className="col-12">*/}
      {/*          <p*/}
      {/*            style={{*/}
      {/*              textAlign: "center",*/}
      {/*              margin: "8px 0",*/}
      {/*              color: "#f4f1e0",*/}
      {/*            }}*/}
      {/*          >*/}
      {/*            Miễn phí vận chuyển cho đơn hàng từ 200.000 VNĐ*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</header>*/}
    </>
  );
};

export default Header;
