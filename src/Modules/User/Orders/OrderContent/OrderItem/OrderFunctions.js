import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const OrderFunctions = (props) => {
  const status = props.status ?? undefined;
  let functions;

  const cancelOrderHandler = () => {
    props.openAlertHandler(true);
    props.transferAlertContent({
      title: "Hủy đơn hàng",
      content: "Bạn có chắc chắn muốn hủy đơn hàng này?",
      action: "cancel",
      selectedOrderId: props.order.orderId,
    });
  };

  const confirmOrderReceivedHandler = () => {
    props.openAlertHandler(true);
    props.transferAlertContent({
      title: "Xác nhận đã nhận hàng",
      content:
        "Bạn có chắc chắn muốn xác nhận rằng bạn đã nhận được đơn hàng này? Sau khi đã xác nhận, bạn sẽ không được yêu cầu đổi trả/hoàn tiền sản phẩm khi có trục trặc.",
      action: "confirm",
      selectedOrderId: props.order.orderId,
    });
    console.log(props.order);
    console.log(props.order.orderId);
  };

  const refundOrReturnRequest = () => {
    props.openAlertHandler(true);
    props.transferAlertContent({
      title: "Yêu cầu đổi trả, hoàn tiền",
      content:
        "Nếu sản phẩm trong đơn hàng của bạn có lỗi hoặc trục trặc, Wieder_ Markt sẽ liên hệ lại với bạn để giải quyết tình trạng này.",
      action: "return-or-refund",
      selectedOrderId: props.order.orderId,
    });
  };

  switch (status) {
    case 1:
      functions = (
        <Button onClick={cancelOrderHandler} variant="outlined">
          Hủy đơn hàng
        </Button>
      );
      break;
    case 2:
      functions = (
        <>
          <Button variant="contained" disabled>
            Đã nhận hàng
          </Button>
          <Button onClick={cancelOrderHandler} variant="outlined">
            Hủy đơn hàng
          </Button>
        </>
      );
      break;
    case 3:
      functions = (
        <>
          <Button onClick={confirmOrderReceivedHandler} variant="contained">
            Đã nhận hàng
          </Button>
          <Button variant="outlined" disabled>
            Yêu cầu trả hàng/Hoàn tiền
          </Button>
        </>
      );
      break;
    case 4:
      functions = (
        <>
          <Button disabled variant="contained">
            Đã nhận hàng
          </Button>
          <Button onClick={refundOrReturnRequest} variant="outlined">
            Yêu cầu trả hàng/Hoàn tiền
          </Button>
        </>
      );

      break;
    case 5:
      functions = (
        <>
          {/*<Button variant="contained">Đánh giá</Button>*/}
          {/*<Button variant="outlined">Mua lại</Button>*/}
        </>
      );
      break;
    case 6:
      // functions = <Button variant={"outlined"}>Mua lại</Button>;
      functions = <></>;
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
