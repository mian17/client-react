/////////////////////////////////////
// React Router Dom Imports
import {Link as RouterLink, useNavigate} from "react-router-dom";

/////////////////////////////////////
// Source Imports
import {avatarSx, signInFormSx, signInSx} from "./styles/signInSx";
import signInHandler from "./server/signInHandler";

///////////////////////////////
// Mui imports
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import {useContext, useState} from "react";
import AuthContext from "../../store/auth-context";
import apiClient from "../../api";
import {LinearProgress} from "@mui/material";

const SignInMobile = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const { setLoggedIn } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userInput = {
      email: data.get("email"),
      password: data.get("password"),
    };
    signInHandler(userInput, navigate, setErrors, setLoggedIn, setIsLoading);
  };

  const handleResendEmailVerification = (event) => {
    event.preventDefault();
    setIsLoading(true);
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      apiClient
        .post("api/email/verification-notification", { email: email })
        .then((response) => {
          if (response.status === 200) {
            alert("Chúng tôi đã gửi email xác nhận cho bạn");
          }
        })
        .catch((err) => {
          console.log(err);
          if (err) {
            alert("Đã có lỗi xảy ra");
          }
        });
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  function emailOnChangeHandler(e) {
    setEmail(e.target.value);
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={signInSx}>
        <Avatar sx={avatarSx}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Đăng nhập
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={signInFormSx}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Địa chỉ Email"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={emailOnChangeHandler}
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
          {/*<FormControlLabel*/}
          {/*  control={<Checkbox value="remember" color="primary" />}*/}
          {/*  label="Lưu mật khẩu"*/}
          {/*/>*/}
          {/*{errors !== null &&*/}
          {/*  errors.length > 1 &&*/}
          {/*  errors.map((error, index) => {*/}
          {/*    return (*/}
          {/*      <Typography key={index} variant="subtitle1" color="red">*/}
          {/*        {error}*/}
          {/*      </Typography>*/}
          {/*    );*/}
          {/*  })}*/}
          {errors !== null && typeof errors === "string" && (
            <Typography variant="subtitle1" color="red">
              {errors}
            </Typography>
          )}
          {errors === "Bạn chưa xác nhận email" && (
            <Typography>
              Nhấn{" "}
              <Link href="/#" onClick={handleResendEmailVerification}>
                tại đây
              </Link>{" "}
              để chúng tôi gửi lại email xác nhận
            </Typography>
          )}
          <Box sx={{ height: 4 }}>{isLoading && <LinearProgress />}</Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
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
