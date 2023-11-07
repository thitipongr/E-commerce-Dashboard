import "./App.css";
import Overview from "./views/Overview";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./views/Header";
import "./assets/global.css"

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      <Header />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
