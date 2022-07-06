import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FormLabel, IconButton, Radio, RadioGroup } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { DatePicker, MobileDatePicker } from "@mui/x-date-pickers";

import Profile from "./Profile/Profile";
import Address from "./Address/Address";

const pages = ["Hồ sơ", "Địa chỉ", "Đổi mật khẩu"];

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

export default function AccountTabs() {
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
          centered
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
        <Address />
      </TabPanel>

      <TabPanel value={tabValue} index={2}>
        Form đổi thông tin mật khẩu
      </TabPanel>
    </Box>
  );
}
