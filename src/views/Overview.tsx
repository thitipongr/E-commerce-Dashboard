import SummarySale from "../components/Overview/SummarySale";
import Header from "../components/Overview/Header";
import { Box, Container, Grid } from "@mui/material";
import ProductsSold from "../components/Overview/ProductsSold";

// * 1. หน้า Overview:
// // TODO: แสดงยอดขายรวม, จำนวนสินค้าที่ขายได้, จำนวนลูกค้าใหม่, และอัตราการเติบโตเมื่อเทียบกับเดือนที่แล้ว
// // TODO: แสดงยอดขายรวม
// TODO: จำนวนสินค้าที่ขายได้
// TODO: จำนวนลูกค้าใหม่
// TODO: อัตราการเติบโตเมื่อเทียบกับเดือนที่แล้ว
// TODO: กราฟแสดงยอดขายในแต่ละวันของเดือนปัจจุบัน
// TODO: รายการสินค้าขายดี 5 อันดับแรก

const Overview = () => {
  return (
    <div>
      <Container maxWidth="xl" sx={{ mt: "1rem" }}>
        <Box mb={"1rem"}>
          <Header />
        </Box>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} md={3} sm={6}>
            <SummarySale />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            <ProductsSold />
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            {/* <SummarySale /> */}
          </Grid>
          <Grid item xs={12} md={3} sm={6}>
            {/* <SummarySale /> */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Overview;
