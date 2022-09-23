// React imports
import {useContext, useEffect, useState} from "react";

// Source imports
import CartContext from "./cart-context";
import {calculateTotalMoney} from "../utils/utils";
import AuthContext from "./auth-context";
import {reAssignCartId, removeItemFromCart, setNewStateSessionAndCalculateTotalMoneyForCart,} from "./utils/helpers";
import apiClient from "../api";
import ProductStateToAddToCart from "../Modules/Product/ProductItemInfo/utils/productStateToAddToCart";
import {backendServerPath} from "../Modules/common/utils/backendServerPath";
import updateCartItemQuantity from "./server/updateCartItemQuantity";
import addNewProduct from "./server/addNewProduct";
import deleteCartItemFromServer from "./server/deleteCartItemFromServer";

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
  const authCtx = useContext(AuthContext);
  const loggedIn = authCtx.loggedIn;
  /////////////////////////////////////////
  // GET CART ITEMS FROM SESSION IF USER IS NOT LOGGED IN
  // OR USER HAS NOT REGISTERED
  // const getCartFromServer = useCallback(() => {
  //   apiClient.get("/sanctum/csrf-cookie").then(() => {
  //     const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
  //     apiClient
  //       .get("api/user-cart", {
  //         headers: {
  //           Authorization: `Bearer ${userToken}`,
  //         },
  //       })
  //       .then((response) => {
  //         const userCartItems = response.data.itemsInCart.map((item) => {
  //           // console.log(response);
  //           const {
  //             id: cartIdFromServer,
  //             product_id: productId,
  //             model_id: modelId,
  //             image_1: productImgUrl,
  //             name: productName,
  //             price: productPrice,
  //             quantity: productQuantity,
  //           } = item;
  //
  //           return new ProductStateToAddToCart(
  //             productId,
  //             modelId,
  //             backendServerPath + productImgUrl,
  //             productName,
  //             productPrice,
  //             productQuantity,
  //             cartIdFromServer
  //           );
  //         });
  //         userCartItems.forEach(reAssignCartId());
  //         // console.log(userCartItems);
  //
  //         // const newState = { ...cartState };
  //         // newState.items = userCartItems;
  //         // newState.totalMoney = calculateTotalMoney(newState.items);
  //         //
  //         setCartState((prevState) => {
  //           prevState.items = userCartItems;
  //           prevState.totalMoney = calculateTotalMoney(userCartItems);
  //
  //           return prevState;
  //         });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   });
  // }, []);

  const [trigger, setTrigger] = useState(true);
  useEffect(() => {
    if (loggedIn) {
      // getCartFromServer();
      apiClient.get("/sanctum/csrf-cookie").then(() => {
        const userToken = JSON.parse(
          localStorage.getItem("personalAccessToken")
        );
        apiClient
          .get("api/user-cart", {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((response) => {
            const userCartItems = response.data.itemsInCart.map((item) => {
              // console.log(response);
              const {
                id: cartIdFromServer,
                product_id: productId,
                model_id: modelId,
                image_1: productImgUrl,
                name: productName,
                price: productPrice,
                quantity: productQuantity,
              } = item;

              return new ProductStateToAddToCart(
                productId,
                modelId,
                backendServerPath + productImgUrl,
                productName,
                productPrice,
                productQuantity,
                cartIdFromServer
              );
            });
            userCartItems.forEach(reAssignCartId());
            // console.log(userCartItems);

            if (trigger) {
              const newState = { ...cartState };
              newState.items = userCartItems;
              newState.totalMoney = calculateTotalMoney(newState.items);
              setCartState(newState);
              setTrigger(false);
            } else {
              setCartState((prevState) => {
                prevState.items = userCartItems;
                prevState.totalMoney = calculateTotalMoney(userCartItems);

                return prevState;
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, [loggedIn, cartState, trigger]);

  console.log(loggedIn);
  /////////////////////////////////////////
  // HANDLERS
  const addItemToCartHandler = (item) => {
    const newState = { ...cartState };

    let alreadyInCart = false;

    for (let i = 0; i < newState.items.length; i++) {
      if (
        newState.items[i].productId === item.productId &&
        newState.items[i].modelId === item.modelId
      ) {
        newState.items[i].productQuantity += 1;
        if (loggedIn) updateCartItemQuantity(newState, i);
        alreadyInCart = true;
        break;
      }
    }

    if (alreadyInCart === false) {
      item.productQuantity = 1; // DO NOT REMOVE THIS, BECAUSE
      // AFTER DELETING A CART ITEM AND ADDING IT BA
      // THE PRODUCT QUANTITY PROPERTY WOULD DEFAULT TO 0
      // DESPITE SETTING IT AS DEFAULT STATE IN CART.JS

      newState.items.push(item);
      if (loggedIn) addNewProduct(item);
    }

    newState.items.forEach(reAssignCartId());

    setNewStateSessionAndCalculateTotalMoneyForCart(newState, setCartState);
  };

  const removeItemFromCartHandler = (id) => {
    const newState = { ...cartState };

    const cartItemIdToDelete = newState.items.find(
      (item) => item.cartId === id
    ).cartIdFromServer;

    newState.items = newState.items.filter(removeItemFromCart(id));

    if (loggedIn) deleteCartItemFromServer(cartItemIdToDelete);

    newState.items.forEach(reAssignCartId());

    setNewStateSessionAndCalculateTotalMoneyForCart(newState, setCartState);
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

        if (loggedIn) updateCartItemQuantity(newState, i);

        break;
      }
    }

    setNewStateSessionAndCalculateTotalMoneyForCart(newState, setCartState);
  };

  const decreaseItemQuantityFromCartHandler = (id) => {
    const newState = { ...cartState };

    for (let i = 0; i < newState.items.length; i++) {
      if (newState.items[i].cartId === id) {
        if (newState.items[i].productQuantity > 0) {
          newState.items[i].productQuantity -= 1;

          if (loggedIn) updateCartItemQuantity(newState, i);

          if (newState.items[i].productQuantity <= 0) {
            const cartItemIdToDelete = newState.items[i].cartIdFromServer;
            newState.items = newState.items.filter(removeItemFromCart(id));

            if (loggedIn) deleteCartItemFromServer(cartItemIdToDelete);

            newState.items.forEach(reAssignCartId());
            break;
          }

          break;
        }
      }
    }
    setNewStateSessionAndCalculateTotalMoneyForCart(newState, setCartState);
  };

  const resetCartHandler = () => {
    setCartState({
      items: [],
      totalMoney: 0,
    });
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
    resetCart: resetCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
