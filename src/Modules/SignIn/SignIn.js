import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";

import { Link as RouterLink } from "react-router-dom";
import { IconButton } from "@mui/material";

export default function SignIn(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <IconButton
        sx={{ position: "absolute", top: "-84px", right: "-18px" }}
        onClick={props.closeModalHandler}
      >
        <CloseIcon />
      </IconButton>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Đăng nhập
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="modal-email"
          label="Địa chỉ Email"
          name="modal-email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Mật khẩu"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lưu mật khẩu"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Đăng nhập
        </Button>
        <Grid container>
          <Grid item xs>
            <Link
              onClick={props.closeModalHandler}
              component={RouterLink}
              to="/forgotpassword"
              variant="body2"
            >
              Quên mật khẩu
            </Link>
          </Grid>
          <Grid item>
            <Link
              onClick={props.closeModalHandler}
              component={RouterLink}
              to="/signup"
              variant="body2"
            >
              Đăng ký tài khoản
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
