import { useState, useContext } from "react";
import {
  currentFormatOptions,
  PRODUCT_QUANTITY_LIMIT,
} from "../../utils/utils";
import CartContext from "../../store/cart-context";

const ProductInCart = (props) => {
  const cartCtx = useContext(CartContext);
  // const [productInCart, setProductInCart] = useState(props.product);

  // const editProductInCartQuantity = (e) => {
  //   if (
  //     Number.isFinite(Number(e.target.value)) &&
  //     Number(e.target.value) < PRODUCT_QUANTITY_LIMIT
  //   ) {
  //     setProductInCart((prevState) => ({
  //       ...prevState,
  //       productQuantity: +e.target.value,
  //     }));
  //   }
  // };
  return (
    <tr data-cart-id={props.cartId}>
      <td className="shoping__cart__item">
        <img src={props.product.productImgUrl} alt="" />
        <h5>{props.product.productName}</h5>
      </td>
      <td className="shoping__cart__price">
        {new Intl.NumberFormat("vi-VN", currentFormatOptions).format(
          props.product.productPrice
        )}
      </td>

      <td className="shoping__cart__quantity">
        <div className="quantity">
          <div className="pro-qty">
            <input
              type="number"
              value={props.product.productQuantity}
              onChange={cartCtx.editItemQuantity}
            />
          </div>
        </div>
      </td>
      <td className="shoping__cart__total">
        {new Intl.NumberFormat("vi-VN", currentFormatOptions).format(
          props.product.productPrice * props.product.productQuantity
        )}
      </td>
      <td className="shoping__cart__item__close" onClick={props.removeItem}>
        <span className="icon_close"></span>
      </td>
    </tr>
  );
};
export default ProductInCart;
