import apiClient from "../../api";

export default function deleteCartItemFromServer(cartItemIdFromServer) {
  apiClient.get("/sanctum/csrf-cookie").then(() => {
    const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));

    apiClient
      .delete(`api/cart/${cartItemIdFromServer}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  });
}
