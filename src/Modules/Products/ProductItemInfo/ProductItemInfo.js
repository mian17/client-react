import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ButtonBase } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductItemInfo = (props) => {
  const theme = useTheme();
  const tabletScreenMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      m={3}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        gap: 2,
      }}
    >
      <Box>
        <Typography
          component="h5"
          variant={tabletScreenMatch ? "body" : "h6"}
          sx={{ fontWeight: 700, lineHeight: 1.2 }}
          fontFamily="Libre Bodoni"
        >
          {props.product.productName}
        </Typography>
      </Box>
      <Box sx={{ flexBasis: "fit-content" }}>
        <Typography
          component="p"
          variant="body"
          textAlign="right"
          sx={{ color: "inherit", mb: 1 }}
        >
          {props.formattedProductPrice}
        </Typography>
        <ButtonBase
          variant="text"
          size="large"
          sx={{
            // fontSize: tabletScreenMatch ? 18 : null,
            textDecoration: "underline",
            textTransform: "capitalize",

            // lineHeight: 1.6,
            "&:hover": { color: "#444" },
          }}
          disableRipple
          disableTouchRipple
        >
          <Typography sx={{ color: "inherit" }} noWrap>
            Chọn mua
          </Typography>
        </ButtonBase>
      </Box>
    </Box>
  );
};

export default ProductItemInfo;
