import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { NavLink } from "react-router-dom";

import Profile from "./Profile/Profile";
// import Address from "./Address/Address";
// import ChangePassword from "./ChangePassword/ChangePassword";
import { CircularProgress } from "@mui/material";
import AddressLoading from "./Address/AddressLoading";

const Address = React.lazy(() => import("./Address/Address"));
const ChangePassword = React.lazy(() =>
  import("./ChangePassword/ChangePassword")
);

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

export default function AccountContent() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  React.useEffect(() => {
    let checkUrlPath = window.location.href.split("account/")[1];
    switch (checkUrlPath) {
      case "profile":
        setTabValue(0);
        break;
      case "address":
        setTabValue(1);
        break;
      case "changepassword":
        setTabValue(2);
        break;
      default:
        console.log("urlPath is not valid");
        break;
    }
  }, [tabValue]);

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="các tab cho thông tin tài khoản"
          // centered
        >
          <Tab
            component={NavLink}
            to="/user/account/profile"
            label="Hồ sơ"
            {...a11yProps(0)}
          />
          <Tab
            component={NavLink}
            to="/user/account/address"
            label="Địa chỉ"
            {...a11yProps(1)}
          />
          <Tab
            component={NavLink}
            to="/user/account/changepassword"
            label="Đổi mật khẩu"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        <Profile />
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        <React.Suspense fallback={<AddressLoading />}>
          <Address />
        </React.Suspense>
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        <React.Suspense fallback={<CircularProgress />}>
          <ChangePassword />
        </React.Suspense>
      </TabPanel>
    </Box>
  );
}
