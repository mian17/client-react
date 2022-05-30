import React, { Component } from "react";
import breadcrumb from "../../Assets/img/breadcrumb.jpg";
class Breadcrumb extends Component {
  render() {
    return (
      <section
        className="breadcrumb-section"
        style={{
          background: `url("${breadcrumb}") no-repeat center`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Cửa hàng Ogani</h2>
                <div className="breadcrumb__option">
                  <a href="/">Trang chủ</a>
                  <span>Mua sắm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumb;
