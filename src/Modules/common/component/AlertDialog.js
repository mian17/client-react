import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import apiClient from "../../../api";
import { useNavigate } from "react-router-dom";

export default function AlertDialog(props) {
  const navigate = useNavigate();
  const handleClose = () => {
    props.closeAlertHandler();
  };

  function changeOrderStatus(statusId) {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
      apiClient
        .patch(
          `api/order/${props.selectedOrderId}`,
          { order_status: statusId },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  const agreeHandler = () => {
    console.log("Người dùng nhấn đồng ý");
    if (props.action === "cancel") {
      // status-code 5
      console.log("Người dùng muốn hủy đơn hàng");
      changeOrderStatus(5);
    }
    if (props.action === "confirm") {
      // status-code 4
      console.log("Người dùng muốn xác nhận đơn hàng");
      changeOrderStatus(4);
    }
    if (props.action === "return-or-refund") {
      // status-code 6
      console.log("Người dùng muốn đổi trả/hoàn tiền đơn hàng");
      changeOrderStatus(6);
    }

    handleClose();
    navigate(0);
  };

  return (
    <div>
      <Dialog
        open={props.alertOpenState}
        // onClick={handleClickOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" autoFocus>
            Hủy
          </Button>
          <Button onClick={agreeHandler}>Đồng ý</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
