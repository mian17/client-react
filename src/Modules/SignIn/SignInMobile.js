import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import SignIn from "./SignIn";
import * as React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const SignInMobile = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/*<IconButton sx={{ position: "absolute", top: "-84px", right: "-18px" }}>*/}
        {/*    <CloseIcon />*/}
        {/*</IconButton>*/}
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
            id="email"
            label="Địa chỉ Email"
            name="email"
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
    </Container>
  );
};
export default SignInMobile;
