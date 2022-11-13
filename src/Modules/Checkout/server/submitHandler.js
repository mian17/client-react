import apiClient from "../../../api";
import OrderToServer from "../checkoutUtils/orderToServer";
import { setAlert } from "../../common/utils/helpers";

export default function submitHandler(
  loggedIn,
  setPaymentMethods,
  discountCode,
  discountPercent,
  navigate,
  resetCart,
  setIsProcessingCart,
  snackbarType,
  setSnackbarType,
  openSnackbar,
  setOpenSnackbar,
  alertContent,
  setAlertContent
) {
  return (values) => {
    setIsProcessingCart(true);

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
            setTimeout(() => {
              setIsProcessingCart(false);
            }, 300);
            navigate("/thank-you", { replace: true });
            resetCart();
          })
          .catch((err) => {
            setTimeout(() => {
              setIsProcessingCart(false);
            }, 300);

            const errorResponse = err.response.data;
            // alert(err.response.data.message);
            setAlert(
              setSnackbarType,
              "error",
              setOpenSnackbar,
              setAlertContent,
              errorResponse.hasOwnProperty("error_messages")
                ? errorResponse.error_messages
                : err.message
            );
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
            setTimeout(() => {
              setIsProcessingCart(false);
            }, 300);
            navigate("/thank-you", { replace: true });
            resetCart();
          })
          .catch((err) => {
            setTimeout(() => {
              setIsProcessingCart(false);
            }, 300);
            console.log(err);
            // alert(err.response.data.message);

            const errorResponse = err.response.data;

            setAlert(
              setSnackbarType,
              "error",
              setOpenSnackbar,
              setAlertContent,
              errorResponse.hasOwnProperty("error_messages")
                ? errorResponse.error_messages
                : err.message
            );
          });
      });
    }

    // alert(JSON.stringify(values, null, 2));
  };
}
