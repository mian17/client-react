import React, { Component } from "react";
import LatestProducts from "./LatestProducts/LatestProducts";

class Products extends Component {
  render() {
    return (
      <section className="latest-product spad">
        <div className="container">
          <div className="row">
            <LatestProducts />
          </div>
        </div>
      </section>
    );
  }
}

export default Products;
