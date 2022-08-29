import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { FormLabel, Input, Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MobileDatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import * as React from "react";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

import Toolbar from "@mui/material/Toolbar";
import { useFormik } from "formik";
import * as yup from "yup";

import apiClient from "../../../../../api";
// 0: for male,
// 1: for female,
// 2: for other

// DATA DUMP FROM DB
// const user = {
//   username: "jsmith",
//   name: "John Smith",
//   email: "johnsmith@gmail.com",
//   phoneNumber: "(+84) 111111111",
//   gender: 0,
//   birthDate: "2000-12-03",
// };

const validationSchema = yup.object({
  username: yup.string().required("Không để trống tên đăng nhập"),
  name: yup.string().required("Không để trống họ và tên"),
  email: yup.string().email().required("Không để trống email"),
  phoneNumber: yup
    .string()
    .min(10, "Số điện thoại cần dài hơn 10 ký tự")
    .required("Không để trống số điện thoại"),
  gender: yup.number().required("Không để trống giới tính"),
  birthDate: yup.date().required("Không để trống ngày sinh"),
  // avatar: yup.string()
});

const Profile = () => {
  useEffect(() => {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(
        sessionStorage.getItem("personalAccessToken")
      );
      apiClient
        .get("api/user/account/profile", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          const {
            username,
            name,
            email,
            phone_number: phoneNumber,
            gender,
            birth_date: birthDate,
          } = response.data.user;

          setUserState({
            username,
            name,
            email,
            phoneNumber,
            gender,
            birthDate,
          });
        });
    });
  }, []);

  const [userState, setUserState] = useState({
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    birthDate: "0000-00-00",
  });

  const formik = useFormik({
    initialValues: userState,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    enableReinitialize: true,
  });
  // const [dateValue, setDateValue] = React.useState(new Date());

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <Grid container spacing={2}>
        <Grid item xl={8} md={8}>
          <Typography component="span" variant="h5">
            Hồ sơ của tôi
          </Typography>
          <Typography mb={2} component="p" variant="subtitle2">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </Typography>
          <Box>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              name="username"
              label="Tên đăng nhập"
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              autoComplete="username"
            />
            <TextField
              margin="normal"
              fullWidth
              id="name"
              name="name"
              label="Tên"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              autoComplete="name"
            />
            <TextField
              margin="normal"
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              autoComplete="email"
            />
            <TextField
              margin="normal"
              fullWidth
              name="phoneNumber"
              label="Số điện thoại"
              type="tel"
              id="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              autoComplete="mobile"
            />
            <Grid container sx={{ alignItems: "center" }}>
              <Grid item md={6}>
                <FormControl margin="normal">
                  <FormLabel value="start" id="gender-radio-group">
                    Giới tính
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="gender"
                    name="gender"
                    id="gender"
                    onChange={formik.handleChange}
                    value={formik.values.gender}
                    defaultValue="0"
                    error={
                      formik.touched.gender && Boolean(formik.errors.gender)
                    }
                    helperText={formik.touched.gender && formik.errors.gender}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Nữ"
                    />
                    <FormControlLabel
                      value="0"
                      control={<Radio />}
                      label="Nam"
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Khác"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth margin="normal">
                  <MobileDatePicker
                    label="Ngày sinh"
                    id="birthDate"
                    name="birthDate"
                    value={formik.values.birthDate}
                    onChange={(val) => {
                      formik.setFieldValue("birthDate", val, true);
                    }}
                    error={
                      formik.touched.birthDate &&
                      Boolean(formik.errors.birthDate)
                    }
                    helperText={
                      formik.touched.birthDate && formik.errors.birthDate
                    }
                    renderInput={(params) => <TextField {...params} />}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xl={4} md={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              gap: 2,
              height: "100%",
            }}
          >
            <Toolbar />
            <Avatar sx={{ width: 128, height: 128 }}>
              <PersonOutlinedIcon sx={{ width: 96, height: 96 }} />
            </Avatar>
            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                sx={{ display: "none" }}
              />
              <Button component="span" variant="outlined" sx={{ flexGrow: 0 }}>
                Chọn ảnh
              </Button>
            </label>

            <div>
              <Typography component="p" variant="subtitle1">
                Dung lượng file tối đa 1MB
              </Typography>
              <Typography component="p" variant="subtitle1">
                Định dạng: .JPEG, .PNG
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, textAlign: "center" }}
      >
        Lưu thông tin
      </Button>
    </Box>
  );
};
export default Profile;
