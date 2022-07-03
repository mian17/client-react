import { currencyFormatOptions } from "../../../utils/utils";
import classes from "./CheckoutOrderProduct.module.css";
const CheckoutOrderProduct = (props) => {
  return (
    <li>
      <div className={classes["checkout-order-product"]}>
        <img src={props.item.productImgUrl} alt="" />
        <span className="text-truncate">{props.item.productName}</span>
        <span>
          {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
            props.item.productPrice
          )}
        </span>
      </div>
    </li>
  );
};
export default CheckoutOrderProduct;
