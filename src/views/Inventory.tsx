import { Box, Grid, Stack, Typography } from "@mui/material";
import InventoryDataTable from "../components/Inventory/InventoryDataTable";
import { useEffect, useRef, useState } from "react";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import data from "../assets/mock/Inventory/Inventory.json";
import { FindInPage, Edit, Delete } from "@mui/icons-material";

const Inventory = () => {
  const [elementDimension, setElementDimension] = useState([0, 0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current != null) {
      setElementDimension([ref.current.clientWidth, ref.current.clientHeight]);
    }
  }, []);

  const rows = data;

  const setColumnMinWidth =
    (elementDimension[0] - 70) / Object.keys(rows[0]).length;
  const setColumnMinHeight = elementDimension[1] - 64;

  const columns: GridColDef[] = [
    {
      field: "productName",
      headerName: "Product Name",
      type: "string",
      width: setColumnMinWidth,
      minWidth: 160,
    },
    {
      field: "category",
      headerName: "Category",
      type: "string",
      width: setColumnMinWidth,
      minWidth: 130,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 130,
    },
    {
      field: "quantityState",
      headerName: "Status",
      type: "string",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 120,
      valueGetter: (params: GridValueGetterParams) => {
        const statePay = ["In Stock", "Low Stock", "Out of Stock"];
        return statePay[params.row.quantityState - 1];
      },
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 120,
      sortable: false,
      filterable: false,
      renderCell: () => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "50%",
            }}
          >
            <FindInPage />
            <Edit />
            <Delete />
          </div>
        );
      },
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
            <InventoryDataTable
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

export default Inventory;
