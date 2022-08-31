import { calculateTotalMoney } from "../../utils/utils";

export function removeItemFromCart(id) {
  return (product) => product.cartId !== id;
}

export function reAssignCartId() {
  return (product, index) => {
    product.cartId = index;
  };
}

export function setNewStateSessionAndCalculateTotalMoneyForCart(
  newState,
  setCartState
) {
  newState.totalMoney = calculateTotalMoney(newState.items);
  setCartState(newState);
  sessionStorage.setItem("cart", JSON.stringify(newState));
}
