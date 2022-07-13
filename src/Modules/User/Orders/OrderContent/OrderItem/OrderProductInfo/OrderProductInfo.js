import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { currencyFormatOptions } from "../../../../../../utils/utils";
import Divider from "@mui/material/Divider";

const OrderProductInfo = (props) => {
  const productPrice = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(props.product.price);
  return (
    <>
      <Divider light />
      <Box p={1}>
        <Grid spacing={2} container>
          <Grid item lg={2}>
            <img
              style={{ width: 100, height: "auto" }}
              src={props.product.imgUrl}
              alt="blue chery switch"
            />
          </Grid>
          <Grid item lg={8} md={10} sm={10}>
            <Typography component="h5" variant="body1">
              {props.product.name}
            </Typography>
            <Box>
              <Typography component="p" variant="subtitle2">
                Phân loại hàng: {props.product.classification}
              </Typography>
              <Typography component="p" variant="subtitle2">
                Số lượng: {props.product.quantity}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            lg={2}
            md={2}
            sm={2}
            justifySelf="flex-end"
            alignSelf="center"
          >
            <Typography display="inline">{productPrice}</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default OrderProductInfo;
