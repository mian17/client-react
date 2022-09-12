import apiClient from "../../../api";
import OrderToServer from "../checkoutUtils/orderToServer";

export default function submitHandler(
    loggedIn,
    setPaymentMethods,
    discountCode,
    discountPercent,
    navigate,
    resetCart,
) {
  return (values) => {
    const {
      name,
      email,
      phoneNumber,
      address,
      totalMoney,
      paymentMethod,

      cart,
    } = values;
    if (!loggedIn) {
      apiClient.get("/sanctum/csrf-cookie").then(() => {
        apiClient
            .post(
                "api/order",
                new OrderToServer(
                    name,
                    email,
                    phoneNumber,
                    address,
                    totalMoney,
                    paymentMethod,
                    cart,
                    discountCode,
                    discountPercent
                )
            )
            .then((response) => {
              setPaymentMethods(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
      });
    } else {
      apiClient.get("/sanctum/csrf-cookie").then(() => {
        const userToken = JSON.parse(
            localStorage.getItem("personalAccessToken")
        );
        apiClient
            .post(
                "api/order",
                new OrderToServer(
                    name,
                    email,
                    phoneNumber,
                    address,
                    totalMoney,
                    paymentMethod,
                    cart,
                    discountCode,
                    discountPercent
                ),
                {
                  headers: {
                    Authorization: `Bearer ${userToken}`,
                  },
                }
            )
            .then((response) => {
              setPaymentMethods(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
      });
    }

    navigate("/thank-you", {replace: true});
    resetCart();
    // alert(JSON.stringify(values, null, 2));
  };
}
