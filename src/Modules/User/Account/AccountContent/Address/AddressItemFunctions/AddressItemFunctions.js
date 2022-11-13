import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ChangeAddressModal from "../../../../../Modal/ChangeAddressModal";
import { useRef } from "react";
import DeleteAddressItemDialog from "./DeleteAddressItemDialog";

const AddressItemFunctions = (props) => {
  const openModalChildFunction = useRef(null);
  const openDialogChildFunction = useRef(null);
  return (
    <Box>
      <Box
        mb={1}
        sx={{
          display: "flex",
          justifyContent: props.addressData.defaultAddress
            ? "flex-end"
            : "space-between",
          p: 1,
        }}
      >
        <Button variant="text" onClick={() => openModalChildFunction.current()}>
          Sửa
        </Button>
        <ChangeAddressModal
          openModalChildFunction={openModalChildFunction}
          addressData={props.addressData}
        />

        {!props.addressData.defaultAddress && (
          <>
            <Button
              variant="text"
              onClick={() => openDialogChildFunction.current()}
            >
              Xóa
            </Button>
            <DeleteAddressItemDialog
              openDialogChildFunction={openDialogChildFunction}
              addressData={props.addressData}
            />
          </>
        )}
      </Box>
      <Button variant="outlined">Thiết Lập Mặc Định</Button>
    </Box>
  );
};
export default AddressItemFunctions;
