import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import * as React from "react";
import { useEffect, useRef, useState } from "react";

import PropTypes from "prop-types";
import OrderItem from "./OrderItem/OrderItem";
import apiClient from "../../../../api";
import InfiniteScroll from "react-infinite-scroll-component";
import Order from "./orderContentUtils/Order";
import ProductInOrder from "./orderContentUtils/ProductInOrder";
import { backendServerPath } from "../../../common/utils/backendServerPath";
import OrderTabContent from "./OrderItem/OrderTabContent/OrderTabContent";

import OrderItemLoading from "./OrderItem/OrderItemLoading/OrderItemLoading";
import AlertDialog from "../../../common/component/AlertDialog";
import CommonSnackbar from "../../../common/component/CommonSnackbar";
import useSnackbar from "../../../../hooks/use-snackbar";
import { setAlert } from "../../../common/utils/helpers";

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

const OrderContent = () => {
  const [tabValue, setTabValue] = useState(0);
  const [orders, setOrders] = useState([]);
  // const [dataLength, setDataLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const firstUpdate = useRef(true);

  const {
    snackbarType,
    setSnackbarType,
    openSnackbar,
    setOpenSnackbar,
    alertContent: snackbarAlertContent,
    setAlertContent: setSnackbarAlertContent,
    handleCloseSnackbar,
  } = useSnackbar();

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
              if (response.status !== 200) {
                throw new Error(
                  "Đã có lỗi xảy ra trong quá trình tải các đơn hàng"
                );
              }

              const receivedOrderObj = response.data.data;

              if (receivedOrderObj.length === 0) {
                setHasMore(false);
              }

              const transformedObjToArr = Object.values(receivedOrderObj).map(
                (order) => {
                  return order;
                }
              );

              const transformedOrders = transformedObjToArr.map((order) => {
                const products = order.map((product, index) => {
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
              setAlert(
                setSnackbarType,
                "error",
                setOpenSnackbar,
                setSnackbarAlertContent,
                error.message
              );
            })
            .then(() => {});
        });
      } else {
        setHasMore(false);
      }
    }
  };

  // console.log(currentPage);
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
          setAlert(
            setSnackbarType,
            "error",
            setOpenSnackbar,
            setSnackbarAlertContent,
            error.message
          );
        })
        .then(() => {});
    });
    fetchOrders();
  }, []); //DO NOT UPDATE THIS DEPENDENCY

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const [alertOpenState, setAlertOpenState] = useState(false);
  const [alertContent, setAlertContent] = useState({
    title: "",
    content: "",
    action: null,
    selectedOrderId: "",
  });
  const openAlertHandler = () => {
    setAlertOpenState(true);
  };
  const closeAlertHandler = () => {
    setAlertOpenState(false);
  };

  function transferAlertContent(value) {
    setAlertContent(value);
  }

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
          <Tab label="Đổi trả, hoàn tiền" {...a11yProps(6)} />
        </Tabs>
      </Box>

      <AlertDialog
        alertOpenState={alertOpenState}
        closeAlertHandler={closeAlertHandler}
        title={alertContent.title}
        content={alertContent.content}
        action={alertContent.action}
        selectedOrderId={alertContent.selectedOrderId}
        // onClickResetComponent={onClickResetComponent}
      />

      <TabPanel value={tabValue} index={0}>
        <InfiniteScroll
          dataLength={orders.length} //This is important field to render the next data
          next={fetchOrders}
          hasMore={hasMore}
          loader={<OrderItemLoading />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Bạn đã xem hết đơn hàng</b>
            </p>
          }
        >
          {/*Tất cả đơn hàng*/}
          {orders.map((order, index) => {
            return (
              <OrderItem
                openAlertHandler={openAlertHandler}
                transferAlertContent={transferAlertContent}
                key={index}
                order={order}
              />
            );
          })}
        </InfiniteScroll>
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <OrderTabContent
          openAlertHandler={openAlertHandler}
          transferAlertContent={transferAlertContent}
          orderStatusId={1}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <OrderTabContent
          openAlertHandler={openAlertHandler}
          transferAlertContent={transferAlertContent}
          orderStatusId={2}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <OrderTabContent
          openAlertHandler={openAlertHandler}
          transferAlertContent={transferAlertContent}
          orderStatusId={3}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        <OrderTabContent
          openAlertHandler={openAlertHandler}
          transferAlertContent={transferAlertContent}
          orderStatusId={4}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={5}>
        <OrderTabContent
          orderStatusId={5}
          openAlertHandler={openAlertHandler}
          transferAlertContent={transferAlertContent}
        />
      </TabPanel>
      <TabPanel value={tabValue} index={6}>
        <OrderTabContent orderStatusId={6} />
      </TabPanel>
      <CommonSnackbar
        openSnackbar={openSnackbar}
        handleCloseSnackbar={handleCloseSnackbar}
        snackbarType={snackbarType}
        alertContent={snackbarAlertContent}
      />
    </Box>
  );
};
export default OrderContent;
