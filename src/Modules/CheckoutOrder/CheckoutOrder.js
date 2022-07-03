import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CheckoutOrderProduct from "./CheckoutOrderProduct/CheckoutOrderProduct";
import { calculateTotalMoney, currencyFormatOptions } from "../../utils/utils";

const CheckoutOrder = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);
  const itemsInCart = cartCtx.items;

  const totalMoney = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(calculateTotalMoney(itemsInCart));
  return (
    <div className="checkout__order">
      <h4>Đơn hàng</h4>
      <div className="checkout__order__products">
        Sản phẩm <span>Thành tiền</span>
      </div>
      <ul>
        {itemsInCart.map((item) => {
          return <CheckoutOrderProduct item={item} />;
        })}
      </ul>
      <div className="checkout__order__subtotal">
        Tạm tính <span>{totalMoney}</span>
      </div>
      <div className="checkout__order__total">
        Tổng cộng <span>{totalMoney}</span>
      </div>
      <div className="checkout__input__checkbox">
        <label htmlFor="acc-or">
          Tạo tài khoản
          <input type="checkbox" id="acc-or" />
          <span className="checkmark"></span>
        </label>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
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
        disabled={!props.isValidToOrder}
      >
        ĐẶT HÀNG
      </button>
    </div>
  );
};
export default CheckoutOrder;
