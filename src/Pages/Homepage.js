import React from "react";
import Hero from "../Modules/Hero/Hero";
import Categories from "../Modules/Categorires/Categories";
import Promotion from "../Modules/Promotion/Promotion";
import MessageBanner from "../Modules/Banner/MessageBanner";
import Header from "../Widgets/Header";

const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/*<SpotlightProduct />*/}
      {/*<FavoriteProducts />*/}
      <Promotion />
      {/*<ProductListing />*/}
      <Categories />
      <MessageBanner />
    </>
  );
};

export default Homepage;
