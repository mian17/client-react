// React library imports
import {useContext} from "react";
import {ConfirmProvider} from "material-ui-confirm";

// Component imports
import ProductInCart from "../Modules/ProductInCart/ProductInCart";

// Context import
import CartContext from "../store/cart-context";

// Utilities import
import {currencyFormatOptions} from "../utils/utils";

const ShoppingCart = () => {
  const cartCtx = useContext(CartContext);
  // console.log(cartCtx.items);
  const totalCartMoney = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(cartCtx.totalMoney);

  // TODO: ADD DISCOUNT PROCESS
  const finalTotalCartMoney = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(cartCtx.totalMoney);

  return (
    <>
      <section className="shoping-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="table-responsive">
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
                    <ConfirmProvider>
                      <tbody>
                        {cartCtx.items.length !== 0 ? (
                          cartCtx.items.map((product, index) => {
                            return (
                              <ProductInCart
                                product={product}
                                key={index}
                                cartId={index}
                                editItemQuantity={cartCtx.editItemQuantity}
                                removeItem={cartCtx.removeItem.bind(
                                  null,
                                  product.cartId
                                )}
                              />
                            );
                          })
                        ) : (
                          <tr>
                            <td colSpan={4}>
                              Không có sản phẩm nào trong giỏ hàng
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </ConfirmProvider>
                  </table>
                </div>
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
                    <input type="text" placeholder="Nhập ở đây" />
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
                    Tạm tính
                    <span>{totalCartMoney}</span>
                  </li>
                  <li>
                    Tổng giá trị <span>{finalTotalCartMoney}</span>
                  </li>
                </ul>
                <button className="primary-btn" style={{ width: "100%" }}>
                  THANH TOÁN
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ShoppingCart;
