import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

const OrderTotalAmount = (props) => {
  const matches = useMediaQuery((theme) => theme.breakpoints.up("md"));
  return (
    <Box p={4} textAlign={matches ? "right" : "center"}>
      Tổng số tiền:
      <Typography color="primary" fontSize={20} ml={10} display="inline">
        {props.totalAmount}
      </Typography>
    </Box>
  );
};
export default OrderTotalAmount;
