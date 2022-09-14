import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const OrderStatusBar = (props) => {
  const statusId = props.order.status ?? undefined;

  let statusContent = "";
  switch (statusId) {
    case 1:
      statusContent = (
        <Chip label="Chờ xác nhận" variant="outlined" color="primary" />
      );
      break;
    case 2:
      statusContent = (
        <Chip label="Chờ Lấy Hàng" variant="outlined" color="primary" />
      );
      break;
    case 3:
      statusContent = (
        <Chip label="Đang Giao" variant="outlined" color="primary" />
      );
      break;
    case 4:
      statusContent = (
        <Chip label="Đã Giao" variant="contained" color="success" />
      );
      break;
    case 5:
      statusContent = (
        <>
          <Chip
            label="Giao hàng thành công"
            icon={<LocalShippingIcon fontSize="medium" />}
            variant="contained"
            color="success"
          />
          <Chip
            sx={{ marginLeft: 1 }}
            label="Đã Nhận Hàng"
            variant="contained"
            color="success"
          />
        </>
      );
      break;
    case 6:
      statusContent = (
        <Chip label="Đã Hủy" variant="contained" color="primary" />
      );
      break;
    default:
      statusContent = (
        <Chip
          label="Không lấy được trạng thái đơn hàng"
          variant="contained"
          color="error"
        />
      );
      break;
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            component="h5"
            sx={{ fontWeight: "bold" }}
            display="inline"
            mr={1}
          >
            Mã đơn hàng: {props.order.orderId}
          </Typography>
        </Box>
        <Box>{statusContent}</Box>
      </Box>
    </>
  );
};
export default OrderStatusBar;
