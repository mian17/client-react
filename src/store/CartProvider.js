// React imports
import { useState } from "react";

// Source imports
import ProductInCart from "./utils/ProductInCart";

import CartContext from "./cart-context";
import { PRODUCT_QUANTITY_LIMIT, calculateTotalMoney } from "../utils/utils";

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

  /////////////////////////////////////////
  // HANDLERS
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
  // const editItemQuantityHandler = (e) => {
  //   const checkIfInputIsPositiveNumber =
  //     Number.isFinite(Number(e.target.value)) &&
  //     Number(e.target.value) < PRODUCT_QUANTITY_LIMIT &&
  //     Number(e.target.value) >= 0;
  //
  //   const editingCartId = e.target.closest("tr").dataset.cartId;
  //
  //   for (let i = 0; i < cartState.items.length; i++) {
  //     if (
  //       cartState.items[i].cartId === +editingCartId &&
  //       checkIfInputIsPositiveNumber
  //     ) {
  //       // Creating a new state to replace previous state
  //       const newState = { ...cartState };
  //
  //       newState.items[i].productQuantity = +e.target.value;
  //       newState.totalMoney = calculateTotalMoney(newState.items);
  //
  //       setCartState(newState);
  //     }
  //   }
  // };

  const increaseItemQuantityFromCartHandler = (id) => {
    const newState = { ...cartState };

    for (let i = 0; i < newState.items.length; i++) {
      if (newState.items[i].cartId === id) {
        newState.items[i].productQuantity += 1;
        break;
      }
    }
    newState.totalMoney = calculateTotalMoney(newState.items);
    setCartState(newState);
  };

  const decreaseItemQuantityFromCartHandler = (id) => {
    const newState = { ...cartState };

    for (let i = 0; i < newState.items.length; i++) {
      if (newState.items[i].cartId === id) {
        newState.items[i].productQuantity -= 1;
        break;
      }
    }
    newState.totalMoney = calculateTotalMoney(newState.items);
    setCartState(newState);
  };
  /////////////////////////////////////////
  // SETTING CONTEXT'S VALUES
  const cartContext = {
    items: cartState.items,
    totalMoney: cartState.totalMoney,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    // editItemQuantity: editItemQuantityHandler,
    increaseItemQuantityFromCart: increaseItemQuantityFromCartHandler,
    decreaseItemQuantityFromCart: decreaseItemQuantityFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
