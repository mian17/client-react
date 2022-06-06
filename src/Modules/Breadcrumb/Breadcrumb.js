import React, { Component } from "react";
import breadcrumb from "../../Assets/img/breadcrumb.jpg";
class Breadcrumb extends Component {
  constructor(props) {
    super(props);

  }

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
                <h2>{this.props.pageName}</h2>
                <div className="breadcrumb__option">
                  {this.props.prevPages.map((page, index) => {
                    return <a key={index} href="/">{page}</a>
                  })}
                  <span>{this.props.curPage}</span>
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
