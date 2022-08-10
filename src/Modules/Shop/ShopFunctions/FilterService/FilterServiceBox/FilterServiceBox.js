import Grid from "@mui/material/Grid";
import FilterService from "../FilterService";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function FilterServiceBox() {
  return (
    <Grid
      lg={2}
      sx={{
        borderRight: "1px solid #bdb498",
        borderBottom: "1px solid #bdb498",
        p: 1,
      }}
      item
    >
      <FilterService title={"Dịch vụ"} contents={["Freeship", "Giao nhanh"]} />
      <FilterService
        title={"Nơi bán"}
        contents={["TP.HCM", "Hà Nội", "Cần Thơ", "Đà Nẵng", "Khánh Hòa"]}
        more
      />
      <Box sx={{ textAlign: "center" }}>
        <Button sx={{ textTransform: "capitalize" }} variant="contained">
          Thiết lập lại
        </Button>
      </Box>
    </Grid>
  );
}
