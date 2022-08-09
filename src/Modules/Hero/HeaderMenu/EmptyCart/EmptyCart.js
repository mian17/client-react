import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { mostPopularCategories as mostPopularCategoriesDumpData } from "../../../common/utils/mostPopularCategories-test-data/mostPopularCategories";
const EmptyCart = (props) => {
  const [mostPopularCategories, setMostPopularCategories] = useState(
    mostPopularCategoriesDumpData
  );
  // Ready for API connection
  // const [error, setError] = useState(null);
  // const fetchCategories = useCallback(async () => {
  //   setError(null);
  //   try {
  //     // Get from api
  //     const response = await fetch("https://example.com");
  //     if (!response.ok) {
  //       throw new Error("Không lấy được dữ liệu");
  //     }
  //
  //     const data = await response.json();
  //     // console.log(data);
  //     const transformedCategory = data.map((categoryData) => {
  //       return new Category()
  //     });
  //
  //     setCategories(transformedCategory);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  //
  // }, []);
  // Request categories
  // useEffect(() => {
  //     fetchCategories();
  // }, [fetchCategories]);

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
        <Button
          component={NavLink}
          to="/product/all"
          size="large"
          sx={{
            width: "fit-content",
            ":hover": {
              color: "inherit",
            },
          }}
          variant="outlined"
        >
          Xem tất cả sản phẩm
        </Button>
        {mostPopularCategories.map((category, index) => {
          return (
            <Button
              key={index}
              component={NavLink}
              to={category.url}
              size="large"
              sx={{
                width: "fit-content",
                ":hover": {
                  color: "inherit",
                },
              }}
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
