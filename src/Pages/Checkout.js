import Breadcrumb from "../Modules/Breadcrumb/Breadcrumb";

import classes from "./Checkout.module.css";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// lastName: "",
//     firstName: "",
//     address: "",
//     buildingName: "",
//     provinceOrCity: "",
//     district: "",
//     wardOrCommune: "",
//     phoneNumber: "",
//     email: "",
//     orderNotes: "",
const OrderSchema = Yup.object().shape({
  firstName: Yup.string()
    .trim()
    .min(2, "Tên của bạn cần dài hơn 2 ký tự.")
    .max(50, "Tên của bạn cần ít hơn 20 ký tự")
    .required("Bạn cần điền tên của bạn."),
  lastName: Yup.string()
    .trim()
    .min(2, "Họ của bạn cần dài hơn 2 ký tự.")
    .max(50, "Họ của bạn cần ngắn hơn 50 ký tự.")
    .required("Bạn cần điền họ của bạn."),
  address: Yup.string()
    .trim()
    .min(10, "Địa chỉ của bạn cần dài hơn 10 ký tự.")
    .max(100, "Họ của bạn cần ngắn hơn 100 ký tự.")
    .required("Bạn cần điền địa chỉ của bạn."),
  provinceOrCity: Yup.string()
    .trim()
    .min(2, "Tên tỉnh hoặc thành phố của bạn cần dài hơn 2 ký tự.")
    .max(50, "Họ của bạn cần ngắn hơn 50 ký tự.")
    .required("Bạn cần điền tỉnh hoặc thành phố, nơi bạn đang sinh sống."),
  district: Yup.string()
    .trim()
    .min(5, "Tên quận hoặc huyện của bạn cần dài hơn 5 ký tự.")
    .max(50, "Tên quận hoặc huyện của bạn cần ngắn hơn 50 ký tự.")
    .required("Bạn cần điền quận hoặc huyện, nơi bạn đang sinh sống."),
  wardOrCommune: Yup.string()
    .trim()
    .min(5, "Tên phường hoặc xã của bạn cần dài hơn 5 ký tự.")
    .max(50, "Tên phường hoặc xã của bạn cần ngắn hơn 50 ký tự.")
    .required("Bạn cần điền tên phường hoặc xã, nơi bạn đang sinh sống."),
  phoneNumber: Yup.string()
    .trim()
    .matches(/^\d*$/, "Số điện thoại phải chỉ có chữ số.")
    .min(8, "Số điện thoại của bạn cần dài hơn 8 ký tự.")
    .max(15, "Số điện thoại của bạn cần ngắn hơn 15 ký tự.")
    .required("Bạn cần điền số điện thoại mà bạn đang sử dụng."),
  email: Yup.string()
    .trim()
    .lowercase()
    .email("Email chưa phù hợp, bạn vui lòng kiểm tra lại.")
    .required("Bạn cần điền email mà bạn đang sử dụng."),
  orderNotes: Yup.string()
    .trim()
    .min(0)
    .max(100, "Lời ghi chú của bạn cần ngắn hơn 100 ký tự."),
});

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

          <h4 className={classes["form-title"]}>Thông tin thanh toán</h4>

          <Formik
            initialValues={{
              lastName: "",
              firstName: "",
              address: "",
              provinceOrCity: "",
              district: "",
              wardOrCommune: "",
              phoneNumber: "",
              email: "",
              orderNotes: "",
            }}
            validationSchema={OrderSchema}
            onSubmit={(values) => console.log(values)}
            className="checkout__form"
          >
            {({ errors, touched, isValid }) => (
              <Form className="checkout__form">
                <div className="row">
                  <div className="col-lg-8 col-md-6">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <label htmlFor="last-name">
                            Họ<span>*</span>
                          </label>
                          <Field
                            id="last-name"
                            name="lastName"
                            type="text"
                            placeholder="Nhập họ của người nhận"
                            className={
                              errors.lastName && touched.lastName
                                ? classes.invalid
                                : ""
                            }
                          />
                          {errors.lastName && touched.lastName ? (
                            <div className={classes["error-message"]}>
                              {errors.lastName}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <label htmlFor="first-name">
                            Tên<span>*</span>
                          </label>
                          <Field
                            id="first-name"
                            name="firstName"
                            type="text"
                            placeholder="Nhập tên của người nhận"
                            className={
                              errors.firstName && touched.firstName
                                ? classes.invalid
                                : ""
                            }
                          />
                          {errors.firstName && touched.firstName ? (
                            <div className={classes["error-message"]}>
                              {errors.firstName}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    {/*<div className="checkout__input">*/}
                    {/*  <p>*/}
                    {/*    Quốc gia<span>*</span>*/}
                    {/*  </p>*/}
                    {/*  <input*/}
                    {/*    type="text"*/}
                    {/*    placeholder="Nhập quốc gia nơi bạn đang sinh sống"*/}
                    {/*  />*/}
                    {/*</div>*/}
                    <div className="checkout__input">
                      <label htmlFor="address">
                        Địa chỉ nhận hàng<span>*</span>
                      </label>
                      <Field
                        type="text"
                        id="address"
                        name="address"
                        placeholder="Nhập số nhà, tên đường... "
                        className={
                          errors.address && touched.address
                            ? classes.invalid
                            : ""
                        }
                      />
                      {errors.address && touched.address ? (
                        <div className={classes["error-message"]}>
                          {errors.address}
                        </div>
                      ) : null}
                      {/*<Field*/}
                      {/*  type="text"*/}
                      {/*  placeholder="Tên cơ quan, chung cư,... (tùy chọn)"*/}
                      {/*/>*/}
                    </div>
                    <div className="checkout__input">
                      <label htmlFor="province-or-city">
                        Tỉnh/ Thành phố<span>*</span>
                      </label>
                      <Field
                        id="province-or-city"
                        name="provinceOrCity"
                        type="text"
                        className={
                          errors.provinceOrCity && touched.provinceOrCity
                            ? classes.invalid
                            : ""
                        }
                        placeholder="Nhập tỉnh, thành phố,..."
                      />
                      {errors.provinceOrCity && touched.provinceOrCity ? (
                        <div className={classes["error-message"]}>
                          {errors.provinceOrCity}
                        </div>
                      ) : null}
                    </div>
                    <div className="checkout__input">
                      <label htmlFor="district">
                        Quận/ Huyện<span>*</span>
                      </label>
                      <Field
                        id="district"
                        name="district"
                        type="text"
                        className={
                          errors.district && touched.district
                            ? classes.invalid
                            : ""
                        }
                        placeholder="Nhập quận, huyện,..."
                      />
                      {errors.district && touched.district ? (
                        <div className={classes["error-message"]}>
                          {errors.district}
                        </div>
                      ) : null}
                    </div>
                    <div className="checkout__input">
                      <label htmlFor="ward-or-commune">
                        Phường/ Xã<span>*</span>
                      </label>
                      <Field
                        id="ward-or-commune"
                        name="wardOrCommune"
                        type="text"
                        className={
                          errors.wardOrCommune && touched.wardOrCommune
                            ? classes.invalid
                            : ""
                        }
                        placeholder="Nhập phường, xã,..."
                      />
                      {errors.wardOrCommune && touched.wardOrCommune ? (
                        <div className={classes["error-message"]}>
                          {errors.wardOrCommune}
                        </div>
                      ) : null}
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <label htmlFor="phone-number">
                            Số điện thoại<span>*</span>
                          </label>
                          <Field
                            id="phone-number"
                            name="phoneNumber"
                            type="text"
                            className={
                              errors.phoneNumber && touched.phoneNumber
                                ? classes.invalid
                                : ""
                            }
                          />
                          {errors.phoneNumber && touched.phoneNumber ? (
                            <div className={classes["error-message"]}>
                              {errors.phoneNumber}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="checkout__input">
                          <label htmlFor="email">
                            Email<span>*</span>
                          </label>
                          <Field
                            id="email"
                            name="email"
                            type="email"
                            className={
                              errors.email && touched.email
                                ? classes.invalid
                                : ""
                            }
                          />
                          {errors.email && touched.email ? (
                            <div className={classes["error-message"]}>
                              {errors.email}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    {/*<div className="checkout__input__checkbox">*/}
                    {/*  <label htmlFor="acc">*/}
                    {/*    Đăng ký tài khoản (nếu bạn chưa có)*/}
                    {/*    <input type="checkbox" id="acc" />*/}
                    {/*    <span className="checkmark"></span>*/}
                    {/*  </label>*/}
                    {/*</div>*/}
                    {/*<p>*/}
                    {/*  Để tạo tài khoản, bạn vui lòng nhập thông tin được yêu cầu*/}
                    {/*  bên dưới. Nếu bạn đã có tài khoản, hãy lên đầu trang nhấn*/}
                    {/*  nút đăng nhập.*/}
                    {/*</p>*/}
                    {/*<div className="checkout__input">*/}
                    {/*  <p>*/}
                    {/*    Nhập mật khẩu để tạo tài khoản mới<span>*</span>*/}
                    {/*  </p>*/}
                    {/*  <input type="password" />*/}
                    {/*</div>*/}
                    {/*<div className="checkout__input__checkbox">*/}
                    {/*  <label htmlFor="diff-acc">*/}
                    {/*    Vận chuyển đến địa chỉ khác*/}
                    {/*    <input type="checkbox" id="diff-acc" />*/}
                    {/*    <span className="checkmark"></span>*/}
                    {/*  </label>*/}
                    {/*</div>*/}
                    <div className="checkout__input">
                      <label htmlFor="order-notes">Ghi chú đơn hàng</label>
                      <Field
                        id="order-notes"
                        name="orderNotes"
                        type="text"
                        placeholder="Lưu ý cho người bán (dài nhất 100 ký tự)..."
                        className={
                          errors.orderNotes && touched.orderNotes
                            ? classes.invalid
                            : ""
                        }
                      />
                      {errors.orderNotes && touched.orderNotes ? (
                        <div className={classes["error-message"]}>
                          {errors.orderNotes}
                        </div>
                      ) : null}
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
                        Lorem ipsum dolor sit amet, consectetur adip elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
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
                      <button
                        type="submit"
                        className="btn site-btn"
                        disabled={!isValid}
                      >
                        ĐẶT HÀNG
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};
export default Checkout;
