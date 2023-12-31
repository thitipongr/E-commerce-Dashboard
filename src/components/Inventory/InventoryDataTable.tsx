import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type SalesReportDataTableProps = {
  rows: {
    id: number;
    productName: string;
    category: string;
    quantity: number;
    quantityState: number;
  }[];
  setColumnMinHeight: number;
  columns: GridColDef[];
};

const InventoryDataTable = (props: SalesReportDataTableProps) => {
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
                field: "quantityState",
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
export default InventoryDataTable;
