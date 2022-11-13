import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import {
  FormLabel,
  Input,
  LinearProgress,
  Radio,
  RadioGroup,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { MobileDatePicker } from "@mui/x-date-pickers";
import Button from "@mui/material/Button";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";

import Toolbar from "@mui/material/Toolbar";
import { useFormik } from "formik";

import apiClient from "../../../../../api";
import { profileSchema } from "../../../../common/validationSchema/schema";
// import fetchUserInfo from "./server/fetchUserInfo";
// import ProfileToServer from "./profileUtils/ProfileToServer";
// import dayjs from "dayjs";
import submitFormHandler from "./server/submitFormHandler";
// import uploadAvatarHandler from "./server/uploadAvatarHandler";
import { backendServerPath } from "../../../../common/utils/backendServerPath";
import useSnackbar from "../../../../../hooks/use-snackbar";
import CommonSnackbar from "../../../../common/component/CommonSnackbar";

const Profile = () => {
  const [avatarUrl, setAvatarUrl] = useState("");
  // const [error, setError] = useState("");
  const [isLoadingNewAvatar, setIsLoadingNewAvatar] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const {
    snackbarType,
    setSnackbarType,
    openSnackbar,
    setOpenSnackbar,
    alertContent,
    setAlertContent,
    handleCloseSnackbar,
  } = useSnackbar();

  const [hasUploaded, setHasUploaded] = useState(false);

  const uploadAvatarHandler = (e) => {
    setOpenSnackbar(false);
    setAlertContent("");
    setIsLoadingNewAvatar(true);
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
      const avatarFormData = new FormData();
      avatarFormData.append("avatar_file", e.target.files[0]);
      apiClient
        .post("api/user-update-avatar", avatarFormData, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          setTimeout(() => {
            setIsLoadingNewAvatar(false);
          }, 300);
          setSnackbarType("success");
          setOpenSnackbar(true);
          setAlertContent(response.data.message);
          setHasUploaded(true);
        })
        .catch((error) => {
          setTimeout(() => {
            setIsLoadingNewAvatar(false);
          }, 300);
          setSnackbarType("error");
          setOpenSnackbar(true);
          setAlertContent(error.response.data.message);
        });
    });
  };
  const fetchUserInfoCallback = useCallback(async () => {
    try {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));

      await apiClient.get("/sanctum/csrf-cookie");
      const response = await apiClient.get("/api/user/account/profile", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${userToken}`,
        },
      });

      const {
        username,
        name,
        email,
        phone_number: phoneNumber,
        gender,
        birth_date: birthDate,
        address,
        avatar,
      } = response.data.user;

      setUserState({
        username,
        name,
        email,
        phoneNumber,
        gender,
        birthDate,
        address,
      });
      setAvatarUrl(backendServerPath + avatar);
    } catch (error) {
      setSnackbarType("error");
      setOpenSnackbar(true);
      setAlertContent("Không lấy được thông tin người dùng");
    }
    setHasUploaded(false);
  }, [setAlertContent, setOpenSnackbar, setSnackbarType]);

  useEffect(() => {
    // fetchUserInfo(setUserState, setAvatarUrl);
    fetchUserInfoCallback();
  }, [hasUploaded, fetchUserInfoCallback]);

  const [userState, setUserState] = useState({
    username: "",
    name: "",
    email: "",
    phoneNumber: "",
    gender: "",
    birthDate: "0000-00-00",
    address: "",
  });

  const formik = useFormik({
    initialValues: userState,
    validationSchema: profileSchema,
    onSubmit: submitFormHandler(
      setSnackbarType,
      setOpenSnackbar,
      setAlertContent,
      setHasUploaded,
      setIsLoadingProfile
    ),
    enableReinitialize: true,
  });
  // console.log(formik.isSubmitting, formik.isValid);
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
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
              onBlur={formik.handleBlur}
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
              onBlur={formik.handleBlur}
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
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={
                formik.touched.email && formik.errors.email
                  ? formik.touched.email && formik.errors.email
                  : "Lưu ý: Khi thay đổi email, bạn cần phải xác nhận lại email"
              }
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
              onBlur={formik.handleBlur}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              autoComplete="mobile"
            />
            <TextField
              margin="normal"
              fullWidth
              name="address"
              label="Địa chỉ"
              type="text"
              id="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
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
                    onBlur={formik.handleBlur}
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
                    onBlur={formik.handleBlur}
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
            <Avatar src={avatarUrl} sx={{ width: 128, height: 128 }} />

            <label htmlFor="contained-button-file">
              <Input
                accept="image/*"
                id="contained-button-file"
                type="file"
                sx={{ display: "none" }}
                onChange={uploadAvatarHandler}
              />
              <Box sx={{ height: 4 }}>
                {isLoadingNewAvatar && <LinearProgress />}
              </Box>
              <Button
                component="span"
                variant="outlined"
                sx={{ flexGrow: 0, mt: 1 }}
              >
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
      <Box sx={{ width: "fit-content" }}>
        <Box
          sx={{
            height: 4,
          }}
        >
          {isLoadingProfile && <LinearProgress />}
        </Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 1, mb: 2, textAlign: "center" }}
          disabled={formik.isSubmitting || !formik.isValid}
        >
          Lưu thông tin
        </Button>
      </Box>
      {/*<Snackbar*/}
      {/*  open={openSnackbar}*/}
      {/*  autoHideDuration={6000}*/}
      {/*  onClose={handleCloseSnackbar}*/}
      {/*>*/}
      {/*  <Alert*/}
      {/*    onClose={handleCloseSnackbar}*/}
      {/*    severity={snackbarType}*/}
      {/*    sx={{ width: "100%" }}*/}
      {/*  >*/}
      {/*    {alertContent}*/}
      {/*  </Alert>*/}
      {/*</Snackbar>*/}
      <CommonSnackbar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        snackbarType={snackbarType}
        alertContent={alertContent}
      />
    </Box>
  );
};
export default Profile;
