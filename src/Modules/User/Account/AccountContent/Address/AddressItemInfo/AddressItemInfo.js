import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddressItemInfoItem from "./AddressItemInfoItem";
import AddressItemFirstInfoItem from "./AddressItemFirstInfoItem";
import classes from "./AddressItemInfo.module.css";
const AddressItemInfo = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <AddressItemFirstInfoItem label="Họ và tên" value="John Smith" />
      <AddressItemInfoItem label="Số điện thoại" value="(+84) 11111111" />
      <AddressItemInfoItem
        label="Địa chỉ"
        value="số somewhere, đường somewhere"
      />
    </Box>
  );
};
export default AddressItemInfo;
