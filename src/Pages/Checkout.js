// import Breadcrumb from "../Modules/Breadcrumb/Breadcrumb";Bread

import {useFormik} from "formik";
import {NavLink, useNavigate} from "react-router-dom";
// import CheckoutOrder from "../Modules/CheckoutOrder/CheckoutOrder";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import CartContext from "../store/cart-context";
import * as React from "react";
import {useCallback, useContext, useEffect, useState} from "react";
import {currencyFormatOptions} from "../utils/utils";
import CheckoutCartItem from "../Modules/Checkout/CheckoutCartItem";
import Divider from "@mui/material/Divider";
import {ResponsiveContainer} from "recharts";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import {Select} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import {
  accordionDetailsSx,
  accordionSx,
  cartBoxInfoSx,
  cartBoxSx,
  checkoutFormCheckboxSx,
  checkoutFormHeadingSx,
  checkoutLogoHeadingColorSx,
  checkoutLogoHeadingLink,
  desktopCartSx,
  discountBoxSx,
  dividerMarginBottomSpacingSx,
  formInputSx,
  gridContainerSx,
  gridItemProps,
  logoLinkSx,
  logoTypographySx,
  totalMoneyCartBoxSx,
} from "../Modules/Checkout/styles/checkoutSx";

import apiClient from "../api";
import ProductToServer from "../Modules/Checkout/checkoutUtils/productToServer";
import AuthContext from "../store/auth-context";
import {orderSchema} from "../Modules/common/validationSchema/schema";
import autoCompleteBuyerInfo from "../Modules/Checkout/server/autoCompleteBuyerInfo";
import submitHandler from "../Modules/Checkout/server/submitHandler";

const Checkout = () => {
  const navigate = useNavigate();

  // Conditional styles
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));

  const accordionSummarySx = {
    maxWidth: 640,
    margin: "0 auto",
    px: tabletScreenMatch ? 2 : 8,
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(0deg)",
    },
  };

  const gridItemFormSx = {
    pt: 8,
    pl: 8,
    pr: 8,
    borderRight: tabletScreenMatch ? "" : "1px solid #bdb498",
  };

  // Get payment methods from server
  const [paymentMethods, setPaymentMethods] = useState([]);

  const getPaymentMethods = useCallback(() => {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      apiClient
          .get("api/payment-method")
          .then((response) => {
            setPaymentMethods(response.data);
          })
          .catch((err) => {
            console.log(err);
          });
    });
  }, []);

  const [discount, setDiscount] = useState(0);

  const cartCtx = useContext(CartContext);
  const cartTotalMoney = new Intl.NumberFormat(
      "vi-VN",
      currencyFormatOptions
  ).format(cartCtx.totalMoney - discount);

  const productsToDisplay = cartCtx.items;

  const products = cartCtx.items.map((item) => {
    const {productId, modelId, productQuantity, productPrice} = item;
    return new ProductToServer(
        productId,
        modelId,
        productQuantity,
        productPrice
    );
  });

  const {loggedIn} = useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(false);
  const [authorizedUserInfo, setAuthorizedUserInfo] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    paymentMethod: 1,
    totalMoney: cartCtx.totalMoney,
    cart: products,
  });

  // DO NOT UPDATE DEPENDENCY, WHICH WILL CAUSE INFINITE RERENDER

  function checkBoxOnChangeHandlerAndResetFormInputs(e) {
    setIsChecked(e.target.checked);
    if (e.target.checked === false) {
      setAuthorizedUserInfo((prevState) => {
        const newState = {...prevState};

        newState.name = "";
        newState.email = "";
        newState.phoneNumber = "";
        newState.address = "";
        newState.totalMoney = cartCtx.totalMoney;
        newState.cart = products;

        return newState;
      });
    }
  }

  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);
  const discountCodeOnChangeHandler = (e) => {
    setDiscountCode(e.target.value);
  };
  const [discountCodeError, setDiscountCodeError] = useState("");

  const formik = useFormik({
    initialValues: authorizedUserInfo,
    validationSchema: orderSchema,
    onSubmit: submitHandler(
        loggedIn,
        setPaymentMethods,
        discountCode,
        discountPercent,
        navigate,
        cartCtx.resetCart
    ),
    enableReinitialize: true,
  });

  useEffect(() => {
    getPaymentMethods();
    autoCompleteBuyerInfo(
        isChecked,
        loggedIn,
        setAuthorizedUserInfo,
        cartCtx,
        products
    );
  }, [getPaymentMethods, isChecked, loggedIn]);

  return (
      <ResponsiveContainer>
        <Grid
            container
            sx={gridContainerSx}
            component="form"
            onSubmit={formik.handleSubmit}
        >
          {tabletScreenMatch && (
              <Grid lg={12} md={12} sm={12} xs={12} item>
                <NavLink to="/" style={logoLinkSx}>
                  <Typography
                      component="h1"
                      sx={logoTypographySx}
                      variant="heading2"
                  >
                    Wieder_ Markt
                  </Typography>
                </NavLink>
                <Accordion elevation={0} disableGutters sx={accordionSx}>
                  <AccordionSummary
                      expandIcon={cartTotalMoney}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={accordionSummarySx}
                  >
                    <Box sx={{display: "flex", alignItems: "center", gap: 1}}>
                      <ShoppingCartOutlinedIcon/>
                      <Typography>Thông tin giỏ hàng</Typography>
                      <ExpandMoreIcon/>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails sx={accordionDetailsSx}>
                    <Box sx={cartBoxSx}>
                      {productsToDisplay.map((product, index) => (
                          <CheckoutCartItem key={index} product={product}/>
                      ))}
                    </Box>
                    <Divider sx={dividerMarginBottomSpacingSx}/>
                    {loggedIn && (
                        <>
                          <Box sx={discountBoxSx}>
                            <TextField
                                id="discount"
                                name="discount"
                                label="Mã giảm giá"
                                sx={{flexGrow: 1}}
                                onChange={discountCodeOnChangeHandler}
                                error={Boolean(discountCodeError)}
                                helperText={discountCodeError}
                            />
                            <Button
                                variant="contained"
                                onClick={() => {
                                  apiClient.get("/sanctum/csrf-cookie").then(() => {
                                    const userToken = JSON.parse(
                                        localStorage.getItem("personalAccessToken")
                                    );
                                    apiClient
                                        .post(
                                            "api/discount-code-check",
                                            {
                                              discount_code: discountCode,
                                              total: cartCtx.totalMoney,
                                            },
                                            {
                                              headers: {
                                                Authorization: `Bearer ${userToken}`,
                                              },
                                            }
                                        )
                                        .then((response) => {
                                          console.log(response);
                                          setDiscountCodeError("");
                                          const discountPercentFromServer =
                                              response.data.discount_percent;

                                          setDiscountPercent(discountPercentFromServer);
                                          setDiscount(
                                              discountPercentFromServer *
                                              0.01 *
                                              cartCtx.totalMoney
                                          );
                                        })
                                        .catch((err) => {
                                          setDiscountCodeError(err.response.data.message);
                                          console.log(err.response.data.message);
                                        });
                                  });
                                }}
                            >
                              Áp dụng
                            </Button>
                          </Box>
                          <Divider sx={dividerMarginBottomSpacingSx}/>
                        </>
                    )}

                    <Box sx={cartBoxInfoSx}>
                      <Typography component="p" variant="body1">
                        Tạm tính:
                      </Typography>
                      <Typography component="p" variant="body1">
                        {new Intl.NumberFormat(
                            "vi-VN",
                            currencyFormatOptions
                        ).format(cartCtx.totalMoney)}
                      </Typography>
                    </Box>
                    {discount > 0 && (
                        <Box sx={cartBoxInfoSx}>
                          <Typography component="p" variant="body1">
                            Tiết kiệm:
                          </Typography>

                          <Typography component="p" variant="body1">
                            {new Intl.NumberFormat(
                                "vi-VN",
                                currencyFormatOptions
                            ).format(discount)}
                          </Typography>
                        </Box>
                    )}
                    <Box sx={cartBoxInfoSx}>
                      <Typography component="p" variant="body1">
                        Phí vận chuyển:
                      </Typography>
                      <Typography component="p" variant="body1">
                        Sẽ được tính khi bạn nhập địa chỉ
                      </Typography>
                    </Box>
                    <Divider sx={dividerMarginBottomSpacingSx}/>
                    <Box sx={totalMoneyCartBoxSx}>
                      <Typography
                          component="p"
                          variant="h5"
                          fontFamily={"Libre Bodoni"}
                      >
                        Tổng tiền:
                      </Typography>
                      <Typography
                          component="p"
                          variant="h5"
                          fontFamily={"Libre Bodoni"}
                      >
                        {cartTotalMoney - discount}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              </Grid>
          )}
          <Grid {...gridItemProps} item sx={gridItemFormSx}>
            {!tabletScreenMatch && (
                <NavLink to="/" style={checkoutLogoHeadingLink}>
                  <Typography
                      component="h1"
                      sx={checkoutLogoHeadingColorSx}
                      variant="heading2"
                  >
                    Wieder_ Markt
                  </Typography>
                </NavLink>
            )}

            <Typography
                fontFamily={"Libre Bodoni"}
                component="h3"
                variant="heading1"
                sx={checkoutFormHeadingSx}
            >
              Địa chỉ nhận hàng
            </Typography>
            {loggedIn && (
                <FormControlLabel
                    control={
                      <Checkbox
                          defaultChecked={false}
                          onChange={checkBoxOnChangeHandlerAndResetFormInputs}
                      />
                    }
                    label="Người mua là chính bạn?"
                    sx={checkoutFormCheckboxSx}
                />
            )}

            <TextField
                id="name"
                name="name"
                label="Họ và tên"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={formInputSx}
                fullWidth
            />
            <TextField
                id="email"
                name="email"
                label="Email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={formInputSx}
                fullWidth
            />
            <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Số điện thoại"
                variant="outlined"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                    formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
                }
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                sx={formInputSx}
                fullWidth
            />
            <FormControl sx={{mb: 4}} fullWidth>
              <InputLabel id="paymentMethod">Phương thức thanh toán</InputLabel>
              <Select
                  labelId="paymentMethod"
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formik.values.paymentMethod}
                  label="Phương thức thanh toán"
                  onChange={formik.handleChange}
              >
                {paymentMethods &&
                    paymentMethods.map((paymentMethod, index) => {
                      return (
                          <MenuItem key={index} value={paymentMethod.id}>
                            {paymentMethod.name}
                          </MenuItem>
                      );
                    })}
              </Select>
            </FormControl>

            <TextField
                id="address"
                name="address"
                label="Địa chỉ"
                variant="outlined"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
                sx={formInputSx}
                fullWidth
            />

            <Box sx={{textAlign: "right"}}>
              <Button color="primary" variant="contained" type="submit">
                Thanh toán
              </Button>
            </Box>
          </Grid>
          {!tabletScreenMatch && (
              <Grid lg={6} md={6} item sx={desktopCartSx}>
                <Box sx={cartBoxSx}>
                  {productsToDisplay.map((product, index) => (
                      <CheckoutCartItem key={index} product={product}/>
                  ))}
                </Box>
                <Divider sx={dividerMarginBottomSpacingSx}/>
                {loggedIn && (
                    <>
                      <Box sx={discountBoxSx}>
                        <TextField
                            id="discount"
                            name="discount"
                            label="Mã giảm giá"
                            sx={{flexGrow: 1}}
                            onChange={discountCodeOnChangeHandler}
                            error={Boolean(discountCodeError)}
                            helperText={discountCodeError}
                        />
                        <Button
                            variant="contained"
                            onClick={() => {
                              apiClient.get("/sanctum/csrf-cookie").then(() => {
                                const userToken = JSON.parse(
                                    localStorage.getItem("personalAccessToken")
                                );
                                apiClient
                                    .post(
                                        "api/discount-code-check",
                                        {
                                          discount_code: discountCode,
                                          total: cartCtx.totalMoney,
                                        },
                                        {
                                          headers: {
                                            Authorization: `Bearer ${userToken}`,
                                          },
                                        }
                                    )
                                    .then((response) => {
                                      console.log(response);
                                      setDiscountCodeError("");
                                      const discountPercentFromServer =
                                          response.data.discount_percent;

                                      setDiscountPercent(discountPercentFromServer);
                                      setDiscount(
                                          discountPercentFromServer *
                                          0.01 *
                                          cartCtx.totalMoney
                                      );
                                    })
                                    .catch((err) => {
                                      setDiscountCodeError(err.response.data.message);
                                      console.log(err.response.data.message);
                                    });
                              });
                            }}
                        >
                          Áp dụng
                        </Button>
                      </Box>
                      <Divider sx={dividerMarginBottomSpacingSx}/>
                    </>
                )}

                <Box sx={cartBoxInfoSx}>
                  <Typography component="p" variant="body1">
                    Tạm tính:
                  </Typography>

                  <Typography component="p" variant="body1">
                    {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
                        cartCtx.totalMoney
                    )}
                  </Typography>
                </Box>
                {discount > 0 && (
                    <Box sx={cartBoxInfoSx}>
                      <Typography component="p" variant="body1">
                        Tiết kiệm:
                      </Typography>

                      <Typography component="p" variant="body1">
                        -{" "}
                        {new Intl.NumberFormat("vi-VN", currencyFormatOptions).format(
                            discount
                        )}
                      </Typography>
                    </Box>
                )}

                <Box sx={cartBoxInfoSx}>
                  <Typography component="p" variant="body1">
                    Phí vận chuyển:
                  </Typography>
                  <Typography component="p" variant="body1">
                    Sẽ được tính khi bạn nhập địa chỉ
                  </Typography>
                </Box>
                <Divider sx={dividerMarginBottomSpacingSx}/>
                <Box sx={totalMoneyCartBoxSx}>
                  <Typography
                      component="p"
                      variant="h5"
                      fontFamily={"Libre Bodoni"}
                  >
                    Tổng tiền:
                  </Typography>
                  <Typography
                      component="p"
                      variant="h5"
                      fontFamily={"Libre Bodoni"}
                  >
                    {cartTotalMoney}
                  </Typography>
                </Box>
              </Grid>
          )}
        </Grid>
      </ResponsiveContainer>
  );
};
export default Checkout;
