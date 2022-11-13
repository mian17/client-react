import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import UserDrawer from "../UserDrawer/UserDrawer";
import NotificationCenter from "./NotificationCenter/NotificationCenter";
import Footer from "../../../Widgets/Footer";

// DONT' DELETE
function NotificationContent() {
  return (
    <>
      <div className="container">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <UserDrawer />
          <NotificationCenter />
        </Box>
      </div>
      <Footer />
    </>
  );
}

export default function NonLegacyNotifications() {
  return <NotificationContent />;
}
