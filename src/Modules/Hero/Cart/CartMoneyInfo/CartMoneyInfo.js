import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import * as React from "react";

const CartMoneyInfo = (props) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          pb: 1,
          alignItems: "center",
        }}
      >
        <Typography fontFamily="Libre Bodoni" component="h6" variant="h5">
          Tạm tính:
        </Typography>
        <Typography fontFamily="Libre Bodoni" component="h6" variant="h5">
          {props.totalCartMoney}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          pb: 2,
          alignItems: "center",
        }}
      >
        <Typography component="h6" variant="subtitle1">
          Phí ship:
        </Typography>
        <Typography component="h6" variant="subtitle1">
          Sẽ được tính khi thanh toán
        </Typography>
      </Box>
    </>
  );
};
export default CartMoneyInfo;
