import { useState, useContext } from "react";
import {
  currencyFormatOptions,
  PRODUCT_QUANTITY_LIMIT,
} from "../../utils/utils";
import CartContext from "../../store/cart-context";
import { useConfirm } from "material-ui-confirm";

const ProductInCart = (props) => {
  const cartCtx = useContext(CartContext);
  const confirm = useConfirm();

  const handleClick = () => {
    confirm({
      confirmationButtonProps: { autoFocus: true },
      title: "Xóa sản phẩm",
      description: "Bạn muốn xóa sản phẩm này khỏi giỏ hàng không?",
      confirmationText: "Đồng ý",
      cancellationText: "Hủy",
    })
      .then(props.removeItem)
      .catch(() => {
        /* ... */
      });
  };

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
        <img
          src={props.product.productImgUrl}
          style={{ height: "100px", width: "auto" }}
          alt=""
        />

        <h5>{props.product.productName}</h5>
      </td>
      <td className="shoping__cart__price">
        {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
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
        {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
          props.product.productPrice * props.product.productQuantity
        )}
      </td>
      {/*onClick={props.removeItem}*/}
      <td className="shoping__cart__item__close" onClick={handleClick}>
        <span className="icon_close"></span>
      </td>
    </tr>
  );
};
export default ProductInCart;
