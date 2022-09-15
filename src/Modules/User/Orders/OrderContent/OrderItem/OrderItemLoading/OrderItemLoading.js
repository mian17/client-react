import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Skeleton } from "@mui/material";

const OrderItemLoading = () => {
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
        <Grid spacing={1} container>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <Skeleton variant="rectangular" />
          </Grid>
          <Grid item sx={{ marginLeft: "auto" }} lg={3} md={3} xs={3} sm={3}>
            <Skeleton variant="rectangular" />
          </Grid>
        </Grid>
        <br />
        <Grid spacing={1} container>
          <Grid lg={9} md={9} xs={9} sm={9} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
          <Grid lg={3} md={3} xs={3} sm={3} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
        </Grid>
        <br />
        <Grid spacing={1} container>
          <Grid lg={9} md={9} xs={9} sm={9} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
          <Grid lg={3} md={3} xs={3} sm={3} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
        </Grid>
        <br />
        <Grid spacing={1} container>
          <Grid lg={9} md={9} xs={9} sm={9} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
          <Grid lg={3} md={3} xs={3} sm={3} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
        </Grid>
        <br />

        <Skeleton
          variant="rectangular"
          width="240px"
          sx={{ marginLeft: "auto" }}
          height="48px"
        />
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
        <Grid spacing={1} container>
          <Grid item lg={6} md={6} xs={6} sm={6}>
            <Skeleton variant="rectangular" />
          </Grid>
          <Grid item sx={{ marginLeft: "auto" }} lg={3} md={3} xs={3} sm={3}>
            <Skeleton variant="rectangular" />
          </Grid>
        </Grid>
        <br />
        <Grid spacing={1} container>
          <Grid lg={9} md={9} xs={9} sm={9} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
          <Grid lg={3} md={3} xs={3} sm={3} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
        </Grid>
        <br />
        <Grid spacing={1} container>
          <Grid lg={9} md={9} xs={9} sm={9} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
          <Grid lg={3} md={3} xs={3} sm={3} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
        </Grid>
        <br />
        <Grid spacing={1} container>
          <Grid lg={9} md={9} xs={9} sm={9} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
          <Grid lg={3} md={3} xs={3} sm={3} item>
            <Skeleton variant="rectangular" height="80px" />
          </Grid>
        </Grid>
        <br />

        <Skeleton
          variant="rectangular"
          width="240px"
          sx={{ marginLeft: "auto" }}
          height="48px"
        />
      </Paper>
    </>
  );
};
export default OrderItemLoading;
