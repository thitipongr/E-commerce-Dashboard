import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import CustomerDataTable from "../components/Customer/CustomerDataTable";
import { useEffect, useRef, useState } from "react";
import {
  GridColDef,
  GridRenderCellParams,
  GridValueGetterParams,
} from "@mui/x-data-grid";
import data from "../assets/mock/Customer/Customer.json";
import { FindInPage, Edit, Delete } from "@mui/icons-material";

const Customer = () => {
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
      field: "customerName",
      headerName: "Customer Name",
      type: "string",
      width: setColumnMinWidth,
      minWidth: 180,
    },
    {
      field: "phone",
      headerName: "Phone",
      type: "string",
      width: setColumnMinWidth,
      minWidth: 110,
    },
    {
      field: "email",
      headerName: "E-mail",
      type: "number",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 120,
    },
    {
      field: "sumPaid",
      headerName: "Summary Paid",
      type: "number",
      width: setColumnMinWidth,
      minWidth: 160,
      valueGetter: (params: GridValueGetterParams) => params.row.sumPaid,
      renderCell: (params: GridRenderCellParams) =>
        params.row.sumPaid.toLocaleString("en-US", {
          style: "currency",
          currency: "THB",
        }),
    },
    {
      field: "subDate",
      headerName: "Subscribe Date",
      type: "date",
      headerAlign: "center",
      align: "center",
      width: setColumnMinWidth,
      minWidth: 180,
      valueGetter: (params: GridValueGetterParams) => {
        const [day, month, year] = params.row.subDate.split("/");
        return new Date(`${year}-${month}-${day}`);
      },
      renderCell: (params: GridRenderCellParams) => {
        const [day, month, year] = params.row.subDate.split("/");
        return `${day}/${month}/${year}`;
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
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Customer
          </Typography>
          <ButtonGroup
            size="small"
            sx={{
              ".MuiButtonGroup-grouped": {
                borderColor: "#bdbdbd",
                color: "black",
              },
            }}
          >
            <Input placeholder="Find" sx={{ width: { xs: "40px", sm: '200px' } }} />
            <Button>Add</Button>
            <Button>Import</Button>
          </ButtonGroup>
        </Stack>
      </Box>
      <Box mt={"1rem"} height={"calc(100vh - 32px);"}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <CustomerDataTable
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

export default Customer;
