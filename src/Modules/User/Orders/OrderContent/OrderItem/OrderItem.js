import Paper from "@mui/material/Paper";

import OrderStatusBar from "./OrderStatusBar/OrderStatusBar";

import { currencyFormatOptions } from "../../../../../utils/utils";
import OrderProductInfo from "./OrderProductInfo/OrderProductInfo";
import OrderTotalAmount from "./OrderTotalAmount/OrderTotalAmount";
import OrderFunctions from "./OrderFunctions";
// const orders = [{ id: 0, merchantName: "Shop thân thiện" }];
// const products = [
//   {
//     id: 0,
//     name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//     imgUrl: productImg,
//     quantity: 5,
//     price: 10000,
//     classification: "5 pins Optical switch",
//   },
//   {
//     id: 1,
//     name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//     imgUrl: productImg,
//     quantity: 5,
//     price: 10000,
//     classification: "5 pins Optical switch",
//   },
// ];
// textAlign={matches ? "center" : undefined}
const OrderItem = (props) => {
  const totalAmount = new Intl.NumberFormat(
    "vi-VN",
    currencyFormatOptions
  ).format(props.order.totalAmount);
  return (
    <Paper
      sx={{
        border: "1px solid #eee",
        borderRadius: 4,
        paddingX: 4,
        paddingY: 4,
        marginBottom: 2,
      }}
    >
      <OrderStatusBar order={props.order} />
      {props.order.products.map((product, index) => {
        return <OrderProductInfo key={index} product={product} />;
      })}
      <OrderTotalAmount totalAmount={totalAmount} />
      <OrderFunctions status={props.order.status} order={props.order} />
    </Paper>
  );
};
export default OrderItem;
