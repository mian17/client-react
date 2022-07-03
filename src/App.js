import Header from "./Widgets/Header";
import Content from "./Widgets/Content";
import Footer from "./Widgets/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CartProvider from "./store/CartProvider";

import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Content />
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
