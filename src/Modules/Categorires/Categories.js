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

const categoriesBreakpointsOption = {
  900: {
    slidesPerView: 3,
  },
};

const Categories = () => {
  const theme = useTheme();
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

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
        <SwiperSlide>
          <Box
            sx={{
              ...backgroundProps,
              backgroundImage:
                "linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26)), url('/img/categories/category-banners/rice.jpg')",
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
                Sắm gạo
              </Typography>
            </Box>
            <IconButton
              variant="outlined"
              size={smallScreenMatch ? "small" : "medium"}
              sx={{
                color: "#f4f1e0",
                border: "2px solid #f4f1e0",
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              disableRipple
            >
              <EastIcon />
            </IconButton>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              ...backgroundProps,
              backgroundImage:
                "linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26)), url('/img/categories/category-banners/fruits.jpg')",
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
                Sắm trái cây
              </Typography>
            </Box>
            <IconButton
              variant="outlined"
              size={smallScreenMatch ? "small" : "medium"}
              sx={{
                color: "#f4f1e0",
                border: "2px solid #f4f1e0",
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              disableRipple
            >
              <EastIcon />
            </IconButton>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            sx={{
              ...backgroundProps,
              backgroundImage:
                "linear-gradient(rgba(85, 85, 85, 0.266), rgba(85, 85, 85, 0.26)), url('/img/categories/category-banners/meat.jpg')",
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
                Sắm thịt
              </Typography>
            </Box>
            <IconButton
              size={smallScreenMatch ? "small" : "medium"}
              variant="outlined"
              sx={{
                color: "#f4f1e0",
                border: "2px solid #f4f1e0",
                position: "absolute",
                bottom: 24,
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              disableRipple
            >
              <EastIcon />
            </IconButton>
          </Box>
        </SwiperSlide>
      </Box>
    </Box>
  );
};

export default Categories;
