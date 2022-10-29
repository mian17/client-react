import { useState } from "react";

const useSnackbar = () => {
  const [snackbarType, setSnackbarType] = useState(undefined);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertContent, setAlertContent] = useState("");

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
    setAlertContent("");
  };

  return {
    snackbarType,
    setSnackbarType,
    openSnackbar,
    setOpenSnackbar,
    alertContent,
    setAlertContent,
    handleCloseSnackbar,
  };
};
export default useSnackbar;
