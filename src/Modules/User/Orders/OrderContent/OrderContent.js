import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { NavLink } from "react-router-dom";
import Profile from "../../Account/AccountContent/Profile/Profile";
import Address from "../../Account/AccountContent/Address/Address";
import ChangePassword from "../../Account/AccountContent/ChangePassword/ChangePassword";
import * as React from "react";
import PropTypes from "prop-types";

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
const OrderContent = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
  // React.useEffect(() => {
  //   let checkUrlPath = window.location.href.split("orders/")[1];
  //   switch (checkUrlPath) {
  //     case "verified":
  //       setTabValue(0);
  //       break;
  //     case "ontransit":
  //       setTabValue(1);
  //       break;
  //     case "shipping":
  //       setTabValue(2);
  //       break;
  //     case "arrived":
  //       setTabValue(3);
  //       break;
  //     case "canceled":
  //       setTabValue(4);
  //       break;
  //     case "return-refund":
  //       setTabValue(5);
  //       break;
  //     default:
  //       console.log("urlPath is not valid");
  //       break;
  //   }
  // }, [tabValue]);
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="các tab cho thông tin tài khoản"
          centered
        >
          <Tab
            // component={NavLink}
            // to="/user/account/profile"
            label="Tất cả"
            {...a11yProps(0)}
          />
          <Tab
            // component={NavLink}
            // to="/user/account/address"
            label="Chờ xác nhận"
            {...a11yProps(1)}
          />
          <Tab
            // component={NavLink}
            // to="/user/account/changepassword"
            label="Chờ lấy hàng"
            {...a11yProps(2)}
          />
          <Tab
            // component={NavLink}
            // to="/user/account/changepassword"
            label="Đang giao"
            {...a11yProps(3)}
          />
          <Tab
            // component={NavLink}
            // to="/user/account/changepassword"
            label="Đã giao"
            {...a11yProps(4)}
          />
          <Tab
            // component={NavLink}
            // to="/user/account/changepassword"
            label="Đã hủy"
            {...a11yProps(5)}
          />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        Tất cả đơn hàng
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        Đơn hàng chờ xác nhận
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        Đơn hàng chờ lấy hàng
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        Đơn hàng đang giao
      </TabPanel>
      <TabPanel value={tabValue} index={4}>
        Đơn hàng đã giao
      </TabPanel>
      <TabPanel value={tabValue} index={5}>
        Đơn hàng đã hủy
      </TabPanel>
    </Box>
  );
};
export default OrderContent;
