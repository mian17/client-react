import Header from "./Widgets/Header";
import Content from "./Widgets/Content";
import Footer from "./Widgets/Footer";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CartProvider from "./store/CartProvider";

import { BrowserRouter } from "react-router-dom";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";

import "dayjs/locale/vi";
import dayjs from "dayjs";

const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.locale("vi");
dayjs.tz.setDefault("Asia/Ho_Chi_Minh");

const theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      '"Inter"',
      '"Libre Bodoni"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#321e1e", // old color:
    },
    customTransparent: {
      main: "rgba(255,255,255, 0)",
      contrastText: "#f4f1e0",
    },
    customShowNavbar: {
      main: "#f4f1e0",
      contrastText: "#321e1e",
    },
    siteButton: {
      main: "#321e1e",
      contrastText: "#f4f1e0",
    },
    customBadge: {
      main: "#e9ecef",
      contrastText: "#dd2222",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <CartProvider>
            <Header />
            <Content />
            {/*<Footer />*/}
          </CartProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
