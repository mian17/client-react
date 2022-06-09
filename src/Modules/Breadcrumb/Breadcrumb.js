import React from "react";
import breadcrumb from "../../Assets/img/breadcrumb.jpg";

const Breadcrumb = (props) => {
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
              <h2>{props.pageName}</h2>
              <div className="breadcrumb__option">
                {props.prevPages.map((page, index) => {
                  return (
                    <a key={index} href="/">
                      {page}
                    </a>
                  );
                })}
                <span>{props.curPage}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
