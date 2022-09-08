import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import AccountContent from "./AccountContent/AccountContent";
import UserDrawer from "../UserDrawer/UserDrawer";
import Footer from "../../../Widgets/Footer";

function DashboardContent() {
  return (
      <>
          <div className="container">
              <Box sx={{display: "flex"}}>
                  <CssBaseline/>
                  <UserDrawer/>
                  <AccountContent/>
              </Box>
          </div>
          <Footer/>
      </>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
