import { currentFormatOptions } from "../../utils/utils";

const ProductInCart = (props) => {
  return (
    <tr data-cart-id={props.cartId}>
      <td className="shoping__cart__item">
        <img src={props.productImgUrl} alt="" />
        <h5>{props.productName}</h5>
      </td>
      <td className="shoping__cart__price">
        {new Intl.NumberFormat("vi-VN", currentFormatOptions).format(
          props.productPrice
        )}
      </td>

      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <input
              type="number"
              value={props.productQuantity}
              onChange={props.editProductInCartQuantity}
            />
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">
        {new Intl.NumberFormat("vi-VN", currentFormatOptions).format(
          props.productTotalPrice
        )}
      </td>
      <td className="shoping__cart__item__close">
        <span className="icon_close"></span>
      </td>
    </tr>
  );
};
export default ProductInCart;
