import "./App.css";
import Overview from "./components/Overview";
import { ResponsiveAppBar } from "./components/ResponsiveAppBar";
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
        <ResponsiveAppBar />
        <Overview />
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
