// React imports
import { useEffect, useState } from "react";

// Source imports
import AuthContext from "./auth-context";

const authDefaultState = {
  loggedIn: false,
  personalAccessToken: "",
};
const AuthProvider = (props) => {
  const [authState, setAuthState] = useState(authDefaultState);

  /////////////////////////////////////////
  // HANDLERS
  const setLoggedInHandler = (loggedInState) => {
    setAuthState(loggedInState);
  };
  const setLoggedOutHandler = () => {
    sessionStorage.removeItem("personalAccessToken");
    setAuthState(authDefaultState);
  };

  useEffect(() => {
    if (sessionStorage.getItem("personalAccessToken") !== null) {
      setAuthState({
        loggedIn: true,
        personalAccessToken: JSON.parse(
          sessionStorage.getItem("personalAccessToken")
        ),
      });
    }
  }, []);

  /////////////////////////////////////////
  // SETTING CONTEXT'S VALUES
  const authContext = {
    loggedIn: authState.loggedIn,
    personalAccessToken: authState.personalAccessToken,
    setLoggedIn: setLoggedInHandler,
    setLoggedOut: setLoggedOutHandler,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
