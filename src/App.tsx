import "./App.css";
import "./assets/global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Overview from "./views/Overview";
import SalesReport from "./views/SalesReport";
import Customer from "./views/Customer";
import Inventory from "./views/Inventory";
import Header from "./views/Header";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { Container } from "@mui/material";

function App() {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault("Asia/Bangkok");

  return (
    <BrowserRouter>
      <Header />
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          pt: { xs: "64px", sm: "72px", md: "90px" },
        }}
      >
        <Routes>
          <Route index element={<Overview />} />
          <Route path="SalesReport" element={<SalesReport />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Customer" element={<Customer />} />
          <Route path="*" element={<Overview />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
