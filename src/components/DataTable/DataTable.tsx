import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type SalesReportDataTableProps = {
  rows: {
    id: number;
    custName: string;
    custAddress: string;
    custPhone: string;
    statePay: number;
    stateDeliver: number;
    orderDetail: null;
    orderDate: string;
  }[];
  setColumnMinHeight: number;
  columns: GridColDef[];
};

const SalesReportDataTable = (props: SalesReportDataTableProps) => {
  return (
    <Box height={props.setColumnMinHeight}>
      <DataGrid
        rows={props.rows}
        columns={props.columns}
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
