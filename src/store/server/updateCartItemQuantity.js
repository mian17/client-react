import apiClient from "../../api";

export default function updateCartItemQuantity(newState, i) {
  apiClient.get("/sanctum/csrf-cookie").then(() => {
    const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
    apiClient
      .patch(
        "api/cart/" + newState.items[i].cartIdFromServer,
        { quantity: newState.items[i].productQuantity },
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  });
}
