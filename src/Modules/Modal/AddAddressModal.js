import * as React from "react";
import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IconButton, Radio } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";

import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required("Không để trống họ tên"),
  phoneNumber: yup
    .string()
    .trim()
    .min(10, "Số điện thoại cần dài hơn 10 ký tự")
    .required("Không để trống số điện thoại"),
  overallAddress: yup
    .string()
    .max(100, "Địa chỉ tổng quát không được dài hơn 100 ký tự")
    .required("Không để trống địa chỉ tổng quát"),
  detailAddress: yup
    .string()
    .max(100, "Địa chỉ chi tiết không được dài hơn 100 ký tự")
    .required("Không để trống địa chỉ chi tiết"),
  addressCategory: yup
    .string()
    .required("Bạn cần chọn một trong hai loại địa chỉ trên"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 375,
  bgcolor: "background.paper",
  border: "1px solid #eee",
  boxShadow: 24,
  p: 4,
  borderRadius: 9,
};

export default function AddAddressModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      overallAddress: "",
      detailAddress: "",
      addressCategory: "home",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  useEffect(() => {
    props.openModalChildFunction.current = handleOpen;
  }, [props.openModalChildFunction]);

  return (
    <>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                position: "relative",
                m: 1,
              }}
            >
              <IconButton
                sx={{ position: "absolute", top: "-7px", right: "0px" }}
                onClick={handleClose}
              >
                <CloseIcon />
              </IconButton>

              <Typography component="h2" variant="h5" mb={2}>
                Thêm địa chỉ mới
              </Typography>
              <Box component="form" onSubmit={formik.handleSubmit}>
                <Box sx={{ display: "flex", gap: "4%" }}>
                  <TextField
                    margin="normal"
                    id="name"
                    label="Họ và tên"
                    name="name"
                    autoComplete="name"
                    size="small"
                    autoFocus
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                  <TextField
                    margin="normal"
                    name="phoneNumber"
                    label="Số điện thoại"
                    type="text"
                    id="phoneNumber"
                    autoComplete="mobile"
                    size="small"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.phoneNumber &&
                      Boolean(formik.errors.phoneNumber)
                    }
                    helperText={
                      formik.touched.phoneNumber && formik.errors.phoneNumber
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    margin="normal"
                    name="overallAddress"
                    label="Phường/ Xã, Quận/ Huyện, Tỉnh/ Thành phố"
                    type="text"
                    id="overallAddress"
                    autoComplete="address"
                    size="small"
                    fullWidth
                    value={formik.values.overallAddress}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.overallAddress &&
                      Boolean(formik.errors.overallAddress)
                    }
                    helperText={
                      formik.touched.overallAddress &&
                      formik.errors.overallAddress
                    }
                  />
                </Box>
                <Box>
                  <TextField
                    margin="normal"
                    name="detailAddress"
                    label="Địa chỉ cụ thể"
                    type="text"
                    id="detailAddress"
                    autoComplete="address"
                    size="small"
                    multiline
                    fullWidth
                    rows={4}
                    value={formik.values.detailAddress}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.detailAddress &&
                      Boolean(formik.errors.detailAddress)
                    }
                    helperText={
                      formik.touched.detailAddress &&
                      formik.errors.detailAddress
                    }
                  />
                </Box>
                <Box sx={{ marginY: 2, marginX: 1 }}>
                  {/*0 for home, 1 for workplace*/}
                  <FormControl>
                    <FormLabel id="address-category">Loại địa chỉ</FormLabel>
                    <RadioGroup
                      sx={{ alignItems: "center" }}
                      row
                      aria-labelledby="address-category"
                      name="addressCategory"
                      onChange={formik.handleChange}
                      value={formik.values.addressCategory}
                      defaultValue="0"
                      error={
                        formik.touched.addressCategory &&
                        Boolean(formik.errors.addressCategory)
                      }
                      helperText={
                        formik.touched.addressCategory &&
                        formik.errors.addressCategory
                      }
                    >
                      <FormControlLabel
                        value="0"
                        control={<Radio />}
                        label="Nhà riêng"
                      />
                      <FormControlLabel
                        value="1"
                        control={<Radio />}
                        label="Cơ quan"
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>

                <Button type="submit" variant="contained">
                  Thêm địa chỉ mới
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
