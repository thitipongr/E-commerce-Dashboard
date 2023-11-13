import Header from "../components/Overview/Header";
import { Box, Container, Grid } from "@mui/material";
import LineGraphCard from "../components/Overview/sub-components/LineGraphCard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);
import dayjs from "dayjs";

// * 1. หน้า Overview:
// ///TODO: แสดงยอดขายรวม, จำนวนสินค้าที่ขายได้, จำนวนลูกค้าใหม่, และอัตราการเติบโตเมื่อเทียบกับเดือนที่แล้ว
// ///TODO: แสดงยอดขายรวม
// ///TODO: จำนวนสินค้าที่ขายได้
// ///TODO: จำนวนลูกค้าใหม่
// ///TODO: อัตราการเติบโตเมื่อเทียบกับเดือนที่แล้ว
// TODO: กราฟแสดงยอดขายในแต่ละวันของเดือนปัจจุบัน
// TODO: รายการสินค้าขายดี 5 อันดับแรก

const Overview = () => {
  const data = {
    first_section_bundle: [
      {
        label: "Summary Sale",
        post_data: Math.random() * 10000000,
        current_data: Math.random() * 10000000,
        post_date: String(dayjs().subtract(1, "day").startOf("day")),
        current_date: String(dayjs()),
      },
      {
        label: "Products Sold",
        post_data: Math.random() * 10000000,
        current_data: Math.random() * 10000000,
        post_date: String(dayjs().subtract(1, "day").startOf("day")),
        current_date: String(dayjs()),
      },
      {
        label: "New Customer",
        post_data: Math.random() * 10000000,
        current_data: Math.random() * 10000000,
        post_date: String(dayjs().subtract(1, "day").startOf("day")),
        current_date: String(dayjs()),
      },
      {
        label: "Growth Rate",
        post_data: Math.random() * 10000000,
        current_data: Math.random() * 10000000,
        post_date: String(dayjs().subtract(1, "day").startOf("day")),
        current_date: String(dayjs()),
      },
    ],
    second_section: {
      label: "Monthly Sales",
      post_data: Math.random() * 10000000,
      current_data: Math.random() * 10000000,
      post_date: String(dayjs().subtract(1, "month").startOf("month")),
      current_date: String(dayjs()),
    },
  };

  return (
    <Container maxWidth="xl" sx={{ mt: "1rem" }}>
      <Box mb={"1rem"}>
        <Header />
      </Box>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {data.first_section_bundle.map((data_data, index) => {
          return (
            <Grid key={index} item xs={12} md={3} sm={6}>
              <LineGraphCard data={data_data} />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <LineGraphCard data={data.second_section} />
        </Grid>
        <Grid item xs={12}>
          {/* <GraphCard data={data.first_section_bundle[0]} /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Overview;
