import React from "react";
import Hero from "../Modules/Hero/Hero";
import Categories from "../Modules/Categorires/Categories";
import Featured from "../Modules/Featured/Featured";
import Banner from "../Modules/Banner/Banner";
import Products from "../Modules/Products/Products";
import Blog from "../Modules/Blog/Blog";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <Featured />
      <Banner />
      <Products />
      <Blog />
    </div>
  );
};

export default Homepage;
