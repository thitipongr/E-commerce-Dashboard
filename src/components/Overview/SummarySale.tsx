// TODO: แสดงยอดขายรวม
import { Box, Grid, Stack, Typography } from "@mui/material";
import {
  KeyboardDoubleArrowUp,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
);

const SummarySale = () => {
  const post_profit = Math.random() * 10000000;
  const current_profit = Math.random() * 10000000;
  const total_profit_persent = (current_profit / post_profit - 1) * 100;

  const profit_color_light =
    total_profit_persent > 0 ? "#4caf5050" : "#ef535050";
  const profit_color_dark = total_profit_persent > 0 ? "#1b5e20" : "#c62828";

  const options = {
    scales: {
      x: { display: false },
      y: { display: false },
    },
    tension: 0.4,
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  console.log(labels.map(() => Math.random() * 1000));

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: labels.map(() => Math.random() * 1000),
        borderColor: profit_color_dark,
        backgroundColor: profit_color_light,
      },
    ],
  };

  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      sx={{
        padding: "1rem",
        border: "1px solid",
        borderRadius: "10px",
        borderColor: "grey.400",
      }}
    >
      <Grid item xs={12} mb={1}>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Summary Sale
          </Typography>
          <Stack
            ml={1}
            p={0.5}
            border={"2px solid"}
            borderRadius={1}
            borderColor={
              total_profit_persent > 0 ? "success.dark" : "error.dark"
            }
            bgcolor={total_profit_persent > 0 ? "success.light" : "error.light"}
            alignItems={"center"}
            flexDirection={"row"}
          >
            <Typography variant="subtitle1">
              {total_profit_persent.toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
              %
            </Typography>
            <Box display={{ xs: "none", md: "flex" }}>
              {total_profit_persent > 0 ? (
                <KeyboardDoubleArrowUp />
              ) : (
                <KeyboardDoubleArrowDown />
              )}
            </Box>
          </Stack>
        </Stack>
      </Grid>
      <Grid item xs={12} mb={1}>
        <Typography variant="h4">
          {`${current_profit.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })} ฿`}
        </Typography>
        <Typography variant="h5" color={"grey.400"}>
          {`${post_profit.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })} ฿`}
        </Typography>
      </Grid>
      <Grid item xs={12} mb={1}>
        <Line options={options} data={data} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" textAlign={"right"}>
          {`Jan 01, 2023 - March 01, 2023`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SummarySale;
