import Header from "./Widgets/Header";
import Content from "./Widgets/Content";
import Footer from "./Widgets/Footer";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
      <Header />
      <Content />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
