import "./App.css";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./assets/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./views/Overview";
import SalesReport from "./views/SalesReport";
import Customer from "./views/Customer";
import Inventory from "./views/Inventory";
import Header from "./views/Header";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Overview />} />
          <Route path="SalesReport" element={<SalesReport />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Customer" element={<Customer />} />
          <Route path="*" element={<Overview />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
