import React, { Component } from "react";
import LatestProducts from "./LatestProducts/LatestProducts";
import TopRatedProducts from "./TopRatedProducts/TopRatedProducts";
import ReviewProducts from "./ReviewProducts/ReviewProducts";

class Products extends Component {
  render() {
    return (
      <section className="latest-product spad">
        <div className="container">
          <div className="row">
            <LatestProducts />
            <TopRatedProducts />
            <ReviewProducts />
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
