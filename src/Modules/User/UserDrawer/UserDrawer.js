import * as React from "react";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import AvatarBox from "../Account/AvatarBox";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));
const UserDrawer = () => {
  // const [open, setOpen] = React.useState(false);
  //
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  //
  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  const drawerContent = (
    <>
      <AvatarBox />
      <Divider />
      <List component="nav">
        {/*{mainListItems}*/}
        <Link underline="none" component={NavLink} to="/user/account/profile">
          <ListItemButton color="secondary">
            <ListItemIcon color="primary">
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Tài khoản của tôi" color="secondary" />
          </ListItemButton>
        </Link>
        <Link underline="none" component={NavLink} to="/user/orders">
          <ListItemButton>
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Đơn mua" />
          </ListItemButton>
        </Link>
        <Link underline="none" component={NavLink} to="/user/notifications">
          <ListItemButton>
            <ListItemIcon>
              <NotificationsIcon />
            </ListItemIcon>
            <ListItemText primary="Thông báo" />
          </ListItemButton>
        </Link>
        <Link underline="none" component={NavLink} to="/user/vouchers">
          <ListItemButton>
            <ListItemIcon>
              <ConfirmationNumberIcon />
            </ListItemIcon>
            <ListItemText primary="Kho mã giảm giá" />
          </ListItemButton>
        </Link>

        <Divider sx={{ my: 1 }} />
      </List>
    </>
  );
  return (
    <>
      <Drawer variant="permanent" open={true}>
        {drawerContent}
      </Drawer>
      {/*<Button onClick={handleDrawerOpen} sx={{ display: "fixed" }} />*/}
    </>
  );
};
export default UserDrawer;
