import React, { Component } from "react";

class FilterProductItems extends Component {
  render() {
    return (
      <div className="filter__item">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="filter__sort">
              <span>Sort By</span>
              <select>
                <option value="0">Default</option>
                <option value="0">Default</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div className="filter__found">
              <h6>
                <span>16</span> Products found
              </h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-3">
            <div className="filter__option">
              <span className="icon_grid-2x2"></span>
              <span className="icon_ul"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FilterProductItems;
