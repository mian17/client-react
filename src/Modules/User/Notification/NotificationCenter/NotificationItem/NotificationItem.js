import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import dayjs from "dayjs";
import Link from "@mui/material/Link";

const relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);

const NotificationItem = (props) => {
  const [isUnread, setIsUnread] = useState(props.notification.unread);

  const imgUrl = props.notification.imgUrl;
  const differenceTime = dayjs().to(dayjs(props.notification.time));

  const onMouseOverHandler = () => {
    setIsUnread(false);
  };
  return (
    <Box
      sx={{
        border: "1px solid #eee",
        borderRadius: 4,
        paddingX: 4,
        paddingY: 4,
        marginBottom: 2,
        width: "100%",
        display: "flex",
        gap: 2,
        alignItems: "center",
        backgroundColor: isUnread ? "#fff4e6" : "#fff",
        "&:hover": {
          backgroundColor: "#f8f9fa",
        },
      }}
      onMouseOver={onMouseOverHandler}
    >
      <img
        style={{
          width: "60px",
          height: "60px",
          borderRadius: 4,
          border: "1px solid #eee",
        }}
        src={imgUrl}
        alt="keyboard"
      />
      <Box flexGrow={1}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            marginBottom: 1,
          }}
        >
          <Typography component="h5" sx={{ fontWeight: "bold" }} inline>
            {props.notification.label}
          </Typography>
          <Typography component="p" variant="subtitle2" inline>
            {differenceTime}
          </Typography>
        </Box>
        <Typography component="p" variant="subtitle1">
          {props.notification.description}
        </Typography>
      </Box>
      <Box>
        <Button
          component={Link}
          href={`/orders?orderId=${props.notification.orderUUID}`}
          variant="outlined"
          size="small"
          sx={{ px: 1, textTransform: "none", borderRadius: 9 }}
        >
          Xem
        </Button>
      </Box>
    </Box>
  );
};
export default NotificationItem;
