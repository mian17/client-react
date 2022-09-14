import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

// 0: awaiting verification
// 1: awaiting receive products for an order
// 2: on transit
// 3: arrived
// 4: successes
// 5: canceled
const OrderFunctions = (props) => {
  const status = props.status ?? undefined;
  let functions;

  switch (status) {
    case 0:
      functions = <Button variant="outlined">Hủy đơn hàng</Button>;
      break;
    case 1:
      functions = (
        <>
          <Button variant="contained" disabled>
            Đã nhận hàng
          </Button>
          <Button variant="outlined">Hủy đơn hàng</Button>
        </>
      );
      break;
    case 2:
      functions = (
        <>
          <Button variant="contained">Đã nhận hàng</Button>
          <Button variant="outlined" disabled>
            Yêu cầu trả hàng/Hoàn tiền
          </Button>
        </>
      );
      break;
    case 3:
      functions = (
        <>
          <Button variant="contained">Đã nhận hàng</Button>
          <Button variant="outlined">Yêu cầu trả hàng/Hoàn tiền</Button>
        </>
      );

      break;
    case 4:
      functions = (
        <>
          <Button variant="contained">Đánh giá</Button>
          <Button variant="outlined">Mua lại</Button>
        </>
      );
      break;
    case 5:
      functions = <Button variant={"outlined"}>Mua lại</Button>;
      break;
    default:
      functions = (
        <Button variant={"outlined"} disabled>
          Không lấy được trạng thái đơn hàng
        </Button>
      );
      break;
  }

  return (
    <Box sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}>
      {props.order.createdAt}
      {/*<Button variant={"contained"}>Đã nhận hàng</Button>*/}
      {/*<Button variant="outlined">Hủy đơn hàng</Button>*/}
      {/*<Button variant={"outlined"}>Mua lại</Button>*/}
      {/*<Button variant={"outlined"}>Yêu cầu trả hàng/Hoàn tiền</Button>*/}
      {/*<Button variant={"outlined"}>Đánh giá</Button>*/}
      {functions}
    </Box>
  );
};
export default OrderFunctions;
