import React from "react";

const CartContext = React.createContext({
  items: [],
  totalMoney: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  // editItemQuantity: (id) => {},
  increaseItemQuantityFromCart: (id) => {},
  decreaseItemQuantityFromCart: (id) => {},
});
export default CartContext;
