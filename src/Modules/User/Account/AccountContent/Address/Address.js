import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddressItem from "./AddressItem";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import AddAddressModal from "../../../../Modal/AddAddressModal";
import { useRef } from "react";
const addresses = [
  {
    id: 0,
    name: "John Smith",
    phoneNumber: "(+84) 111111111",
    overallAddress: "phường somewhere, TP Somewhere, Tỉnh Somwhere",
    detailAddress: "số somewhere, đường somewhere",
    address:
      "Số somewhere, đường somewhere, phường somewhere, TP Somewhere, Tỉnh Somwhere",
    defaultAddress: true,
    addressCategory: "home",
  },
  {
    id: 1,
    name: "John Doe",
    phoneNumber: "(+84) 000000000",
    overallAddress: "phường đâu đó, TP đâu đó, Tỉnh đâu đó",
    detailAddress: "số đâu đó, đường đâu đó",
    address: "Số đâu đó, đường đâu đó, phường đâu đó, TP đâu đó, Tỉnh đâu đó",
    defaultAddress: false,
    addressCategory: "home",
  },
  {
    id: 2,
    name: "Nancy Wheeler",
    phoneNumber: "(+84) 666666666",
    overallAddress: "phường Upside Down, TP Upside Down, Tỉnh Upside Down",
    detailAddress: "số Upside Down, đường Upside Down",
    address:
      "Số Upside Down, đường Upside Down, phường Upside Down, TP Upside Down, Tỉnh Upside Down",
    defaultAddress: false,
    addressCategory: "work",
  },
];

const Address = () => {
  const openModalChildFunction = useRef(null);

  return (
    <Box sx={{ mt: 1 }}>
      <Box
        pb={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography component="span" variant="h5">
          Địa chỉ
        </Typography>

        <Button
          sx={{ alignItems: "center" }}
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => {
            openModalChildFunction.current();
          }}
        >
          Thêm địa chỉ
        </Button>
        <AddAddressModal openModalChildFunction={openModalChildFunction} />
      </Box>
      {addresses.map((address, index) => {
        return <AddressItem key={index} address={address} />;
      })}
    </Box>
  );
};
export default Address;
