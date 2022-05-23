import { Component } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

class Categories extends Component {
  render() {
    return (
      <section className="categories">
        <div className="container">
          <div className="row">
            <Swiper
              slidesPerView={3}
              className="categories__slider owl-carousel"
            >
              <div className="col-lg-3">
                <SwiperSlide
                  className="categories__item set-bg"
                  data-setbg="./public_resources/img/categories/cat-1.jpg"
                >
                  <h5>
                    <a href="/">Fresh Fruit</a>
                  </h5>
                </SwiperSlide>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="./public_resources/img/categories/cat-2.jpg"
                >
                  <h5>
                    <a href="/">Dried Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="./public_resources/img/categories/cat-3.jpg"
                >
                  <h5>
                    <a href="/">Vegetables</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="./public_resources/img/categories/cat-4.jpg"
                >
                  <h5>
                    <a href="/">Fruit Drinks</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="./public_resources/img/categories/cat-5.jpg"
                >
                  <h5>
                    <a href="/">Fresh Meat</a>
                  </h5>
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
}

export default Categories;
