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
import Avatar from "@mui/material/Avatar";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
const Profile = () => {
  const [dateValue, setDateValue] = React.useState(new Date());
  return (
    <Box
      component="form"
      // onSubmit={handleSubmit}
      noValidate
      sx={{ mt: 1 }}
    >
      <Grid container spacing={2}>
        <Grid item xl={8} md={8}>
          <Typography component="span" variant="h5">
            Hồ sơ của tôi
          </Typography>
          <Typography component="p" variant="subtitle2">
            Quản lý thông tin hồ sơ để bảo mật tài khoản
          </Typography>
          <Box>
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Tên đăng nhập"
              name="username"
              autoComplete="username"
            />
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Tên"
              name="name"
              autoComplete="name"
            />
            <TextField
              margin="normal"
              fullWidth
              name="email"
              label="Email"
              type="email"
              id="email"
              autoComplete="email"
            />
            <TextField
              margin="normal"
              fullWidth
              name="mobile"
              label="Số điện thoại"
              type="tel"
              id="mobile"
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
                    aria-labelledby="gender-radio-group"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Nữ"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Nam"
                    />
                    <FormControlLabel
                      value="other"
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
                    value={dateValue}
                    onChange={(newValue) => {
                      setDateValue(newValue);
                    }}
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
