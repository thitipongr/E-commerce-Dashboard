import { Box } from "@mui/material";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import data from "../../assets/mock/SalesReport/SaleReport.json";

type SalesReportDataTableProps = { elementDimension: [number, number] };

const SalesReportDataTable = (props: SalesReportDataTableProps) => {
  const rows = data;

  const setColumnMinWidth =
    (props.elementDimension[0] - 52) / (Object.keys(rows[0]).length + 1);
  const setColumnMinHeight = props.elementDimension[1] - 64;

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "OrderId",
      type: "string",
      width: setColumnMinWidth,
    },
    {
      field: "custName",
      headerName: "Customer Name",
      type: "string",
      width: setColumnMinWidth,
    },
    {
      field: "custAddress",
      headerName: "Address",
      type: "string",
      width: setColumnMinWidth,
    },
    {
      field: "custPhone",
      headerName: "Phone",
      type: "string",
      width: setColumnMinWidth,
    },
    {
      field: "statePay",
      headerName: "Payment",
      type: "string",
      width: setColumnMinWidth,
      valueGetter: (params: GridValueGetterParams) => {
        const statePay = ["Paid", "COD", "Partial", "Not yet", "Credit"];
        return statePay[params.row.statePay - 1];
      },
    },
    {
      field: "stateDeliver",
      headerName: "Deliver",
      type: "string",
      width: setColumnMinWidth,
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
      width: setColumnMinWidth,
    },
    {
      field: "orderDate",
      headerName: "Order Date",
      type: "date",
      width: setColumnMinWidth,
      valueGetter: (params: GridValueGetterParams) => {
        const [day, month, year] = params.row.orderDate.split("/");
        return new Date(`${year}-${month}-${day}`);
      },
    },
  ];
  return (
    <Box height={setColumnMinHeight}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 20 },
          },
          sorting: {
            sortModel: [
              {
                field: "id",
                sort: "desc",
              },
            ],
          },
        }}
        pageSizeOptions={[5, 10, 20, 50, 100]}
        checkboxSelection
      />
    </Box>
  );
};
export default SalesReportDataTable;
