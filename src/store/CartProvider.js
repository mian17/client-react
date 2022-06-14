import { useState } from "react";

import CartContext from "./cart-context";

import { PRODUCT_QUANTITY_LIMIT } from "../utils/utils";

import cart_1 from "../Assets/img/cart/cart-1.jpg";
import cart_2 from "../Assets/img/cart/cart-2.jpg";
import cart_3 from "../Assets/img/cart/cart-3.jpg";

const calculateTotalMoney = (products) => {
  return products.reduce((prevTotalMoney, curProduct) => {
    return (
      prevTotalMoney + curProduct.productPrice * curProduct.productQuantity
    );
  }, 0);
};

// const DUMMY_DATA = [
//   {
//     cartId: 0,
//     productImgUrl: cart_1,
//     productName: "Vegetable’s Package",
//     productPrice: 55000,
//     productQuantity: 1,
//   },
//   {
//     cartId: 1,
//     productImgUrl: cart_2,
//     productName: "Fresh Garden Vegetable",
//     productPrice: 39000,
//     productQuantity: 1,
//   },
//   {
//     cartId: 2,
//     productImgUrl: cart_3,
//     productName: "Organic Bananas",
//     productPrice: 68000,
//     productQuantity: 1,
//   },
// ];
const CART_DEFAULT_STATE = [];
const defaultCartState = {
  items: CART_DEFAULT_STATE,
  totalMoney: calculateTotalMoney(CART_DEFAULT_STATE),
};

const CartProvider = (props) => {
  const [cartState, setCartState] = useState(defaultCartState);

  const addItemToCartHandler = (item) => {
    const newState = { ...cartState };

    let alreadyInCart = false;
    for (let i = 0; i < newState.items.length; i++) {
      if (newState.items[i].productId === item.productId) {
        newState.items[i].productQuantity += 1;
        alreadyInCart = true;
        break;
      }
    }

    if (alreadyInCart === false) newState.items.push(item);

    newState.items.forEach((product, index) => (product.cartId = index));
    newState.totalMoney = calculateTotalMoney(newState.items);

    setCartState(newState);
  };

  const removeItemFromCartHandler = (id) => {
    const newState = { ...cartState };
    newState.items = newState.items.filter((product) => product.cartId !== id);

    newState.items.forEach((product, index) => {
      product.cartId = index;
    });
    newState.totalMoney = calculateTotalMoney(newState.items);

    setCartState(newState);
  };
  const editItemQuantityHandler = (e) => {
    const checkIfInputIsPositiveNumber =
      Number.isFinite(Number(e.target.value)) &&
      Number(e.target.value) < PRODUCT_QUANTITY_LIMIT &&
      Number(e.target.value) >= 0;

    const editingCartId = e.target.closest("tr").dataset.cartId;

    if (Number(e.target.value) !== 0) {
      for (let i = 0; i < cartState.items.length; i++) {
        if (
          cartState.items[i].cartId === +editingCartId &&
          checkIfInputIsPositiveNumber
        ) {
          // Creating a new state to replace previous state
          const newState = { ...cartState };

          newState.items[i].productQuantity = +e.target.value;
          newState.totalMoney = calculateTotalMoney(newState.items);

          setCartState(newState);
        }
      }
    } else {
    }
  };

  const cartContext = {
    items: cartState.items,
    totalMoney: cartState.totalMoney,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    editItemQuantity: editItemQuantityHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
