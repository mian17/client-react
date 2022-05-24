import React, { Component } from "react";
import Hero from "../Modules/Hero/Hero";
import Categories from "../Modules/Categorires/Categories";
import Featured from "../Modules/Featured/Featured";

class Content extends Component {
  render() {
    return (
      <div>
        <Hero />
        <Categories />
        <Featured />
      </div>
    );
  }
}

export default Content;
