import { Alert, Snackbar } from "@mui/material";
import * as React from "react";

const CommonSnackbar = (props) => {
  return (
    <Snackbar
      open={props.openSnackbar}
      autoHideDuration={6000}
      onClose={props.handleCloseSnackbar}
    >
      <Alert
        onClose={props.handleCloseSnackbar}
        severity={props.snackbarType}
        sx={{ width: "100%" }}
      >
        {props.alertContent}
      </Alert>
    </Snackbar>
  );
};
export default CommonSnackbar;
