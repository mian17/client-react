import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";

const EmptyCart = (props) => {
  return (
    <Box mt={24} sx={{ textAlign: "center" }}>
      <Typography fontFamily="Libre Bodoni" component="h3" variant="h4" mb={2}>
        Giỏ hàng trống
      </Typography>
      <Typography fontFamily="Inter" component="h5" mb={4}>
        Bạn hãy tiếp tục mua thêm sản phẩm nhé!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          alignItems: "center",
        }}
      >
        <Button size="large" sx={{ width: "fit-content" }} variant="outlined">
          Xem tất cả sản phẩm
        </Button>
        {props.mostPopularCategories.map((category, index) => {
          return (
            <Button
              key={index}
              size="large"
              sx={{ width: "fit-content" }}
              variant="outlined"
            >
              {category.name}
            </Button>
          );
        })}
      </Box>
    </Box>
  );
};
export default EmptyCart;
