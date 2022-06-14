import { currencyFormatOptions } from "../../../../utils/utils";
import cart_3 from "../../../../Assets/img/cart/cart-3.jpg";

const ProductItemGrid = (props) => {
  // cartId: 2,
  //     productImgUrl: cart_3,
  //     productName: "Organic Bananas",
  //     productPrice: 68000,
  //     productQuantity: 1,
  //     productTotalPrice: 0,

  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="product__item">
        <div
          className="product__item__pic"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("${props.imageUrl}")`,
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        >
          <ul className="product__item__pic__hover">
            <li>
              <a href="/">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a onClick={props.addItem}>
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="product__item__text">
          <h6>
            <a href="/">{props.productName}</a>
          </h6>
          <h5>
            {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
              props.price
            )}
          </h5>
        </div>
      </div>
    </div>
  );
};
export default ProductItemGrid;
