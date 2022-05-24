import hero from "../../Assets/img/hero/banner.jpg";
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
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Fresh Meat
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Vegetables
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Fruit & Nut Gifts
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Fresh Berries
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Ocean Foods
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Butter & Eggs
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Fastfood
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Fresh Onion
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Papayaya & Crisps
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Oatmeal
                    </a>
                  </li>
                  <li>
                    <a href="/home/night/WebstormProjects/client-site-ogani/public">
                      Fresh Bananas
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="src/Modules/Hero/Hero#">
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
                  <a
                    href="/home/night/WebstormProjects/client-site-ogani/public"
                    className="primary-btn"
                  >
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
