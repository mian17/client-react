// React imports
import { useEffect, useState } from "react";

// Source imports
import AuthContext from "./auth-context";
import { useNavigate } from "react-router-dom";
import { useIdleTimer } from "react-idle-timer";

const authDefaultState = {
  loggedIn: localStorage.getItem("loggedIn")
    ? localStorage.getItem("loggedIn")
    : false,
  personalAccessToken: "",
};
const AuthProvider = (props) => {
  const [authState, setAuthState] = useState(authDefaultState);

  // console.log(getRemainingTime());

  const navigate = useNavigate();

  /////////////////////////////////////////
  // HANDLERS

  const setLoggedOutHandler = () => {
    localStorage.removeItem("personalAccessToken");
    localStorage.removeItem("loggedIn");
    setAuthState({
      loggedIn: false,
      personalAccessToken: "",
    });
    navigate(0);
  };

  const setLoggedInHandler = (loggedInState) => {
    setAuthState(loggedInState);
    start();
  };

  const onIdle = () => {
    if (authState.loggedIn) {
      console.log(getRemainingTime());
      if (getRemainingTime() === 0) {
        setLoggedOutHandler();
      }
    }
  };
  const onActive = () => {
    if (authState.loggedIn) {
      reset();
    }
  };

  const { start, reset, getRemainingTime } = useIdleTimer({
    timeout: 1000 * 60 * 30,
    onIdle,
    onActive,
    startOnMount: true,
    startManually: true,
    crossTab: true,
  });
  console.log(getRemainingTime());

  useEffect(() => {
    if (localStorage.getItem("personalAccessToken") !== null) {
      setAuthState({
        loggedIn: true,
        personalAccessToken: JSON.parse(
          localStorage.getItem("personalAccessToken")
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
