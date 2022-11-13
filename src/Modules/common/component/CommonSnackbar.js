import { Alert, Snackbar } from "@mui/material";
import * as React from "react";

const CommonSnackbar = ({
  openSnackbar,
  handleCloseSnackbar,
  snackbarType,
  alertContent,
}) => {
  let content = "";

  if (typeof alertContent === "string" && alertContent.length > 0) {
    content = alertContent;
  } else if (alertContent instanceof Array) {
    content = alertContent.map((content, index) => (
      <React.Fragment key={index}>
        <>{content}</>
        <br />
      </React.Fragment>
    ));
  }

  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity={snackbarType}
        sx={{ width: "100%" }}
      >
        {content}
      </Alert>
    </Snackbar>
  );
};
export default CommonSnackbar;
