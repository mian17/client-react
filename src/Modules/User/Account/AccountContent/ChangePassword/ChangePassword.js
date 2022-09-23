import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import FormControl from "@mui/material/FormControl";
import {
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Skeleton,
} from "@mui/material";

import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import { useFormik } from "formik";
import { changePasswordSchema } from "../../../../common/validationSchema/schema";
import apiClient from "../../../../../api";
import ChangePasswordToServer from "./changePasswordUtils/ChangePasswordToServer";

const Alert = React.lazy(() => import("@mui/material/Alert"));
const Collapse = React.lazy(() => import("@mui/material/Collapse"));

const ChangePassword = () => {
  const [alertState, setAlertState] = useState(false);
  const [alertContent, setAlertContent] = useState({
    title: "",
    content: "",
  });
  const [hasError, setHasError] = useState(false);

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      reEnterNewPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: (values) => {
      const { oldPassword, newPassword, reEnterNewPassword } = values;

      apiClient.get("/sanctum/csrf-cookie").then(() => {
        const userToken = JSON.parse(
          localStorage.getItem("personalAccessToken")
        );
        apiClient
          .patch(
            "api/user-change-password/",
            new ChangePasswordToServer(
              oldPassword,
              newPassword,
              reEnterNewPassword
            ),
            {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          )
          .then((response) => {
            setAlertContent({
              title: "Thành công",
              message: response.data.message,
            });
            setHasError(false);
          })
          .catch((error) => {
            setAlertContent({
              title: "Có lỗi đã xảy ra",
              message: error.response.data.message,
            });
            setHasError(true);
          })
          .then(() => {
            setAlertState(true);
          });
      });

      setAlertState(true);
      formik.resetForm({
        values: {
          oldPassword: "",
          newPassword: "",
          reEnterNewPassword: "",
        },
      });
    },
  });

  const [values, setValues] = useState({
    showOldPassword: false,
    showNewPassword: false,
    showReEnterNewPassword: false,
  });

  const handleClickShowOldPassword = () => {
    setValues({
      ...values,
      showOldPassword: !values.showOldPassword,
    });
  };
  const handleClickShowNewPassword = () => {
    setValues({
      ...values,
      showNewPassword: !values.showNewPassword,
    });
  };
  const handleClickShowReEnterNewPassword = () => {
    setValues({
      ...values,
      showReEnterNewPassword: !values.showReEnterNewPassword,
    });
  };
  const handleMouseDownOldPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownNewPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownReEnterNewPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      // noValidate
      sx={{ mt: 1 }}
    >
      <Typography component="span" variant="h5">
        Đổi mật khẩu
      </Typography>
      <Typography component="p" variant="subtitle2">
        Thay đổi mật khẩu để bảo vệ tài khoản của bạn
      </Typography>
      <Box m={1}>
        <Box sx={{ width: "100%" }}>
          <React.Suspense fallback={<Skeleton animation="wave" />}>
            <Collapse in={alertState}>
              <Alert
                severity={hasError ? "error" : "success"}
                onClose={() => {
                  setAlertState(false);
                }}
              >
                {alertContent.message}
              </Alert>
            </Collapse>
          </React.Suspense>
          <FormControl
            margin="normal"
            sx={{ minWidth: "50%" }}
            variant="outlined"
          >
            <InputLabel
              error={
                formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
              }
              htmlFor="oldPassword"
            >
              Mật khẩu cũ
            </InputLabel>
            <OutlinedInput
              id="oldPassword"
              name="oldPassword"
              type={values.showOldPassword ? "text" : "password"}
              value={formik.values.oldPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowOldPassword}
                    onMouseDown={handleMouseDownOldPassword}
                    edge="end"
                    color={
                      formik.touched.oldPassword &&
                      Boolean(formik.errors.oldPassword)
                        ? "error"
                        : undefined
                    }
                  >
                    {values.showOldPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Old Password"
              autoFocus
              required
            />

            <FormHelperText
              error={
                formik.touched.oldPassword && Boolean(formik.errors.oldPassword)
              }
            >
              {formik.errors.oldPassword}
            </FormHelperText>
          </FormControl>
        </Box>
        <Box sx={{ width: "100%" }}>
          <FormControl
            margin="normal"
            sx={{ minWidth: "50%" }}
            variant="outlined"
          >
            <InputLabel
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
              htmlFor="newPassword"
            >
              Mật khẩu mới
            </InputLabel>
            <OutlinedInput
              id="newPassword"
              name="newPassword"
              type={values.showNewPassword ? "text" : "password"}
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
              required
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    onMouseDown={handleMouseDownNewPassword}
                    edge="end"
                    color={
                      formik.touched.newPassword &&
                      Boolean(formik.errors.newPassword)
                        ? "error"
                        : undefined
                    }
                  >
                    {values.showNewPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="New Password"
            />
            <FormHelperText
              error={
                formik.touched.newPassword && Boolean(formik.errors.newPassword)
              }
            >
              {formik.errors.newPassword}
            </FormHelperText>
          </FormControl>
        </Box>
        <FormControl
          margin="normal"
          sx={{ minWidth: "50%" }}
          variant="outlined"
        >
          <InputLabel
            error={
              formik.touched.reEnterNewPassword &&
              Boolean(formik.errors.reEnterNewPassword)
            }
            htmlFor="reEnterNewPassword"
          >
            Nhập lại mật khẩu mới
          </InputLabel>
          <OutlinedInput
            id="reEnterNewPassword"
            name="reEnterNewPassword"
            type={values.showReEnterNewPassword ? "text" : "password"}
            value={formik.values.reEnterNewPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.reEnterNewPassword &&
              Boolean(formik.errors.reEnterNewPassword)
            }
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowReEnterNewPassword}
                  onMouseDown={handleMouseDownReEnterNewPassword}
                  edge="end"
                  color={
                    formik.touched.reEnterNewPassword &&
                    Boolean(formik.errors.reEnterNewPassword)
                      ? "error"
                      : undefined
                  }
                >
                  {values.showReEnterNewPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="Re-enter New Password"
          />

          <FormHelperText
            error={
              formik.touched.reEnterNewPassword &&
              Boolean(formik.errors.reEnterNewPassword)
            }
          >
            {formik.errors.reEnterNewPassword}
          </FormHelperText>
        </FormControl>
      </Box>

      <Button
        type="submit"
        variant="contained"
        sx={{ mt: 3, mb: 2, textAlign: "center" }}
      >
        Thay đổi mật khẩu
      </Button>
    </Box>
  );
};
export default ChangePassword;
