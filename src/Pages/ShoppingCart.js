import { useState } from "react";
import Breadcrumb from "../Modules/Breadcrumb/Breadcrumb";

import { currentFormatOptions } from "../utils/utils";

import cart_1 from "../Assets/img/cart/cart-1.jpg";
import cart_2 from "../Assets/img/cart/cart-2.jpg";
import cart_3 from "../Assets/img/cart/cart-3.jpg";
import ProductInCart from "../Modules/ProductInCart/ProductInCart";

const ShoppingCart = () => {
  const [productsInCart, setProductsInCart] = useState([
    {
      cartId: 0,
      productImgUrl: cart_1,
      productName: "Vegetable’s Package",
      productPrice: 55000,
      productQuantity: 1,
      productTotalPrice: 0,
    },
    {
      cartId: 1,
      productImgUrl: cart_2,
      productName: "Fresh Garden Vegetable",
      productPrice: 39000,
      productQuantity: 1,
      productTotalPrice: 0,
    },
    {
      cartId: 2,
      productImgUrl: cart_3,
      productName: "Organic Bananas",
      productPrice: 68000,
      productQuantity: 1,
      productTotalPrice: 0,
    },
  ]);
  const editProductInCartQuantity = (e) => {
    setProductsInCart((prevState) => {
      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i].cartId === +e.target.closest("tr").dataset.cartId) {
          prevState[i].productQuantity += e.target.value;
        }
      }
      console.log(prevState);
      return prevState;
    });
  };

  return (
    <>
      <Breadcrumb
        pageName="Giỏ hàng"
        prevPages={["Trang chủ"]}
        curPage="Giỏ hàng"
      />
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th className="shoping__product">Các sản phẩm</th>
                      <th>Đơn giá</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsInCart.map((product, index) => {
                      return (
                        <ProductInCart
                          key={index}
                          cartId={index}
                          productImgUrl={product.productImgUrl}
                          productName={product.productName}
                          productPrice={product.productPrice}
                          productQuantity={product.productQuantity}
                          productTotalPrice={
                            product.productQuantity * product.productPrice
                          }
                          editProductInCartQuantity={editProductInCartQuantity}
                        />
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="shoping__cart__btns">
                <a href="/" className="primary-btn cart-btn">
                  TIẾP TỤC MUA SẮM
                </a>
                <a href="/" className="primary-btn cart-btn cart-btn-right">
                  <span className="icon_loading"></span>
                  CẬP NHẬT GIỎ HÀNG
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__continue">
                <div className="shoping__discount">
                  <h5>MÃ GIẢM GIÁ</h5>
                  <form action="">
                    <input type="text" placeholder="Enter your coupon code" />
                    <button type="submit" className="site-btn">
                      NHẬP
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="shoping__checkout">
                <h5>TỔNG GIÁ TRỊ GIỎ HÀNG</h5>
                <ul>
                  <li>
                    Tạm tính<span>$454.98</span>
                  </li>
                  <li>
                    Tổng giá trị <span>$454.98</span>
                  </li>
                </ul>
                <a href="/" className="primary-btn">
                  THANH TOÁN
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ShoppingCart;
