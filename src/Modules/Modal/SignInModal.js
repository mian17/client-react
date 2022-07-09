import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import SignIn from "../SignIn/SignIn";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #eee",
  boxShadow: 24,
  p: 5,
  borderRadius: 9,
};

export default function SignInModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          display: "block",
          fontSize: "14px",
          color: "#1c1c1c",
          textTransform: "none",
        }}
        onClick={handleOpen}
      >
        <i className="fa fa-user"></i> Đăng nhập
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        keepMounted
      >
        <Fade in={open}>
          <Box sx={style}>
            <SignIn closeModalHandler={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
