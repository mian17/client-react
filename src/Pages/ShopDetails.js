import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import {
  product as dumpData1,
  categoricalProduct as product,
} from "../Modules/ShopDetails/shopdetails-test-data/product";
import Grid from "@mui/material/Grid";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { currencyFormatOptions } from "../utils/utils";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";

import { LazyLoadImage } from "react-lazy-load-image-component";

import "react-lazy-load-image-component/src/effects/blur.css";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Pagination } from "swiper";
import classes from "../Modules/Hero/Hero.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import ShopDetailsHeader from "../Modules/ShopDetails/ShopDetailsHeader/ShopDetailsHeader";
import ShopDetailsYouMayLike from "../Modules/ShopDetails/ShopDetailsYouMayLike/ShopDetailsYouMayLike";
const ShopDetails = () => {
  const theme = useTheme();
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <ShopDetailsHeader />

      {laptopScreenMatch && (
        <>
          <Breadcrumbs sx={{ pl: 4, py: 2 }}>
            <Link underline="hover" color="inherit" href="/product/all">
              Tất cả
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Trái cây
            </Link>
            <Link underline="hover" color="inherit" href="/">
              Táo nhập khẩu
            </Link>
            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>

          <Swiper
            slidesPerView={1}
            modules={[Pagination]}
            loop
            pagination={{
              clickable: true,
              type: "bullets",
              bulletActiveClass: `swiper-pagination-bullet-active ${classes["pagination-active"]}`,
              bulletClass: `swiper-pagination-bullet ${classes["pagination-normal"]}`,
            }}
            grabCursor
          >
            {product.gallery.map((image, index) => {
              return (
                <SwiperSlide key={index}>
                  <LazyLoadImage
                    src={image.url}
                    alt={image.alt}
                    effect="blur"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
      <Grid container sx={{ borderBottom: "1px solid #bdb498" }}>
        {!laptopScreenMatch && (
          <Grid item xl={7} lg={7} className="gallery" sx={{ mt: "30px" }}>
            {product.gallery.map((image, index) => {
              return (
                <LazyLoadImage
                  key={index}
                  src={image.url}
                  alt={image.alt}
                  effect="blur"
                />
              );
            })}
          </Grid>
        )}
        <Grid
          item
          xl={5}
          lg={5}
          sm={12}
          xs={12}
          sx={{
            position: laptopScreenMatch ? "relative" : "sticky",
            top: laptopScreenMatch ? null : 124,
            left: 0,
            bottom: 0,

            height: "fit-content",
            // width: "100%",
            px: !laptopScreenMatch ? 12 : 4,
            pt: !laptopScreenMatch ? 4 : 2,
            pb: 8,
          }}
          flexGrow={1}
        >
          <Box>
            <Box sx={{ mb: 2 }}>
              {!laptopScreenMatch && (
                <Breadcrumbs sx={{ mb: 8 }}>
                  <Link underline="hover" color="inherit" href="/product/all">
                    Tất cả
                  </Link>
                  <Link underline="hover" color="inherit" href="/">
                    Trái cây
                  </Link>
                  <Link underline="hover" color="inherit" href="/">
                    Táo nhập khẩu
                  </Link>
                  <Typography color="text.primary">{product.name}</Typography>
                </Breadcrumbs>
              )}
              <Typography
                fontFamily={"Libre Bodoni"}
                component="h1"
                variant={smallScreenMatch ? "h4" : "h3"}
              >
                {product.name}
              </Typography>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography component="p" variant="body" sx={{ mb: 0.4 }}>
                Nhà bán: {product.merchant}
              </Typography>
              <Typography component="p" variant="body">
                Thương hiệu: {product.brand}
              </Typography>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography component="p" variant="body" sx={{ mb: 0.4 }}>
                {product.description}
              </Typography>
            </Box>
            <Box sx={{ mb: 4 }}>
              {product.price < product.costPrice ? (
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Typography
                    component="h4"
                    variant="h5"
                    sx={{
                      color: "#ff6429",
                    }}
                  >
                    {new Intl.NumberFormat(
                      "vi-VN",
                      currencyFormatOptions
                    ).format(product.costPrice)}
                  </Typography>
                  <Typography
                    component="h4"
                    variant="h5"
                    sx={{
                      color: "inherit",

                      textDecoration: "line-through",
                    }}
                  >
                    {new Intl.NumberFormat(
                      "vi-VN",
                      currencyFormatOptions
                    ).format(product.price)}
                  </Typography>
                </Box>
              ) : (
                <Typography component="h4" variant="h5">
                  {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
                    product.price
                  )}
                </Typography>
              )}
            </Box>
            <Box sx={{ mb: 4 }}>
              <Button size="large" variant="contained">
                Thêm vào giỏ hàng
              </Button>
            </Box>
            <Box sx={{ mb: 4 }}>
              <Typography component="p" variant="caption">
                Thời gian giao hàng từ 1 - 2 ngày nếu ở nội thành. <br />
                Từ 3 - 4 ngày nếu ở ngoại thành.
              </Typography>
            </Box>
            <Accordion
              sx={{
                backgroundColor: "#f4f1e0",
                "::before": {
                  display: "none",
                },
                borderBottom: "1px solid #bdb498",
              }}
              elevation={0}
              square
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="product-details-content"
                id="product-details-header"
              >
                <Typography>Thông tin chi tiết</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ position: "relative" }}>
                <Typography>Table thông tin chi tiết</Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                backgroundColor: "#f4f1e0",
                "::before": {
                  display: "none",
                },
                borderBottom: "1px solid #bdb498",
              }}
              elevation={0}
              square
            >
              <AccordionSummary
                expandIcon={<AddIcon />}
                aria-controls="product-description-content"
                id="product-description-header"
              >
                <Typography>Mô tả sản phẩm</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ position: "relative" }}>
                <Typography>{product.description}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
      <ShopDetailsYouMayLike />
    </Box>
  );
};

export default ShopDetails;
