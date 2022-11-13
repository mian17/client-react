import Box from "@mui/material/Box";
import AddressItemInfoItem from "./AddressItemInfoItem";
import AddressItemFirstInfoItem from "./AddressItemFirstInfoItem";

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
