import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";

const ForgotPassword = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          marginBottom: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        {/*<IconButton sx={{ position: "absolute", top: "-84px", right: "-18px" }}>*/}
        {/*    <CloseIcon />*/}
        {/*</IconButton>*/}

        <Typography component="h1" variant="h5">
          Quên mật khẩu
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
          <Typography>
            * Nếu email của bạn chính xác, chúng tôi sẽ gửi bạn email để bạn đặt
            lại mật khẩu
          </Typography>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Gửi
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                onClick={props.closeModalHandler}
                component={RouterLink}
                to="/signin"
                variant="body2"
              >
                Đăng nhập
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
export default ForgotPassword;
