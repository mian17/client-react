import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import UserDrawer from "../UserDrawer/UserDrawer";
import OrderCategoricalContent from "./OrderContent/OrderContent";
function OrderContent() {
  return (
    <div className="container">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <UserDrawer />
        <OrderCategoricalContent />
      </Box>
    </div>
  );
}

export default function Orders() {
  return <OrderContent />;
}
