import apiClient from "../../../api";

export default function signInHandler(
  userInput,
  navigate,
  setErrors,
  setLoggedIn
) {
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
        if (err.response) {
          const errorsObj = err.response.data.errors;
          const errorArr = [];
          for (const property in errorsObj) {
            errorArr.push(errorsObj[property]);
          }
          setErrors(errorArr);
        }
      });
  });
}
