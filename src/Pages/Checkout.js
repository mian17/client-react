import Breadcrumb from "../Modules/Breadcrumb/Breadcrumb";

const Checkout = () => {
  return (
    <>
      <Breadcrumb
        pageName="Thanh toán"
        prevPages={["Trang chủ"]}
        curPage="Thanh toán"
      />
      <section className="checkout spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h6>
                <span className="icon_tag_alt"></span> Have a coupon?{" "}
                <a href="/">Click here</a> to enter your code
              </h6>
            </div>
          </div>
          <div className="checkout__form">
            <h4>Thông tin thanh toán</h4>
            <form action="#">
              <div className="row">
                <div className="col-lg-8 col-md-6">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Họ<span>*</span>
                        </p>
                        <input
                          type="text"
                          placeholder="Nhập họ của người nhận"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Tên<span>*</span>
                        </p>
                        <input
                          type="text"
                          placeholder="Nhập tên của người nhận"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Quốc gia<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Nhập quốc gia nơi bạn đang sinh sống"
                    />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Địa chỉ nhận hàng<span>*</span>
                    </p>
                    <input
                      type="text"
                      placeholder="Nhập số nhà, tên đường... "
                      className="checkout__input__add"
                    />
                    <input
                      type="text"
                      placeholder="Tên cơ quan, chung cư,... (tùy chọn)"
                    />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Tỉnh/ Thành phố<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Quận/ Huyện<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="checkout__input">
                    <p>
                      Phường/ Xã<span>*</span>
                    </p>
                    <input type="text" />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Số điện thoại<span>*</span>
                        </p>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="checkout__input">
                        <p>
                          Email<span>*</span>
                        </p>
                        <input type="email" />
                      </div>
                    </div>
                  </div>
                  <div className="checkout__input__checkbox">
                    <label htmlFor="acc">
                      Đăng ký tài khoản (nếu bạn chưa có)
                      <input type="checkbox" id="acc" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <p>
                    Để tạo tài khoản, bạn vui lòng nhập thông tin được yêu cầu
                    bên dưới. Nếu bạn đã có tài khoản, hãy lên đầu trang nhấn
                    nút đăng nhập.
                  </p>
                  <div className="checkout__input">
                    <p>
                      Nhập mật khẩu để tạo tài khoản mới<span>*</span>
                    </p>
                    <input type="password" />
                  </div>
                  <div className="checkout__input__checkbox">
                    <label htmlFor="diff-acc">
                      Vận chuyển đến địa chỉ khác
                      <input type="checkbox" id="diff-acc" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                  <div className="checkout__input">
                    <p>
                      Ghi chú đơn hàng<span>*</span>
                    </p>
                    <input type="text" placeholder="Lưu ý cho người bán..." />
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="checkout__order">
                    <h4>Đơn hàng</h4>
                    <div className="checkout__order__products">
                      Sản phẩm <span>Thành tiền</span>
                    </div>
                    <ul>
                      <li>
                        Vegetable’s Package <span>$75.99</span>
                      </li>
                      <li>
                        Fresh Vegetable <span>$151.99</span>
                      </li>
                      <li>
                        Organic Bananas <span>$53.99</span>
                      </li>
                    </ul>
                    <div className="checkout__order__subtotal">
                      Tạm tính <span>$750.99</span>
                    </div>
                    <div className="checkout__order__total">
                      Tổng cộng <span>$750.99</span>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="acc-or">
                        Tạo tài khoản
                        <input type="checkbox" id="acc-or" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adip elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="payment">
                        Check Payment
                        <input type="checkbox" id="payment" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <div className="checkout__input__checkbox">
                      <label htmlFor="paypal">
                        Paypal
                        <input type="checkbox" id="paypal" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                    <button type="submit" className="site-btn">
                      ĐẶT HÀNG
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Checkout;
