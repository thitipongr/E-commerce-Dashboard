import {
  Box,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

type DataTableProps = {
  data: {
    label: string;
  };
  elementHeight: number;
};

const createData = (productName: string, summary: number) => {
  return { productName, summary };
};

const rows = [
  createData("Frozen yoghurt", 356),
  createData("Ice cream sandwich", 305),
  createData("Eclair", 262),
  createData("Cupcake", 237),
  createData("Gingerbread", 159),
];
const DataTable = (props: DataTableProps) => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
      mb={{ xs: 2, sm: 0 }}
      sx={{
        padding: "1rem",
        border: "1px solid",
        borderRadius: "10px",
        borderColor: "grey.400",
      }}
    >
      <Grid item xs={12} mb={1}>
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {props.data.label}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} mb={1}>
        <Box
          height={{
            xs: `${props.elementHeight + 52}px`,
            sm: `${props.elementHeight - 32 - 16 - 16 - 2 - 16 - 16}px`,
          }}
        >
          <TableContainer>
            <Table
              sx={{
                height: {
                  xs: `${props.elementHeight + 52 + 16}px`,
                  sm: `${props.elementHeight - 32 - 16 - 16 - 2 - 16}px`,
                },
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      display: { md: "table-cell", sm: "none" },
                      fontWeight: 900,
                    }}
                  >
                    Product
                  </TableCell>
                  <TableCell
                    sx={{
                      display: { md: "table-cell", sm: "none" },
                      fontWeight: 900,
                    }}
                    align="right"
                  >
                    Summary
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.productName}
                    sx={{
                      // height: {
                      //   xs: (props.elementHeight + 52) / 6,
                      //   sm:
                      //     (props.elementHeight - 32 - 16 - 16 - 2 - 16 - 16) /
                      //     6,
                      //   md: (props.elementHeight - 32) / 7,
                      // },
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{
                        maxWidth: { xs: "16ch" },
                        overflow: { xs: "hidden" },
                        whiteSpace: { xs: "nowrap" },
                        textOverflow: { xs: "ellipsis" },
                      }}
                    >
                      {row.productName}
                    </TableCell>
                    <TableCell
                      sx={{
                        display: { md: "table-cell", sm: "none" },
                      }}
                      align="right"
                    >
                      {row.summary}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Grid>
    </Grid>
  );
};

export default DataTable;
