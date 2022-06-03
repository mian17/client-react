import React, { Component } from "react";
import Breadcrumb from "../Modules/Breadcrumb/Breadcrumb";
import Sidebar from "../Modules/Sidebar/Sidebar";
import DiscountedProducts from "../Modules/Products/DiscountedProducts/DiscountedProducts";
import FilterProductItems from "../Modules/Products/FilterProductItems/FilterProductItems";
import ProductItems from "../Modules/Products/ProductItems/ProductItems";
import ProductPagination from "../Modules/Products/ProductPagination/ProductPagination";

// TODO: FIX SMALL FLICKERING WHEN OPENING MUI'S SELECT

class Shop extends Component {
  render() {
    return (
      <div>
        <Breadcrumb />
        <section className="product spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-5">
                <Sidebar />
              </div>
              <div className="col-lg-9 col-md-7">
                <DiscountedProducts />
                <FilterProductItems />
                <ProductItems />
                <ProductPagination />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Shop;
