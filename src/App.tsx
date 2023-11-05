import "./App.css";
import Overview from "./components/Overview";
import { MenuBar } from "./components/MenuBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <>
      {/* <ThemeProvider theme={darkTheme}> */}
      <MenuBar />
      <Overview />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
