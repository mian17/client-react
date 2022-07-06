import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AddressItemInfoItem = (props) => {
  return (
    <Box sx={{ display: "flex", fontSize: "0.875rem" }}>
      <Typography
        sx={{ flexBasis: "24%", textAlign: "right", fontSize: "0.875rem" }}
      >
        {props.label}:
      </Typography>
      <span style={{ marginLeft: "10%" }}>{props.value}</span>
    </Box>
  );
};
export default AddressItemInfoItem;
