import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import AddressItemInfo from "./AddressItemInfo/AddressItemInfo";
import Paper from "@mui/material/Paper";

import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import AddressItemFunctions from "./AddressItemFunctions/AddressItemFunctions";

const AddressItem = (props) => {
  return (
    <Paper
      sx={{
        border: "1px solid #eee",
        borderRadius: 4,
        paddingX: 2,
        paddingY: 4,
        marginBottom: 2,
      }}
    >
      <Grid
        rowSpacing={1}
        alignItems="center"
        justifyContent="center"
        container
      >
        <Grid item lg={9} md={9}>
          <AddressItemInfo address={props.address} />
        </Grid>
        <Grid item>
          <AddressItemFunctions addressData={props.address} />
        </Grid>
      </Grid>
    </Paper>
  );
};
export default AddressItem;
