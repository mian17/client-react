import React, { Component } from "react";

class ProductPagination extends Component {
  render() {
    return (
      <div className="product__pagination">
        <a href="/">1</a>
        <a href="/">2</a>
        <a href="/">3</a>
        <a href="/">
          <i className="fa fa-long-arrow-right"></i>
        </a>
      </div>
    );
  }
}

export default ProductPagination;
