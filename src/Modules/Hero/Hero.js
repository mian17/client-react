// React Imports
import * as React from "react";

// Source imports
import BannerSwiper from "./BannerSwiper/BannerSwiper";

// Mui imports
import Box from "@mui/material/Box";

// Swiper imports
import "swiper/css/pagination";

const Hero = () => {
  return (
    <Box component="section" sx={{ transition: "all 0.3s" }}>
      <BannerSwiper />
    </Box>
  );
};

export default Hero;
