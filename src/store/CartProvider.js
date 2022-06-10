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

const DUMMY_DATA = [
  {
    cartId: 0,
    productImgUrl: cart_1,
    productName: "Vegetable’s Package",
    productPrice: 55000,
    productQuantity: 1,
    productTotalPrice: 0,
  },
  {
    cartId: 1,
    productImgUrl: cart_2,
    productName: "Fresh Garden Vegetable",
    productPrice: 39000,
    productQuantity: 1,
    productTotalPrice: 0,
  },
  {
    cartId: 2,
    productImgUrl: cart_3,
    productName: "Organic Bananas",
    productPrice: 68000,
    productQuantity: 1,
    productTotalPrice: 0,
  },
];

const defaultCartState = {
  items: DUMMY_DATA,
  totalMoney: calculateTotalMoney(DUMMY_DATA),
};

const CartProvider = (props) => {
  const [cartState, setCartState] = useState(defaultCartState);

  const addItemToCartHandler = (item) => {};
  const removeItemFromCartHandler = (id) => {
    // const removeCartId = e.target.closest("tr").dataset.cartId;
    console.log(id);
    const newState = { ...cartState };
    newState.items = newState.items.filter((product) => product.cartId !== id);
    newState.totalMoney = calculateTotalMoney(newState.items);

    setCartState(newState);
  };

  const editItemQuantityHandler = (e) => {
    const checkIfInputIsNumber =
      Number.isFinite(Number(e.target.value)) &&
      Number(e.target.value) < PRODUCT_QUANTITY_LIMIT;

    const editingCartId = e.target.closest("tr").dataset.cartId;

    for (let i = 0; i < cartState.items.length; i++) {
      if (
        cartState.items[i].cartId === +editingCartId &&
        checkIfInputIsNumber
      ) {
        // Creating a new state to replace previous state
        const newState = { ...cartState };

        newState.items[i].productQuantity = +e.target.value;
        newState.totalMoney = calculateTotalMoney(newState.items);

        setCartState(newState);
      }
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
