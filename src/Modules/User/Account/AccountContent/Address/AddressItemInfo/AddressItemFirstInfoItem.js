import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const AddressItemFirstInfoItem = (props) => {
  return (
    <Box sx={{ display: "flex", fontSize: "1rem" }}>
      <Typography
        sx={{ flexBasis: "24%", textAlign: "right", pb: 2, fontSize: "1rem" }}
      >
        {props.label}:
      </Typography>
      <span style={{ marginLeft: "10%" }}>{props.value}</span>
    </Box>
  );
};
export default AddressItemFirstInfoItem;
