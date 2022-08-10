import React from "react";
import Hero from "../Modules/Hero/Hero";
import Categories from "../Modules/Categorires/Categories";
import Featured from "../Modules/Featured/Featured";
import Banner from "../Modules/Banner/Banner";
import Products from "../Modules/Product/Products";
import Blog from "../Modules/Blog/Blog";
import SpotlightProduct from "../Modules/Product/SpotlightProduct/SpotlightProduct";
import FavoriteProducts from "../Modules/Product/FavoriteProducts/FavoriteProducts";
import Promotion from "../Modules/Promotion/Promotion";
import ProductListing from "../Modules/Product/ProductListing/ProductListing";
import MessageBanner from "../Modules/Banner/MessageBanner";
import Header from "../Widgets/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      <SpotlightProduct />
      <FavoriteProducts />
      <Promotion />
      <ProductListing />
      <Categories />
      <MessageBanner />
    </>
  );
};

export default Homepage;
