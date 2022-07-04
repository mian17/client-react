import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
          <Typography>{children}</Typography>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="các tab cho thông tin tài khoản"
          centered
        >
          <Tab label="Hồ sơ" {...a11yProps(0)} />
          <Tab label="Địa chỉ" {...a11yProps(1)} />
          <Tab label="Đổi mật khẩu" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Hồ sơ tài khoản
      </TabPanel>
      <TabPanel value={value} index={1}>
        Danh sách các địa chỉ tài khoản
      </TabPanel>
      <TabPanel value={value} index={2}>
        Form đổi thông tin mật khẩu
      </TabPanel>
    </Box>
  );
}
