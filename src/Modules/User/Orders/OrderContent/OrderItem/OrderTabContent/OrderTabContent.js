import { useEffect, useRef, useState } from "react";
import apiClient from "../../../../../../api";
import ProductInOrder from "../../orderContentUtils/ProductInOrder";
import { backendServerPath } from "../../../../../common/utils/backendServerPath";
import Order from "../../orderContentUtils/Order";
import OrderItem from "../OrderItem";
import InfiniteScroll from "react-infinite-scroll-component";
import OrderItemLoading from "../OrderItemLoading/OrderItemLoading";

const OrderTabContent = ({
  orderStatusId,
  openAlertHandler,
  transferAlertContent,
}) => {
  const [orders, setOrders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
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
            .get(`api/order/${orderStatusId}/pagination/${currentPage}`, {
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
  console.log(currentPage);
  useEffect(() => {
    apiClient.get("/sanctum/csrf-cookie").then(() => {
      const userToken = JSON.parse(localStorage.getItem("personalAccessToken"));
      apiClient
        .get(`api/order/${orderStatusId}/pagination/1`, {
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
  return (
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
            key={index}
            order={order}
            openAlertHandler={openAlertHandler}
            transferAlertContent={transferAlertContent}
          />
        );
      })}
    </InfiniteScroll>
  );
};
export default OrderTabContent;
