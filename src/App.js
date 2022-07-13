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
  palette: {
    primary: {
      main: "#dd2222",
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
            <Footer />
          </CartProvider>
        </BrowserRouter>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
