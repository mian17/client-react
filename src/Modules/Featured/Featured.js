import featured_1 from "../../Assets/img/featured/feature-1.jpg";
import featured_2 from "../../Assets/img/featured/feature-2.jpg";
import featured_3 from "../../Assets/img/featured/feature-3.jpg";
import featured_4 from "../../Assets/img/featured/feature-4.jpg";
import featured_5 from "../../Assets/img/featured/feature-5.jpg";
import featured_6 from "../../Assets/img/featured/feature-6.jpg";
import featured_7 from "../../Assets/img/featured/feature-7.jpg";
import featured_8 from "../../Assets/img/featured/feature-8.jpg";

const Featured = () => {
  return (
    <section className="featured spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Các sản phẩm nổi bật</h2>
            </div>
            <div className="featured__controls">
              <ul>
                <li className="active" data-filter="*">
                  Tất cả
                </li>
                <li data-filter=".oranges">Cam</li>
                <li data-filter=".fresh-meat">Thịt tươi</li>
                <li data-filter=".vegetables">Rau củ</li>
                <li data-filter=".fastfood">Thức ăn nhanh</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row featured__filter">
          <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
            <div className="featured__item">
              <div
                className="featured__item__pic"
                style={{
                  background: `url("${featured_1}") no-repeat center`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="/">1</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
            <div className="featured__item">
              <div
                className="featured__item__pic"
                style={{
                  background: `url("${featured_2}") no-repeat center`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="/">2</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
            <div className="featured__item">
              <div
                className="featured__item__pic "
                style={{
                  background: `url("${featured_3}") no-repeat center`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="/">3</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
            <div className="featured__item">
              <div
                className="featured__item__pic "
                style={{
                  background: `url("${featured_4}") no-repeat center`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="/">4</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
            <div className="featured__item">
              <div
                className="featured__item__pic "
                style={{
                  background: `url("${featured_5}") no-repeat center`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="/">5</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
            <div className="featured__item">
              <div
                className="featured__item__pic "
                style={{
                  background: `url("${featured_6}") no-repeat center`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="/">6</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
            <div className="featured__item">
              <div
                className="featured__item__pic "
                style={{
                  background: `url("${featured_7}") no-repeat center`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="/">7</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
            <div className="featured__item">
              <div
                className="featured__item__pic "
                style={{
                  background: `url("${featured_8}") no-repeat center`,
                }}
              >
                <ul className="featured__item__pic__hover">
                  <li>
                    <a href="/">
                      <i className="fa fa-heart"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-retweet"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <i className="fa fa-shopping-cart"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="featured__item__text">
                <h6>
                  <a href="/">8</a>
                </h6>
                <h5>$30.00</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
