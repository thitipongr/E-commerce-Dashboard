import Header from "../components/Overview/Header";
import { Box, Container, Grid } from "@mui/material";
import GraphCard from "../components/Overview/sub-components/GraphCard";
import dayjs from "dayjs";

// * 1. หน้า Overview:
// ///TODO: แสดงยอดขายรวม, จำนวนสินค้าที่ขายได้, จำนวนลูกค้าใหม่, และอัตราการเติบโตเมื่อเทียบกับเดือนที่แล้ว
// ///TODO: แสดงยอดขายรวม
// ///TODO: จำนวนสินค้าที่ขายได้
// TODO: จำนวนลูกค้าใหม่
// TODO: อัตราการเติบโตเมื่อเทียบกับเดือนที่แล้ว
// TODO: กราฟแสดงยอดขายในแต่ละวันของเดือนปัจจุบัน
// TODO: รายการสินค้าขายดี 5 อันดับแรก

const Overview = () => {
  const data = [
    {
      label: "Summary Sale",
      post_data: Math.random() * 10000000,
      current_data: Math.random() * 10000000,
      post_date: String(dayjs()),
      current_date: String(dayjs().subtract(1, "day")),
    },
    {
      label: "Products Sold",
      post_data: Math.random() * 10000000,
      current_data: Math.random() * 10000000,
      post_date: String(dayjs()),
      current_date: String(dayjs().subtract(1, "day")),
    },
  ];

  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: "1rem" }}>
        <Box mb={"1rem"}>
          <Header />
        </Box>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {data.map((data_data, index) => {
            return (
              <Grid key={index} item xs={12} md={3} sm={6}>
                <GraphCard data={data_data} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Overview;
