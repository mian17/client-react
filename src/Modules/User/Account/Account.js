import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import AccountContent from "./AccountContent/AccountContent";
import UserDrawer from "../UserDrawer/UserDrawer";

function DashboardContent() {
  return (
    <div className="container">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <UserDrawer />
        <AccountContent />
      </Box>
    </div>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
