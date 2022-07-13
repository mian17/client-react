import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";

import PropTypes from "prop-types";
import OrderItem from "./OrderItem/OrderItem";
import productImg from "./OrderItem/Dummy Data/img/blue-cherry-switch.jpeg";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
          {/*<Typography>{children}</Typography>*/}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

// 0: awaiting verification
// 1: awaiting receive products for an order
// 2: on transit
// 3: arrived
// 4: successed order
// 5: canceled

const DUMMY_ORDERS = [
  // Order with one merchant
  {
    id: 0,
    status: 0,
    // merchants: [{ id: 9000, name: "", products: [] }],
    merchantId: 9000,
    merchantName: "Shop có đơn hàng chờ xác nhận",
    merchantUrl: "/merchant9000",
    products: [
      {
        id: 60,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 5,
        price: 10000,
        classification: "5 pins Optical switch",
      },
      {
        id: 70,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 5,
        price: 10000,
        classification: "5 pins Optical switch",
      },
    ],
  },
  // Order with different merchants
  {
    id: 1,
    status: 1,
    // merchants: [{ id: 9000, name: "", products: [] }],
    merchantId: 9000,
    merchantName: "Shop có đơn hàng chờ lấy hàng",
    merchantUrl: "/merchant9000",
    products: [
      {
        id: 60,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 10,
        price: 15000,
        classification: "5 pins Optical switch",
      },
      {
        id: 70,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 5,
        price: 10000,
        classification: "5 pins Optical switch",
      },
    ],
  },
  {
    id: 2,
    status: 2,
    // merchants: [{ id: 9000, name: "", products: [] }],
    merchantId: 9000,
    merchantName: "Shop có đơn hàng đang giao hàng",
    merchantUrl: "/merchant9000",
    products: [
      {
        id: 60,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 60,
        price: 2000,
        classification: "5 pins Optical switch",
      },
      {
        id: 70,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 15,
        price: 30000,
        classification: "5 pins Optical switch",
      },
    ],
  },
  {
    id: 3,
    status: 3,
    // merchants: [{ id: 9000, name: "", products: [] }],
    merchantId: 9000,
    merchantName: "Shop có đơn hàng đã giao",
    merchantUrl: "/merchant9000",
    products: [
      {
        id: 60,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 2,
        price: 18000,
        classification: "5 pins Optical switch",
      },
      {
        id: 70,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 50,
        price: 4000,
        classification: "5 pins Optical switch",
      },
    ],
  },
  {
    id: 4,
    status: 4,
    // merchants: [{ id: 9000, name: "", products: [] }],
    merchantId: 9000,
    merchantName: "Shop có đơn hàng đã giao",
    merchantUrl: "/merchant9000",
    products: [
      {
        id: 60,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 90,
        price: 10000,
        classification: "5 pins Optical switch",
      },
      {
        id: 70,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 20,
        price: 10000,
        classification: "5 pins Optical switch",
      },
    ],
  },
  {
    id: 5,
    status: 5,
    // merchants: [{ id: 9000, name: "", products: [] }],
    merchantId: 9000,
    merchantName: "Shop có đơn hàng đã hủy",
    merchantUrl: "/merchant9000",
    products: [
      {
        id: 60,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 99,
        price: 100000,
        classification: "5 pins Optical switch",
      },
      {
        id: 70,
        name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
        imgUrl: productImg,
        quantity: 80,
        price: 20000000,
        classification: "5 pins Optical switch",
      },
    ],
  },
];
const OrderContent = () => {
  const [tabValue, setTabValue] = useState(0);
  const [orders, setOrders] = useState(DUMMY_ORDERS);

  useEffect(() => {}, [orders]);

  const ordersAwaitingVerification = orders.filter(
    (order) => order.status === 0
  );
  const ordersAwaitingReceivingProducts = orders.filter(
    (order) => order.status === 1
  );
  const ordersOnTransit = orders.filter((order) => order.status === 2);
  const ordersArrived = orders.filter((order) => order.status === 3);
  const ordersSucceed = orders.filter((order) => order.status === 4);
  const ordersCanceled = orders.filter((order) => order.status === 5);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="các tab cho thông tin tài khoản"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Tất cả" {...a11yProps(0)} />
          <Tab label="Chờ xác nhận" {...a11yProps(1)} />
          <Tab label="Chờ lấy hàng" {...a11yProps(2)} />
          <Tab label="Đang giao" {...a11yProps(3)} />
          <Tab label="Đã giao" {...a11yProps(4)} />
          <Tab label="Đã hủy" {...a11yProps(5)} />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        {/*Tất cả đơn hàng*/}
        {orders.map((order, index) => {
          return <OrderItem key={index} order={order} />;
        })}
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        {ordersAwaitingVerification.map((order, index) => {
          return <OrderItem key={index} order={order} />;
        })}
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        {ordersAwaitingReceivingProducts.map((order, index) => {
          return <OrderItem key={index} order={order} />;
        })}
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        {ordersOnTransit.map((order, index) => {
          return <OrderItem key={index} order={order} />;
        })}
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        {ordersArrived.map((order, index) => {
          return <OrderItem key={index} order={order} />;
        })}
        {ordersSucceed.map((order, index) => {
          return <OrderItem key={index} order={order} />;
        })}
        }
      </TabPanel>
      <TabPanel value={tabValue} index={5}>
        {ordersCanceled.map((order, index) => {
          return <OrderItem key={index} order={order} />;
        })}
      </TabPanel>
    </Box>
  );
};
export default OrderContent;
