// Imports from React
// Imports from Swiper API (documentation link:https://swiperjs.com/react#installation=)
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

import "swiper/css/bundle";
import Box from "@mui/material/Box";

import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import EastIcon from "@mui/icons-material/East";
import { IconButton } from "@mui/material";
import { mostPopularCategoriesWithImage } from "../common/utils/mostPopularCategories-test-data/mostPopularCategoriesWithImage";
import { NavLink } from "react-router-dom";

const categoriesBreakpointsOption = {
  900: {
    slidesPerView: 3,
  },
};

const Categories = () => {
  const theme = useTheme();
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

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

  const backgroundProps = {
    backgroundSize: "cover",
    backgroundPosition: "center",

    height: "80vh",
  };
  return (
    <Box component="section">
      <Box
        breakpoints={categoriesBreakpointsOption}
        component={Swiper}
        loop={true}
        slidesPerView={1.4}
        modules={[Navigation]}
        sx={{ height: "80vh" }}
        watchOverflow={false}
      >
        {mostPopularCategoriesWithImage.map((category, index) => {
          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  ...backgroundProps,
                  backgroundImage: `linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26)), url(${category.imageUrl})`,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    textAlign: "center",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 100,
                  }}
                >
                  <Typography
                    fontFamily={"Libre Bodoni"}
                    color="#f4f1e0"
                    component="h3"
                    variant={smallScreenMatch ? "h5" : "h4"}
                    lineHeight={1.4}
                    sx={{ textTransform: "uppercase" }}
                    mb={2}
                  >
                    {category.title}
                  </Typography>
                </Box>
                <IconButton
                  component={NavLink}
                  to={`/category/${category.categoryId}`}
                  variant="outlined"
                  size={smallScreenMatch ? "small" : "medium"}
                  sx={{
                    color: "#f4f1e0",
                    border: "2px solid #f4f1e0",
                    position: "absolute",
                    bottom: 24,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    ":hover": {
                      color: "#f4f1e0",
                    },
                  }}
                  disableRipple
                >
                  <EastIcon />
                </IconButton>
              </Box>
            </SwiperSlide>
          );
        })}
      </Box>
    </Box>
  );
};

export default Categories;
