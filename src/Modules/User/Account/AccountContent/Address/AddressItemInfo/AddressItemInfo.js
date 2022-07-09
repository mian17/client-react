import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddressItemInfoItem from "./AddressItemInfoItem";
import AddressItemFirstInfoItem from "./AddressItemFirstInfoItem";
import classes from "./AddressItemInfo.module.css";
const AddressItemInfo = (props) => {
  return (
    <Box sx={{ flex: 1 }}>
      <AddressItemFirstInfoItem
        label="Họ và tên"
        value={{
          name: props.address.name,
          defaultAddress: props.address.defaultAddress,
        }}
      />
      <AddressItemInfoItem
        label="Số điện thoại"
        value={props.address.phoneNumber}
      />
      <AddressItemInfoItem
        label="Địa chỉ"
        value={
          props.address.detailAddress[0].toUpperCase() +
          props.address.detailAddress.slice(1) +
          ", " +
          props.address.overallAddress
        }
      />
    </Box>
  );
};
export default AddressItemInfo;
