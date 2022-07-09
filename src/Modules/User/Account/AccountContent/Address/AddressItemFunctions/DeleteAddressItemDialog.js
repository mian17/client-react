import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useEffect } from "react";

const DeleteAddressItemDialog = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleDeletion = () => {
    setOpen(false);
    console.log(props.addressData.id);
  };

  useEffect(() => {
    props.openDialogChildFunction.current = handleClickOpen;
  }, [props.openDialogChildFunction]);
  return (
    <Dialog
      sx={{ borderRadius: "36px" }}
      open={open}
      onClose={handleDeletion}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Xóa địa chỉ?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Bạn có muốn xóa địa chỉ này không?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDeletion} autoFocus>
          Không
        </Button>
        <Button onClick={handleDeletion}>Đồng ý</Button>
      </DialogActions>
    </Dialog>
  );
};
export default DeleteAddressItemDialog;
