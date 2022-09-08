import React from "react";
import Hero from "../Modules/Hero/Hero";
import Categories from "../Modules/Categorires/Categories";
import Promotion from "../Modules/Promotion/Promotion";
import MessageBanner from "../Modules/Banner/MessageBanner";
import Header from "../Widgets/Header";
import Footer from "../Widgets/Footer";
import SpotlightProduct from "../Modules/Product/SpotlightProduct/SpotlightProduct";
import ProductListing from "../Modules/Product/ProductListing/ProductListing";

const Homepage = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <SpotlightProduct/>
            {/*<FavoriteProducts />*/}
            <Promotion/>
            <ProductListing/>
            <Categories/>
            <MessageBanner/>
            <Footer/>
    </>
  );
};

export default Homepage;
