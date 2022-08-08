import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const ProductItemStatus = (props) => {
  const theme = useTheme();
  const smallScreenMatch = useMediaQuery(theme.breakpoints.down("sm"));

  // Status code
  // 0: normal
  // 1: new
  // 2: on sale
  // 3: back in stock
  let content = "";
  switch (props.statusCode) {
    case 0:
      content = "";
      break;
    case 1:
      content = "Hàng mới!";
      break;
    case 2:
      content = "Giảm giá";
      break;
    case 3:
      content = "Vừa nhập!";
      break;
    default:
      content = "";
      console.log(
        "Status code is not verified for product id" + props.product.productId
      );
      break;
  }

  return (
    <Box
      sx={{
        position: "absolute",
        zIndex: 100,
        top: 0,
        left: 0,
        m: 2,
      }}
    >
      <Typography
        fontFamily="Libre Bodoni"
        component="h5"
        variant={smallScreenMatch ? "body" : "h5"}
        sx={{
          fontWeight: "700",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          textTransform: "uppercase",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
};
export default ProductItemStatus;
