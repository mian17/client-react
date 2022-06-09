import hero from "../../Assets/img/hero/banner.jpg";
import $ from "jquery";

function toggleSlide() {
  $(".hero__categories ul").slideToggle(400);
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="hero__categories">
              <div className="hero__categories__all" onClick={toggleSlide}>
                <i className="fa fa-bars"></i>
                <span>Danh mục</span>
              </div>
              <ul>
                <li>
                  <a href="/">Thịt tươi</a>
                </li>
                <li>
                  <a href="/">Rau củ</a>
                </li>
                <li>
                  <a href="/">Trái cây</a>
                </li>

                <li>
                  <a href="/">Thủy sản</a>
                </li>
                <li>
                  <a href="/">Bơ và Trứng</a>
                </li>
                <li>
                  <a href="/">Thức ăn nhanh</a>
                </li>
                <li>
                  <a href="/">Yến mạch </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="hero__search">
              <div className="hero__search__form">
                <form action="src/Modules/Hero/Hero#">
                  <div className="hero__search__categories">
                    Danh mục
                    <span className="arrow_carrot-down"></span>
                  </div>
                  <input type="text" placeholder="Tìm kiếm sản phẩm" />
                  <button type="submit" className="site-btn">
                    TÌM KIẾM
                  </button>
                </form>
              </div>
              <div className="hero__search__phone">
                <div className="hero__search__phone__icon">
                  <i className="fa fa-phone"></i>
                </div>
                <div className="hero__search__phone__text">
                  <h5>123-456-7890</h5>
                  <span>Hỗ trợ 24/7</span>
                </div>
              </div>
            </div>
            <div
              className="hero__item"
              style={{ backgroundImage: "url(" + hero + ")" }}
            >
              <div className="hero__text">
                <span>Rau củ quả tươi</span>
                <h2>
                  Rau củ <br />
                  100% Organic
                </h2>
                <p>Chúng tôi có hỗ trợ miễn phí vận chuyển</p>
                <a href="/" className="primary-btn">
                  MUA NGAY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
