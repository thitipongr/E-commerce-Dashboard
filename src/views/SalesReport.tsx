import { Box, Grid, Stack, Typography } from "@mui/material";
import SalesReportDataTable from "../components/SalesReport/SalesReportDataTable";
import { useEffect, useRef, useState } from "react";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import data from "../assets/mock/SalesReport/SaleReport.json";
import { FindInPage } from "@mui/icons-material";

const SalesReport = () => {
  const [elementDimension, setElementDimension] = useState([0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current != null) {
      setElementDimension([ref.current.clientWidth, ref.current.clientHeight]);
    }
  }, []);

  const rows = data;

  const setColumnMinWidth =
    (elementDimension[0] - 70) / (Object.keys(rows[0]).length + 1);
  const setColumnMinHeight = elementDimension[1] - 64;

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "OrderId",
      type: "string",
      width: setColumnMinWidth,
      minWidth: 120,
    },
    {
      field: "custName",
      headerName: "Customer Name",
      type: "string",
      width: setColumnMinWidth,
      minWidth: 180,
    },
    {
      field: "custAddress",
      headerName: "Address",
      type: "string",
      width: setColumnMinWidth,
      minWidth: 130,
    },
    {
      field: "custPhone",
      headerName: "Phone",
      type: "string",
      width: setColumnMinWidth,
      minWidth: 110,
    },
    {
      field: "statePay",
      headerName: "Payment",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 130,
      valueGetter: (params: GridValueGetterParams) => {
        const statePay = ["Paid", "COD", "Partial", "Not yet", "Credit"];
        return statePay[params.row.statePay - 1];
      },
    },
    {
      field: "stateDeliver",
      headerName: "Deliver",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 130,
      valueGetter: (params: GridValueGetterParams) => {
        const statePay = [
          "Done",
          "No Recipient",
          "Transit",
          "Partial",
          "Ready",
          "Prepare",
          "Credit",
        ];
        return statePay[params.row.stateDeliver - 1];
      },
    },
    {
      field: "orderDetail",
      headerName: "Order",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 110,
      sortable: false,
      filterable: false,
      renderCell: () => {
        return <FindInPage />;
      },
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      type: "date",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 150,
      valueGetter: (params: GridValueGetterParams) => {
        const [day, month, year] = params.row.orderDate.split("/");
        return new Date(`${year}-${month}-${day}`);
      },
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: setColumnMinWidth,
      minWidth: 110,
      valueGetter: () =>
        (Math.random() * 10000).toLocaleString("en-US", {
          style: "currency",
          currency: "THB",
        }),
    },
  ];

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
              rows={rows}
              setColumnMinHeight={setColumnMinHeight}
              columns={columns}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default SalesReport;
