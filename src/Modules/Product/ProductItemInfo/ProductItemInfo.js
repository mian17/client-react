import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { currencyFormatOptions } from "../../../utils/utils";
import ProductItemCategoricalList from "./ProductItemCategoricalList/ProductItemCategoricalList";

const ProductItemInfo = (props) => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const formattedProductPrice = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(props.product.price);

  let formattedDiscountedPrice = undefined;
  if (props.product.statusCode === 2) {
    if (!props.product.hasOwnProperty("discountedPrice")) {
      console.log(
        "Please check again in the source code if props.product does not have discountedPrice property for " +
          props.product.productId
      );
    } else {
      formattedDiscountedPrice = new Intl.NumberFormat(
        "vi-VN",
        currencyFormatOptions
      ).format(props.product.discountedPrice);
    }
  }
  const productNameFontSize = smallScreenMatch ? 14 : null;
  const infoFontSize = smallScreenMatch ? 10 : null;

  const isSelectable =
    props.product.isSelectable &&
    props.product.hasOwnProperty("colorCode") &&
    props.product.hasOwnProperty("categoryImages") &&
    props.product.categoryImages.length > 0;

  const getSelectedCategoryPosition = (position) => {
    props.getSelectedCategoryPositionForImageChange(position);
  };

  return (
    <Box
      m={2}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 1,
      }}
    >
      <Box>
        <Typography
          component="h5"
          variant={tabletScreenMatch ? "body" : "h6"}
          sx={{
            fontWeight: 700,
            lineHeight: 1.2,
            fontSize: productNameFontSize,
          }}
          fontFamily="Libre Bodoni"
        >
          {props.product.productName}
        </Typography>
        {isSelectable && (
          <ProductItemCategoricalList
            getSelectedCategoryPosition={getSelectedCategoryPosition}
            product={props.product}
          />
        )}
      </Box>
      <Box>
        {props.product.statusCode === 2 &&
        props.product.hasOwnProperty("discountedPrice") ? (
          <>
            <Typography
              component="p"
              variant="body"
              textAlign="right"
              sx={{
                color: "inherit",
                fontSize: infoFontSize,
                textDecoration: "line-through",
              }}
            >
              {formattedProductPrice}
            </Typography>
            <Typography
              component="p"
              variant="body"
              textAlign="right"
              sx={{
                color: "#ff6429",
                fontSize: infoFontSize,
              }}
            >
              {formattedDiscountedPrice}
            </Typography>
          </>
        ) : (
          <>
            <Typography
              component="p"
              variant="body"
              textAlign="right"
              sx={{
                color: "inherit",
                fontSize: infoFontSize,
              }}
            >
              &nbsp;
            </Typography>
            <Typography
              component="p"
              variant="body"
              textAlign="right"
              sx={{
                color: "inherit",
                fontSize: infoFontSize,
              }}
            >
              {formattedProductPrice}
            </Typography>
          </>
        )}
        <ButtonBase
          variant="text"
          size="small"
          sx={{
            textDecoration: "underline",
            textTransform: "capitalize",
            "&:hover": { color: "#444" },
          }}
          disableRipple
          disableTouchRipple
        >
          <Typography
            sx={{ color: "inherit", fontSize: smallScreenMatch ? 10 : null }}
          >
            Chọn mua
          </Typography>
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default ProductItemInfo;
