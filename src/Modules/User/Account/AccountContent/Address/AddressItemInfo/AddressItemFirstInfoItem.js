import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
const AddressItemFirstInfoItem = (props) => {
  return (
    <Box sx={{ display: "flex", fontSize: "1rem" }}>
      <Typography
        sx={{ flexBasis: 100, textAlign: "right", pb: 2, fontSize: "1rem" }}
      >
        {props.label}:
      </Typography>
      <span style={{ marginLeft: "10%", overflowWrap: "break-word" }}>
        {props.value.name}
      </span>
      {props.value.defaultAddress && (
        <Chip
          sx={{ marginLeft: 1 }}
          label="Mặc định"
          color="info"
          size="small"
        />
      )}
    </Box>
  );
};
export default AddressItemFirstInfoItem;
