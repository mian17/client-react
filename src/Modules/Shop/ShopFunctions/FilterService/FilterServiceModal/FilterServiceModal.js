import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import { FormLabel, Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as PropTypes from "prop-types";
import * as React from "react";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";

export default function FilterServiceModal(props) {
  const laptopScreenMatch = useMediaQuery("(max-width: 707px)");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: laptopScreenMatch ? "100%" : 707,
    bgcolor: "#f4f1e0",
    border: "2px solid #eee",
    boxShadow: 24,
    p: 5,

    borderRadius: 3,
  };

  const [filteredValue, setFilteredValue] = useState("");
  const radioButtonChangeHandler = (event) => {
    setFilteredValue(event.target.value);
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      keepMounted
      aria-labelledby="Lọc và sắp xếp"
      aria-describedby="Lọc và sắp xếp các sản phẩm theo ý muốn của người dùng"
      disableScrollLock
    >
      <Fade in={props.open}>
        <Paper sx={style}>
          <IconButton
            onClick={props.onClose}
            sx={{ position: "absolute", right: 21, top: 24 }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ mb: 4 }}>
            <Typography component="h4" variant="h4" fontFamily={"Libre Bodoni"}>
              Lọc sản phẩm:
            </Typography>
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h5"
                variant="body"
                fontFamily={"Libre Bodoni"}
                sx={{ mt: 2, mb: 1 }}
              >
                Dịch vụ
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {["Freeship", "Giao nhanh"].map((city, index) => {
                  return (
                    <Button
                      key={index}
                      sx={{
                        textTransform: "capitalize",

                        fontSize: 14,
                        px: 1,
                        flexBasis: 120,
                      }}
                      variant="outlined"
                    >
                      {city}
                    </Button>
                  );
                })}
              </Box>
            </Box>
            <Box sx={{ mb: 3 }}>
              <Typography
                component="h5"
                variant="body"
                fontFamily={"Libre Bodoni"}
                sx={{ mt: 2, mb: 1 }}
              >
                Nơi bán
              </Typography>
              <Grid container spacing={2}>
                {["TP.HCM", "Hà Nội", "Cần Thơ", "Đà Nẵng", "Khánh Hòa"].map(
                  (city, index) => {
                    return (
                      <Grid key={index} item>
                        <Button
                          sx={{
                            textTransform: "capitalize",
                            flexBasis: 120,
                            fontSize: 14,
                            px: 1,
                          }}
                          variant="outlined"
                        >
                          {city}
                        </Button>
                      </Grid>
                    );
                  }
                )}
                <Grid item>
                  <Button
                    sx={{
                      textTransform: "capitalize",
                      flexBasis: 120,
                      fontSize: 14,
                      px: 1,
                    }}
                    variant="outlined"
                  >
                    Xem thêm
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormControl>
              <FormLabel id="sort-by">
                <Typography
                  component="h5"
                  variant="h4"
                  fontFamily={"Libre Bodoni"}
                >
                  Sắp xếp theo:
                </Typography>
              </FormLabel>
              <RadioGroup
                aria-labelledby="sort-by"
                value={filteredValue}
                onChange={radioButtonChangeHandler}
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="featured"
                  control={<Radio />}
                  label="Nổi bật"
                />
                <FormControlLabel
                  value="low-to-high"
                  control={<Radio />}
                  label="Giá từ thấp đến cao"
                />
                <FormControlLabel
                  value="high-to-low"
                  control={<Radio />}
                  label="Giá từ cao đến thấp"
                />
              </RadioGroup>
            </FormControl>
          </Box>

          <Button
            size="large"
            variant="contained"
            sx={{ mb: 2 }}
            fullWidth
            onClick={props.onClose}
          >
            Áp dụng
          </Button>
          <Button
            size="large"
            variant="outlined"
            fullWidth
            onClick={props.onClose}
          >
            Thiết lập lại
          </Button>
        </Paper>
      </Fade>
    </Modal>
  );
}

FilterServiceModal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,

  value: PropTypes.any,
  onChange: PropTypes.func,
};
