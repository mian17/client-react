import ProductItemGrid from "./ProductItemGrid";
import ProductItemList from "./ProductItemList";

import { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import cart_3 from "../../../../Assets/img/cart/cart-3.jpg";

const ProductItem = (props) => {
  const cartCtx = useContext(CartContext);
  // {
  //   cartId: 2,
  //       productImgUrl: cart_3,
  //     productName: "Organic Bananas",
  //     productPrice: 68000,
  //     productQuantity: 1,
  // },

  const productItem = {
    productImgUrl: props.product.imageUrl,
    productName: props.product.productName,
    productId: props.product.productId,
    productPrice: props.product.price,
    productQuantity: 1,
  };
  return (
    <>
      {props.sortLayout === "grid" && (
        <ProductItemGrid
          productId={props.product.productId}
          imageUrl={props.product.imageUrl}
          productName={props.product.productName}
          price={props.product.price}
          rating={props.product.rating}
          addItem={cartCtx.addItem.bind(null, productItem)}
        />
      )}

      {props.sortLayout === "list" && (
        <ProductItemList
          productId={props.product.productId}
          imageUrl={props.product.imageUrl}
          productName={props.product.productName}
          price={props.product.price}
        />
      )}
    </>
  );
};

export default ProductItem;
