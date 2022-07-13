import NotificationItem from "./NotificationItem/NotificationItem";
import Box from "@mui/material/Box";

import imgUrl1 from "./DUMMY_NOTIFICATION/img/keyboard_1.jpg";
import imgUrl2 from "./DUMMY_NOTIFICATION/img/keyboard_2.jpg";
import imgUrl3 from "./DUMMY_NOTIFICATION/img/keyboard_3.jpg";
import imgUrl4 from "./DUMMY_NOTIFICATION/img/keyboard_4.jpg";

// Since time based on UTC 0, vietnam time will be the data time + 7 hours
const notifications = [
  {
    id: 0,
    imgUrl: imgUrl1,
    orderUUID: "19dksrp2w39k",
    unread: true,
    label: "Giao kiện hàng thành công",
    description:
      "Kiện hàng của đơn hàng 19dksrp2w39k đã giao thành công đến bạn",
    time: "2022-07-13T08:00:00Z",
  },
  {
    id: 1,
    imgUrl: imgUrl2,
    orderUUID: "19dksrp2w39k",
    unread: true,
    label: "Chia sẻ nhận xét về đơn hàng",
    description:
      "Đơn hàng 19dksrp2w39k đã hoàn thành. Bạn hãy đánh giá sản phẩm để giúp người dùng khác hiểu hơn về sản phẩm nhé",
    time: "2022-07-13T07:00:00Z",
  },
  {
    id: 2,
    imgUrl: imgUrl3,
    orderUUID: "19dksrp2w39k",
    unread: true,
    label: "Bạn có đơn hàng đang trên đường giao",
    description:
      "Shipper báo rằng: đơn hàng 19dksrp2w39k của bạn vẫn đang trong quá trình vận chuyển vả dự kiến được giao trong 1-2 ngày tới. Vui lòng bỏ qua thông báo này nếu bạn đã nhận được hàng nhé!",
    time: "2022-07-06T04:02:04Z",
  },
  {
    id: 3,
    imgUrl: imgUrl4,
    orderUUID: "19dksrp2w39k",
    unread: true,
    label: "Chấp nhận yêu cầu hủy đơn",
    description:
      "Yêu cầu hủy đơn hàng của bạn đã được chấp nhận. Đơn hàng <strong>19dksrp2w39k</strong> đã được hủy thành công!",
    time: "2022-06-11T04:02:04Z",
  },
];

//

const NotificationCenter = () => {
  return (
    <Box p={1}>
      {notifications.map((notification, index) => {
        return <NotificationItem key={index} notification={notification} />;
      })}
    </Box>
  );
};
export default NotificationCenter;
