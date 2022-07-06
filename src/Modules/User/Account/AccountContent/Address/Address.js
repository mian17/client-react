import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddressItem from "./AddressItem";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
const addresses = [
  {
    name: "John Smith",
    phoneNumber: "(+84) 111111111",
    address:
      "Số somewhere, đường somewhere, phường somewhere, TP Somewhere, Tỉnh Somwhere",
    defaultAddress: true,
  },
  {
    name: "John Doe",
    phoneNumber: "(+84) 000000000",
    address: "Số đâu đó, đường đâu đó, phường đâu đó, TP đâu đó, Tỉnh đâu đó",
    defaultAddress: false,
  },
  {
    name: "Nancy Wheeler",
    phoneNumber: "(+84) 666666666",
    address:
      "Số Upside Down, đường Upside Down, phường Upside Down, TP Upside Down, Tỉnh Upside Down",
    defaultAddress: false,
  },
];

const Address = () => {
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
        >
          Thêm địa chỉ
        </Button>
      </Box>
      <AddressItem />
      <AddressItem />
    </Box>
  );
};
export default Address;
