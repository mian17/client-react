import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Link as RouterLink, useNavigate } from "react-router-dom";
import { FormLabel, LinearProgress, Radio, RadioGroup } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import apiClient from "../../api";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export default function SignUp() {
  let navigate = useNavigate();
  // const [userIsRegistered, setUserIsRegistered] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [birthDate, setBirthDate] = React.useState(null);
  const [error, setError] = useState(null);
  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (data.get("password") !== data.get("reenterPassword")) {
      console.log("Bạn nhập sai mật khẩu");
      return;
    }
    const transformedBirthDate = dayjs(birthDate).format("YYYY-MM-DD");
    const userInput = {
      username: data.get("username"),
      password: data.get("password"),
      password_confirmation: data.get("reenterPassword"),
      email: data.get("email"),
      phone_number: data.get("phoneNumber"),
      name: data.get("fullName"),
      // birth_date: data.get("birthDate"),
      birth_date: transformedBirthDate,
      gender: data.get("gender"),
      address: data.get("address"),
      role_id: 3, // Customer role id
    };
    apiClient.get("/sanctum/csrf-cookie").then((response) => {
      console.log(response);
      apiClient
        .post("/register", userInput)
        .then(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
          alert(
            "Đăng ký người dùng thành công, bạn vui lòng check hộp thư để xác nhận email"
          );

          navigate("/");
        })
        .catch((err) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
          alert(err.response.data.message);
        });
    });
  };
  // const [loading, setLoading] = React.useState(false);
  // function loadingHandler() {
  //   setLoading(true);
  // }
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
        }}
      >
        <Typography component="h1" variant="h5">
          Đăng ký tài khoản
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                // autoComplete="given-name"
                name="fullName"
                required
                fullWidth
                id="fullName"
                label="Họ và tên"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Địa chỉ Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                // autoComplete="given-name"
                type="text"
                name="username"
                required
                fullWidth
                id="username"
                label="Tên người dùng"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="reenterPassword"
                label="Nhập lại mật khẩu"
                type="password"
                id="reenterPassword"
                autoComplete="reenter-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phoneNumber"
                label="Số điện thoại"
                type="text"
                id="phoneNumber"
              />
            </Grid>
            <Grid item xs={12}>
              {/*<TextField*/}
              {/*  required*/}
              {/*  fullWidth*/}
              {/*  name="birthDate"*/}
              {/*  label="Ngày tháng năm sinh"*/}
              {/*  type="text"*/}
              {/*  id="birthDate"*/}
              {/*/>*/}
              <DatePicker
                value={birthDate}
                required
                name="birthDate"
                id="birthDate"
                label="Ngày tháng năm sinh"
                onChange={(newValue) => {
                  setBirthDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} fullWidth />}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="address"
                label="Địa chỉ"
                type="text"
                id="address"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl margin="normal">
                <FormLabel value="start" id="gender-radio-group">
                  Giới tính
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="gender"
                  name="gender"
                  id="gender"
                >
                  <FormControlLabel value="1" control={<Radio />} label="Nữ" />
                  <FormControlLabel value="0" control={<Radio />} label="Nam" />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label="Khác"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            {/*<Grid item xs={12}>*/}
            {/*  <FormControlLabel*/}
            {/*    control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
            {/*    label="Tôi muốn nhận các thông tin quảng cáo, ưu đãi thông qua email."*/}
            {/*  />*/}
            {/*</Grid>*/}
          </Grid>
          <Box sx={{ height: 4 }}>{isLoading && <LinearProgress />}</Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={isLoading}
          >
            Đăng ký
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/signin" variant="body2">
                Bạn đã có tài khoản? Đăng nhập ngay
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
