import { useEffect, useState, useRef } from "react";
import Header from "../components/Overview/Header";
import { Box, Grid, Stack } from "@mui/material";
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
import OverviewDataTable from "../components/Overview/sub-components/OverviewDataTable";

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

  const [elementHeight, setElementHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current != null) {
      setElementHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <Stack
      direction={"column"}
      height={"100%"}
      justifyContent={"space-between"}
    >
      <Box mb={"1rem"}>
        <Header />
      </Box>
      <Box>
        <Grid container columnSpacing={2} rowSpacing={2}>
          {data.first_section_bundle.map((data_data, index) => {
            return (
              <Grid key={index} item xs={12} md={3} sm={6}>
                <LineGraphCard data={data_data} graphHeight={0} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box height={"100%"} mt={"1rem"} ref={ref}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} sm={8}>
            <LineGraphCard
              data={data.second_section}
              graphHeight={elementHeight}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <OverviewDataTable
              data={{ label: "Top Sales" }}
              elementHeight={elementHeight}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default Overview;
