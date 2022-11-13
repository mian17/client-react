import apiClient from "../../../api";

export default function autoCompleteBuyerInfo(
  isChecked,
  loggedIn,
  setAuthorizedUserInfo,
  cartCtx,
  products
) {
  if (isChecked && loggedIn) {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
      apiClient
        .get("api/user-authorized", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          const { name, email, phone_number, address } = response.data;

          setAuthorizedUserInfo((prevState) => {
            const newState = { ...prevState };

            newState.name = name;
            newState.email = email;
            newState.phoneNumber = phone_number;
            newState.address = address;
            newState.totalMoney = cartCtx.totalMoney;
            newState.cart = products;

            return newState;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
