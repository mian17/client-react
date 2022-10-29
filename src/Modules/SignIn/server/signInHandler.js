import apiClient from "../../../api";

export default function signInHandler(
  userInput,
  navigate,
  setErrors,
  setLoggedIn,
  setIsLoading
) {
  setIsLoading(true);
  apiClient.get("/sanctum/csrf-cookie").then(() => {
    apiClient
      .post("/login", userInput)
      .then((response) => {
        if (response.status === 201) {
          setErrors(null);
          localStorage.setItem(
            "personalAccessToken",
            JSON.stringify(response.data.token)
          );
          localStorage.setItem("loggedIn", JSON.stringify(true));
          setLoggedIn({
            loggedIn: true,
            personalAccessToken: JSON.parse(
              localStorage.getItem("personalAccessToken")
            ),
          });
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err) {
          const errorMessage = err.response.data.message;
          setErrors(errorMessage);
        }
      });
  });
  setTimeout(() => {
    setIsLoading(false);
  }, 300);
}
