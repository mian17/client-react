import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import OrderItem from "./OrderItem/OrderItem";
import apiClient from "../../../../api";
import InfiniteScroll from "react-infinite-scroll-component";
import Order from "./orderContentUtils/Order";
import ProductInOrder from "./orderContentUtils/ProductInOrder";
import { backendServerPath } from "../../../common/utils/backendServerPath";

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

// const DUMMY_ORDERS = [
//   // Order with one merchant
//   {
//     id: 0,
//     status: 1,
//     orderId: "Shop có đơn hàng chờ xác nhận",
//     products: [
//       {
//         id: 60,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 5,
//         price: 10000,
//         classification: "5 pins Optical switch",
//       },
//       {
//         id: 70,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 5,
//         price: 10000,
//         classification: "5 pins Optical switch",
//       },
//     ],
//   },
//   // Order with different merchants
//   {
//     id: 1,
//     status: 2,
//     orderId: "Shop có đơn hàng chờ lấy hàng",
//
//     products: [
//       {
//         id: 60,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 10,
//         price: 15000,
//         classification: "5 pins Optical switch",
//       },
//       {
//         id: 70,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 5,
//         price: 10000,
//         classification: "5 pins Optical switch",
//       },
//     ],
//   },
//   {
//     id: 2,
//     status: 3,
//     orderId: "Shop có đơn hàng đang giao hàng",
//     products: [
//       {
//         id: 60,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 60,
//         price: 2000,
//         classification: "5 pins Optical switch",
//       },
//       {
//         id: 70,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 15,
//         price: 30000,
//         classification: "5 pins Optical switch",
//       },
//     ],
//   },
//   {
//     id: 3,
//     status: 4,
//     orderId: "Shop có đơn hàng đã giao",
//     products: [
//       {
//         id: 60,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 2,
//         price: 18000,
//         classification: "5 pins Optical switch",
//       },
//       {
//         id: 70,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 50,
//         price: 4000,
//         classification: "5 pins Optical switch",
//       },
//     ],
//   },
//   {
//     id: 4,
//     status: 5,
//     orderId: "Shop có đơn hàng đã giao",
//     products: [
//       {
//         id: 60,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 90,
//         price: 10000,
//         classification: "5 pins Optical switch",
//       },
//       {
//         id: 70,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 20,
//         price: 10000,
//         classification: "5 pins Optical switch",
//       },
//     ],
//   },
//   {
//     id: 5,
//     status: 6,
//     orderId: "Shop có đơn hàng đã hủy",
//     products: [
//       {
//         id: 60,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 99,
//         price: 100000,
//         classification: "5 pins Optical switch",
//       },
//       {
//         id: 70,
//         name: "Blue cherry switch for Custom Mechanical Keyboard, hot-swappable, Clicky switch for Typists ",
//         imgUrl: productImg,
//         quantity: 80,
//         price: 20000000,
//         classification: "5 pins Optical switch",
//       },
//     ],
//   },
// ];

const OrderContent = () => {
  const [tabValue, setTabValue] = useState(0);
  const [orders, setOrders] = useState([]);
  // const [dataLength, setDataLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  console.log(orders.length);
  console.log(currentPage);

  const firstUpdate = useRef(true);

  const fetchOrders = () => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      if (currentPage <= lastPage) {
        apiClient.get("/sanctum/csrf-cookie").then(() => {
          const userToken = JSON.parse(
            localStorage.getItem("personalAccessToken")
          );
          apiClient
            .get(`api/order/pagination/${currentPage}`, {
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            })
            .then((response) => {
              // console.log(response.data.total);
              // const totalItemLengthFromResponse = response.data.total;
              // const lastPageFromServer = response.data.last_page;
              // setLastPage(lastPageFromServer);
              const receivedOrderObj = response.data.data;

              const transformedObjToArr = Object.values(receivedOrderObj).map(
                (order) => {
                  return order;
                }
              );

              const transformedOrders = transformedObjToArr.map((order) => {
                const products = order.map((product, index) => {
                  // console.log(product);

                  return new ProductInOrder(
                    index,
                    product.product_name,
                    backendServerPath + product.model_image_url,
                    product.quantity,
                    product.price,
                    product.model_name
                  );
                });

                return new Order(
                  order[0].uuid,
                  order[0].status_id,
                  order[0].total,
                  order[0].created_at,
                  products
                );
              });

              // setDataLength();

              setOrders((prevState) => {
                return [...prevState, ...transformedOrders];
              });
              setCurrentPage((prevState) => {
                return prevState + 1;
              });
            })
            .catch((error) => {
              console.log(error);
            })
            .then(() => {});
        });
      } else {
        setHasMore(false);
      }
    }
  };
  useEffect(() => {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
      apiClient
        .get(`api/order/pagination/1`, {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          const lastPageFromServer = response.data.last_page;
          setLastPage(lastPageFromServer);
        })
        .catch((error) => {
          console.log(error);
        })
        .then(() => {});
    });
    fetchOrders();
  }, []);

  const ordersAwaitingVerification = orders.filter(
    (order) => order.status === 1
  );

  const ordersAwaitingReceivingProducts = orders.filter(
    (order) => order.status === 2
  );

  const ordersOnTransit = orders.filter((order) => order.status === 3);
  const ordersArrived = orders.filter((order) => order.status === 4);
  const ordersSucceed = orders.filter((order) => order.status === 5);
  const ordersCanceled = orders.filter((order) => order.status === 6);

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
        {/*/!*Tất cả đơn hàng*!/*/}
        {/*/!*{orders.map((order, index) => {*!/*/}
        {/*/!*  return <OrderItem key={index} order={order} />;*!/*/}
        {/*/!*})}*!/*/}
        <InfiniteScroll
          dataLength={orders.length} //This is important field to render the next data
          next={fetchOrders}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {/*Tất cả đơn hàng*/}
          {orders.map((order, index) => {
            return <OrderItem key={index} order={order} />;
          })}
        </InfiniteScroll>
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
