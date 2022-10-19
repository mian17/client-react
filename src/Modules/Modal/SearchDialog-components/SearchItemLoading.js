import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Skeleton } from "@mui/material";
import * as React from "react";

export default function SearchItemLoading() {
  return (
    <Box py={1}>
      <Grid spacing={1} container sx={{ alignItems: "center", p: 2 }}>
        <Grid item xs={12} sm={3} md={2} sx={{ flexGrow: 1 }}>
          <Skeleton variant="rectangular" width={96} height={96} />
        </Grid>
        <Grid item xs={8} sm={7} md={8}>
          <Skeleton variant="rectangular" />
        </Grid>
        <Grid
          item
          xs={4}
          sm={2}
          md={2}
          justifySelf="flex-end"
          alignSelf="center"
        >
          <Skeleton variant="rectangular" />
        </Grid>
      </Grid>
    </Box>
  );
}
