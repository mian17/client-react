import React, {useCallback, useContext, useEffect, useState} from "react";
import Box from "@mui/material/Box";
// import {
//   product as dumpData1,
//   categoricalProduct as product,
// } from "../Modules/ShopDetails/shopdetails-test-data/product";
import Grid from "@mui/material/Grid";

// import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import {currencyFormatOptions} from "../utils/utils";
import Button from "@mui/material/Button";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AddIcon from "@mui/icons-material/Add";

import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {Pagination} from "swiper";
import classes from "../Modules/Hero/Hero.module.css";
import {Swiper, SwiperSlide} from "swiper/react";
import ShopDetailsHeader from "../Modules/ShopDetails/ShopDetailsHeader/ShopDetailsHeader";
import ShopDetailsYouMayLike from "../Modules/ShopDetails/ShopDetailsYouMayLike/ShopDetailsYouMayLike";
import apiClient from "../api";
import {useLocation, useParams} from "react-router-dom";
import ProductStateToAddToCart from "../Modules/Product/ProductItemInfo/utils/productStateToAddToCart";
import {backendServerPath} from "../Modules/common/utils/backendServerPath";
import CartContext from "../store/cart-context";
import Footer from "../Widgets/Footer";

const ShopDetails = () => {
  const theme = useTheme();
  const laptopScreenMatch = useMediaQuery(theme.breakpoints.down("lg"));
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const [productTitle, setProductTitle] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productSummary, setProductSummary] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productCostPrice, setProductCostPrice] = useState(0);
  const [productDetailInfo, setProductDetailInfo] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [gallery, setGallery] = useState([]);

  const {id: paramProductId} = useParams();

  const [productId, setProductId] = useState(0);
  const [modelId, setModelId] = useState(undefined);

  const [defaultImageForCart, setDefaultImageForCart] = useState("");

  const [selectedProduct, setSelectedProduct] = useState({});

  const [models, setModels] = useState(undefined);

  const cartCtx = useContext(CartContext);

  const [clickedButtons, setClickedButtons] = useState(undefined);

  const fetchProductData = useCallback(() => {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
      apiClient
          .get(`api/product/${paramProductId}`, {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((response) => {
            // 1 model case
            const product = response.data.product;

            setProductTitle(product.name);
            setProductBrand(product.brand);
            setProductSummary(product.summary);
            setProductPrice(product.price);
            setProductCostPrice(product.cost_price);
            setProductDetailInfo(product.detail_info);
            setProductDescription(product.desc);

            if (product.kinds && product.kinds.length === 1) {
              setProductId(product.id);
              setModelId(product.kinds[0].id);

              const images = product.kinds[0].images.map(
                  (image) => backendServerPath + image.url
              );
              setGallery(images);

              setDefaultImageForCart(
                  backendServerPath + product.kinds[0].image_1
              );

              setSelectedProduct(
                  new ProductStateToAddToCart(
                      productId,
                      modelId,
                      defaultImageForCart,
                      productTitle,
                      productPrice,
                      1
                  )
              );
            } else if (product.kinds.length > 1) {
              setProductId(product.id);

              const kinds = product.kinds.map((kind) => {
                return {name: kind.name, modelId: kind.id};
              });

              setModels(kinds);

              if (models && clickedButtons === undefined)
                setClickedButtons(
                    new Array(models.length)
                        .fill(true, 0, 1)
                        .fill(false, 1, models.length)
                );

              if (!modelId) setModelId(models[0].modelId);

              if (modelId) {
                const images = product.kinds
                    .find((kind) => kind.id === modelId)
                    .images.map((image) => backendServerPath + image.url);
                setGallery(images);
              }

              if (product.kinds && modelId) {
                setDefaultImageForCart(
                    backendServerPath +
                    product.kinds.find((kind) => kind.id === modelId).image_1
                );
              }

              const modelName = models.find((model) => {
                return model.modelId === modelId;
              })?.name;

              setSelectedProduct(
                  new ProductStateToAddToCart(
                      productId,
                      modelId,
                      defaultImageForCart,
                      modelName,
                      productPrice,
                      1
                  )
              );
            }
          })
          .catch((err) => {
            console.log(err);
          });
    });
  }, [
    clickedButtons,
    defaultImageForCart,
    modelId,
    // models,
    paramProductId,
    productId,
    productPrice,
    productTitle,
  ]);

  useEffect(() => {
    fetchProductData();
  }, [fetchProductData]);

  const {pathname} = useLocation();
  console.log(pathname);

  return (
      <Box>
        <ShopDetailsHeader/>

        {laptopScreenMatch && (
            <>
              {/*<Breadcrumbs sx={{ pl: 4, py: 2 }}>*/}
              {/*  <Link underline="hover" color="inherit" href="/product/all">*/}
              {/*    Tất cả*/}
              {/*  </Link>*/}
              {/*  <Link underline="hover" color="inherit" href="/">*/}
              {/*    Trái cây*/}
              {/*  </Link>*/}
              {/*  <Link underline="hover" color="inherit" href="/">*/}
              {/*    Táo nhập khẩu*/}
              {/*  </Link>*/}
              {/*  /!*<Typography color="text.primary">{product.name}</Typography>*!/*/}
              {/*</Breadcrumbs>*/}

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
                {gallery.map((url, index) => {
                  return (
                      <SwiperSlide key={index}>
                        <div
                            // src={url}
                            // alt={""}
                            style={{
                              background: `url(${url}) no-repeat center/cover`,
                              minHeight: "400px",
                              minWidth: "400px",
                            }}
                        />
                      </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
      <Grid container sx={{ borderBottom: "1px solid #bdb498" }}>
        {!laptopScreenMatch && (
            <Grid item xl={7} lg={7} className="gallery" sx={{mt: "30px"}}>
              {gallery.map((url, index) => {
                return <img key={index} src={url} alt=""/>;
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
            <Box sx={{mb: 2}}>
              {/*{!laptopScreenMatch && (*/}
              {/*  <Breadcrumbs sx={{ mb: 8 }}>*/}
              {/*    <Link underline="hover" color="inherit" href="/product/all">*/}
              {/*      Tất cả*/}
              {/*    </Link>*/}
              {/*    <Link underline="hover" color="inherit" href="/">*/}
              {/*      Trái cây*/}
              {/*    </Link>*/}
              {/*    <Link underline="hover" color="inherit" href="/">*/}
              {/*      Táo nhập khẩu*/}
              {/*    </Link>*/}
              {/*    /!*<Typography color="text.primary">{product.name}</Typography>*!/*/}
              {/*  </Breadcrumbs>*/}
              {/*)}*/}
              <Typography
                  fontFamily={"Libre Bodoni"}
                  component="h1"
                  variant={smallScreenMatch ? "h4" : "h3"}
              >
                {productTitle}
              </Typography>
            </Box>
            <Box sx={{mb: 4}}>
              {/*<Typography component="p" variant="body" sx={{ mb: 0.4 }}>*/}
              {/*  Nhà bán: {product.merchant}*/}
              {/*</Typography>*/}
              <Typography component="p" variant="body">
                Thương hiệu: {productBrand}
              </Typography>
            </Box>

            <Box sx={{mb: 4}}>
              <Typography component="p" variant="body" sx={{mb: 0.4}}>
                {productSummary}
              </Typography>
            </Box>
            <Box sx={{mb: 4}}>
              {models &&
                  models.map((model, index) => {
                    const selectedModelId = model.modelId;
                    return (
                        <Button
                            key={index}
                            variant="text"
                            sx={{
                              textTransform: "capitalize",

                              textDecoration:
                                  clickedButtons && clickedButtons[index]
                                      ? "underline"
                                      : "none",

                              "&:hover": {
                                textDecoration:
                                    clickedButtons && clickedButtons[index]
                                        ? "underline"
                                        : "none",
                              },
                            }}
                            onClick={() => {
                              setClickedButtons((prevState) => {
                                const newState = [...prevState];
                                newState.fill(false);
                                newState[index] = !newState[index];
                                return newState;
                              });
                              setModelId(selectedModelId);
                            }}
                        >
                          {model.name}
                        </Button>
                    );
                  })}
            </Box>
            <Box sx={{mb: 4}}>
              {productPrice < productCostPrice ? (
                  <Box sx={{display: "flex", gap: 3}}>
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
                      ).format(productPrice)}
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
                    ).format(productCostPrice)}
                  </Typography>
                  </Box>
              ) : (
                  <Typography component="h4" variant="h5">
                    {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
                        productPrice
                    )}
                  </Typography>
              )}
            </Box>
            <Box sx={{mb: 4}}>
              <Button
                  size="large"
                  variant="contained"
                  onClick={() => {
                    cartCtx.addItem(selectedProduct);
                  }}
              >
                Thêm vào giỏ hàng
              </Button>
            </Box>
            <Box sx={{mb: 4}}>
              <Typography component="p" variant="caption">
                Thời gian giao hàng từ 1 - 2 ngày nếu ở nội thành. <br/>
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
                <Typography>{productDetailInfo}</Typography>
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
                <Typography>{productDescription}</Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Grid>
      </Grid>
        <ShopDetailsYouMayLike/>
        <Footer/>
    </Box>
  );
};

export default ShopDetails;
