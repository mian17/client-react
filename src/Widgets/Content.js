import React, { Component } from "react";
import Hero from "../Modules/Hero/Hero";
import Categories from "../Modules/Categorires/Categories";
import Featured from "../Modules/Featured/Featured";
import Banner from "../Modules/Banner/Banner";
import Products from "../Modules/Products/Products";

class Content extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Categories />
        <Featured />
        <Banner />
        <Products />
      </div>
    );
  }
}

export default Content;
