import { Skeleton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const AddressLoading = () => {
  return (
    <>
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
          alignItems="center"
          justifyContent="center"
          container
          rowSpacing={2}
          spacing={2}
        >
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <Skeleton variant="rectangular" />
            <br />
            <Skeleton variant="rectangular" height={70} />
          </Grid>
          <Grid item lg={3} width={"50%"}>
            <Skeleton variant="rectangular" />
            <br />
            <Skeleton variant="rectangular" height={40} />
          </Grid>
        </Grid>
      </Paper>
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
          alignItems="center"
          justifyContent="center"
          container
          rowSpacing={2}
          spacing={2}
        >
          <Grid item lg={9} md={12} sm={12} xs={12}>
            <Skeleton variant="rectangular" />
            <br />
            <Skeleton variant="rectangular" height={70} />
          </Grid>
          <Grid item lg={3} width={"50%"}>
            <Skeleton variant="rectangular" />
            <br />
            <Skeleton variant="rectangular" height={40} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};
export default AddressLoading;
