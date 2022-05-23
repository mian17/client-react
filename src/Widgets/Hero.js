import hero from "../Assets/img/hero/banner.jpg";
import { Component } from "react";
import $ from "jquery";

function toggleSlide() {
  $(".hero__categories ul").slideToggle(400);
}

class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all" onClick={toggleSlide}>
                  <i className="fa fa-bars"></i>
                  <span>All Departments</span>
                </div>
                <ul>
                  <li>
                    <a href="/">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="/">Vegetables</a>
                  </li>
                  <li>
                    <a href="/">Fruit & Nut Gifts</a>
                  </li>
                  <li>
                    <a href="/">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="/">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="/">Butter & Eggs</a>
                  </li>
                  <li>
                    <a href="/">Fastfood</a>
                  </li>
                  <li>
                    <a href="/">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="/">Papayaya & Crisps</a>
                  </li>
                  <li>
                    <a href="/">Oatmeal</a>
                  </li>
                  <li>
                    <a href="/">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                    />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>704-768-7449</h5>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
              <div
                className="hero__item"
                style={{ backgroundImage: "url(" + hero + ")" }}
              >
                <div className="hero__text">
                  <span>FRESH FRUIT</span>
                  <h2>
                    Vegetable <br />
                    100% Organic
                  </h2>
                  <p>Free Pickup and Delivery Available</p>
                  <a href="/" className="primary-btn">
                    SHOP NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
