// React Imports
import * as React from "react";
import { useContext, useState } from "react";

import useMediaQuery from "@mui/material/useMediaQuery";

// Source imports
import classes from "./Hero.module.css";
import CartContext from "../../store/cart-context";
import CategoryDrawer from "./CategoryDrawer/CategoryDrawer";
import EmptyCart from "./EmptyCart/EmptyCart";
import { currencyFormatOptions } from "../../utils/utils";

// Jquery imports: Ready for deletion
import $ from "jquery";

// React Router Dom imports
import { NavLink } from "react-router-dom";

// Mui imports
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";

import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import Drawer from "@mui/material/Drawer";

import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";

import ProductSlide from "../Products/ProductSlide/ProductSlide";
import { useTheme } from "@mui/material/styles";
import Cart from "./Cart/Cart";
import Shop from "../../Pages/Shop";

const banners = [
  {
    id: 0,
    imgUrl: "./img/hero/banner-1.jpg",
    title: "Thêm sức khỏe, thêm niềm vui",
    subtitle: "Từ những sản phẩm hoàn toàn đến từ thiên nhiên",
    btnCtaContent: "Xem cửa hàng",
    link: "/",
  },
  {
    id: 1,
    imgUrl: "./img/hero/banner-2.jpg",
    title: "Dâu tây Đà Lạt các loại",
    subtitle: "Giàu Vitamin C, tăng sức đề kháng",
    btnCtaContent: "Mua ngay",
    link: "/",
  },
  {
    id: 2,
    imgUrl: "./img/hero/banner-3.jpg",
    title: "Trứng gà tươi V.Farm ",
    subtitle: "Đóng gói vệ sinh, an toàn, nhiều Omega-3",
    btnCtaContent: "Mua ngay",
    link: "/",
  },
];
const mostPopularCategories = [
  {
    id: 0,
    name: "Gạo, Mì, Nông sản",
  },
  {
    id: 1,
    name: "Trái cây",
  },
];
const categories = [
  { id: 0, name: "Trái Cây", imgUrl: "./img/categories/0-category-fruits.jpg" },
  {
    id: 1,
    name: "Thịt, Trứng",
    imgUrl: "./img/categories/1-category-meat.jpg",
  },
  {
    id: 2,
    name: "Cá, Thủy hải sản",
    imgUrl: "./img/categories/2-category-seafood.jpg",
  },
  {
    id: 3,
    name: "Rau củ quả",
    imgUrl: "./img/categories/3-category-vegetable.jpg",
  },
  {
    id: 4,
    name: "Thực phẩm Việt",
    imgUrl: "./img/categories/4-category-vietnamese-food.jpg",
  },
  {
    id: 5,
    name: "Sữa, Bơ, Phô mai",
    imgUrl: "./img/categories/5-category-dairy.jpg",
  },
  {
    id: 6,
    name: "Đông lạnh, mát",
    imgUrl: "./img/categories/6-category-frozen-food.jpg",
  },
  {
    id: 7,
    name: "Dầu ăn, Gia vị",
    imgUrl: "./img/categories/7-category-cooking-oil-spice.jpg",
  },
  {
    id: 8,
    name: "Gạo, Mì, Nông sản",
    imgUrl: "./img/categories/8-category-rice-noodle-agriculture-products.jpg",
  },
  {
    id: 9,
    name: "Đồ hộp, Đóng gói",
    imgUrl: "./img/categories/9-category-canned-foods.jpg",
  },
  {
    id: 10,
    name: "Bia, Đồ uống",
    imgUrl: "./img/categories/10-category-beer-drinks.jpg",
  },
  {
    id: 11,
    name: "Thực phẩm chay",
    imgUrl: "./img/categories/11-category-vegetarian-food.jpg",
  },
  {
    id: 12,
    name: "Dành cho trẻ em",
    imgUrl: "./img/categories/12-category-things-for-kids.jpg",
  },
  {
    id: 13,
    name: "Bánh kẹo, Giỏ quà",
    imgUrl: "./img/categories/13-category-sweets-snacks-gifts.jpg",
  },
  {
    id: 14,
    name: "Thức ăn, Đồ thú cưng",
    imgUrl: "./img/categories/14-category-food-things-for-pets.jpg",
  },
  {
    id: 15,
    name: "Chăm sóc cá nhân",
    imgUrl: "./img/categories/15-category-self-care.jpg",
  },
  {
    id: 16,
    name: "Chăm sóc nhà cửa",
    imgUrl: "./img/categories/16-category-home-appliance.jpg",
  },
];

const Hero = () => {
  const cartCtx = useContext(CartContext);

  // cartCtx operations
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.productQuantity;
  }, 0);
  // console.log(numberOfCartItems);
  // const totalMoneyInCart = new Intl.NumberFormat(
  //   "vi-VN",
  //   currencyFormatOptions
  // ).format(cartCtx.totalMoney);

  // Categories
  const [hideCategories, setHideCategories] = useState(true);
  const [hideCart, setHideCart] = useState(true);

  const toggleLeftDrawerHandler = () => {
    setHideCategories(!hideCategories);
    setTimeout(() => {
      setHeaderBackgroundIndex(undefined);
    }, 10);
  };

  const toggleRightDrawerHandler = () => {
    setHideCart(!hideCart);
  };

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 38 });

  const [headerBackgroundIndex, setHeaderBackgroundIndex] = useState(undefined);

  const changeHeaderBackgroundHandler = (e) => {
    setHeaderBackgroundIndex(+e.target.closest("a").dataset.category);
  };

  // Media Query for Close Menu Button
  const theme = useTheme();

  // Remove background changing effect on small devices
  // and later on other effects too, such as hovering link to change text's color
  const changeCartToFullWidth = useMediaQuery(theme.breakpoints.up("md"));
  const changeMenuButton = useMediaQuery(theme.breakpoints.up("md"));

  const smallScreenMatch = useMediaQuery(theme.breakpoints.up("sm"));
  const extraSmallScreenMatch = useMediaQuery(theme.breakpoints.up("xs"));

  // Conditions to trigger
  const notTriggeredCase =
    (hideCategories && !trigger) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch &&
      !trigger) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch &&
      !trigger);

  const triggeredCase =
    (!trigger && hideCategories) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch &&
      trigger) ||
    ((headerBackgroundIndex || headerBackgroundIndex === 0) &&
      smallScreenMatch &&
      trigger);

  // const [linkInDrawerHovered, setLinkInDrawerHovered] = useState(false);

  return (
    <section className="hero">
      <Box>
        <AppBar
          sx={{
            backgroundColor: !trigger ? "transparent" : "#f4f1e0",
            color: hideCategories && !trigger ? "#f4f1e0" : "#321e1e",
            transition: "all 0.3s",
          }}
          // elevation={!trigger ? 0 : 2}
          elevation={0}
          position="fixed"
        >
          <CategoryDrawer
            hideCategories={hideCategories}
            getCategoryId={changeHeaderBackgroundHandler}
            headerBackgroundIndex={headerBackgroundIndex}
            categories={categories}
            changeLinkColorCondition={notTriggeredCase || triggeredCase}
          />
          <Box sx={{ padding: 0 }} className="header__top">
            <div>
              <Typography
                sx={{
                  textAlign: "center",
                  margin: "8px 0",
                  color: "#f4f1e0",
                }}
              >
                Miễn phí vận chuyển cho đơn hàng từ 200.000 VNĐ
              </Typography>
            </div>
          </Box>

          <Box className="container-fluid">
            <Box className="row align-items-center">
              <div className="col-lg-3 col-2">
                <nav className="header__menu">
                  {changeMenuButton ? (
                    <Button
                      variant="contained"
                      size="large"
                      color="customTransparent"
                      onClick={toggleLeftDrawerHandler}
                      sx={{
                        textTransform: "capitalize",
                        minWidth: 140,
                        backgroundColor:
                          notTriggeredCase || triggeredCase
                            ? "transparent"
                            : "#f4f1e0",
                        color:
                          notTriggeredCase || triggeredCase
                            ? "#f4f1e0"
                            : "#321e1e",
                        transition: "all 0.3s",
                      }}
                    >
                      {hideCategories ? "Danh mục" : "Đóng menu"}
                    </Button>
                  ) : (
                    <IconButton
                      color="customTransparent"
                      onClick={toggleLeftDrawerHandler}
                      sx={{
                        textTransform: "capitalize",
                        // minWidth: 140,
                        // backgroundColor:
                        //   notTriggeredCase || triggeredCase
                        //     ? "transparent"
                        //     : "#f4f1e0",
                        color:
                          notTriggeredCase || triggeredCase
                            ? "#f4f1e0"
                            : "#321e1e",
                        transition: "all 0.3s",
                      }}
                      size={smallScreenMatch ? "large" : "medium"}
                    >
                      <MenuIcon />
                    </IconButton>
                  )}
                </nav>
              </div>
              <div className="col-lg-6 col-8">
                <div className="header__logo">
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    <Typography
                      component="h1"
                      sx={{
                        borderBottom: `2px solid ${
                          notTriggeredCase || triggeredCase
                            ? "#f4f1e0"
                            : "#321e1e"
                        }`,
                        color:
                          notTriggeredCase || triggeredCase
                            ? "#f4f1e0"
                            : "#321e1e",
                        fontSize: changeMenuButton
                          ? 40
                          : extraSmallScreenMatch
                          ? 28
                          : 36,
                        mr: 2,
                        transition: "all 0.3s",
                      }}
                    >
                      Wieder_ Markt
                    </Typography>
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-3 col-2">
                <div className="header__cart">
                  <ul>
                    <li>
                      {/*<NavLink to="/cart">*/}
                      <IconButton
                        color="customTransparent"
                        size={smallScreenMatch ? "large" : "medium"}
                        sx={{
                          color:
                            notTriggeredCase || triggeredCase
                              ? "#f4f1e0"
                              : "#321e1e",
                          transition: "all 0.3s",
                        }}
                        onClick={toggleRightDrawerHandler}
                      >
                        <Badge
                          badgeContent={numberOfCartItems}
                          color="customBadge"
                          showZero
                        >
                          <ShoppingCartIcon />
                        </Badge>
                      </IconButton>
                    </li>
                  </ul>
                </div>
                <Drawer
                  anchor="right"
                  open={!hideCart}
                  onClose={toggleRightDrawerHandler}
                  PaperProps={{
                    sx: {
                      width: changeCartToFullWidth ? "54%" : "100%",
                      backgroundColor: "#f4f1e0",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "100vh",
                    },
                  }}
                  SlideProps={{ direction: "left" }}
                  disableScrollLock
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  <Box
                    p={!numberOfCartItems ? 2 : 0}
                    sx={{ height: "100%", width: "100%", py: 1 }}
                  >
                    <IconButton
                      onClick={toggleRightDrawerHandler}
                      size="large"
                      color="primary"
                      sx={{ position: "absolute", right: 20, top: "78px" }}
                    >
                      <CloseIcon />
                    </IconButton>

                    {!numberOfCartItems ? (
                      <EmptyCart
                        mostPopularCategories={mostPopularCategories}
                      />
                    ) : (
                      <Cart />
                    )}
                  </Box>
                </Drawer>
              </div>
            </Box>
          </Box>
        </AppBar>

        <Swiper
          slidesPerView={1}
          modules={[Pagination]}
          loop
          pagination={{
            clickable: true,
            type: "bullets",
            bulletActiveClass: `swiper-pagination-bullet-active ${classes["pagination-active"]}`,
            bulletClass: `swiper-pagination-bullet ${classes["pagination-normal"]}`,
          }}
          grabCursor
        >
          {banners.map((banner, index) => {
            return (
              <SwiperSlide key={index}>
                <ProductSlide
                  imgUrl={banner.imgUrl}
                  title={banner.title}
                  subtitle={banner.subtitle}
                  btnCTAContent={banner.btnCtaContent}
                  link={banner.link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      {/*<Shop />*/}
    </section>
  );
};

export default Hero;
