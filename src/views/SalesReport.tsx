import { Box, Grid, Stack, Typography } from "@mui/material";
import SalesReportDataTable from "../components/SalesReport/SalesReportDataTable";
import { useEffect, useRef, useState } from "react";

const SalesReport = () => {
  const [elementDimension, setElementDimension] = useState([0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current != null) {
      setElementDimension([ref.current.clientWidth, ref.current.clientHeight]);
    }
  }, []);
  return (
    <Stack sx={{ height: "calc(100vh - 90px);" }} ref={ref}>
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Sales Report
        </Typography>
      </Box>
      <Box mt={"1rem"} height={"calc(100vh - 32px);"} id="xxxxx">
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <SalesReportDataTable
              elementDimension={[elementDimension[0], elementDimension[1]]}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default SalesReport;
