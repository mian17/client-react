import React from "react";
import logo from "../Assets/img/logo.png";
import payment_item from "../Assets/img/payment-item.png";

const Footer = () => {
  return (
    <footer className="footer spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__about__logo">
                <a href="/">
                  <img src={logo} alt="" />
                </a>
              </div>
              <ul>
                <li>Địa chỉ: Quận 1, TP. HCM</li>
                <li>Phone: 123-456-7890</li>
                <li>Email: info@ogani.com</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 offset-lg-1 col-md-6 col-sm-6">
            <div className="footer__widget">
              <h6>Các đường dẫn hữu ích</h6>
              <ul>
                <li>
                  <a href="/">Về chúng tôi</a>
                </li>
                <li>
                  <a href="/">Về cửa hàng chúng tôi</a>
                </li>
                <li>
                  <a href="/">Mua sắm an toàn</a>
                </li>
                <li>
                  <a href="/">Thông tin vận chuyển</a>
                </li>
                <li>
                  <a href="/">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="/">Sơ đồ website</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="/">Dịch vụ</a>
                </li>
                <li>
                  <a href="/">Dự án</a>
                </li>
                <li>
                  <a href="/">Liên hệ</a>
                </li>
                <li>
                  <a href="/">Đổi mới sáng tạo</a>
                </li>
                <li>
                  <a href="/">Điều trần</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-12">
            <div className="footer__widget">
              <h6>Hãy Tham gia Hộp thư của Chúng tôi</h6>
              <p>
                Nhận tin báo email về các sản phẩm mới nhất và phiếu giảm gía
                (nếu có).
              </p>
              <form action="#">
                <input type="text" placeholder="Email của bạn" />
                <button type="submit" className="site-btn">
                  Đăng ký
                </button>
              </form>
              <div className="footer__widget__social">
                <a href="/">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="/">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fa fa-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="footer__copyright">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>
                  All rights reserved | <b>TK</b>
                </p>
              </div>
              <div className="footer__copyright__payment">
                <img src={payment_item} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
