import apiClient from "../../api";
import CartItemToServer from "../utils/CartItemToServer";

export default function addNewProduct(item) {
  apiClient.get("/sanctum/csrf-cookie").then(() => {
    const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
    apiClient
      .post(
        "api/cart",
        new CartItemToServer(
          item.productId,
          item.modelId,
          item.productQuantity
        ),
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
