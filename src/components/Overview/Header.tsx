import {
  Box,
  Stack,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const Header = () => {
  const [startDate, setStartDate] = useState<Dayjs | null>(dayjs());
  const [endDate, setEndDate] = useState<Dayjs | null>(dayjs());
  const [period, setPeriod] = useState(1);

  const overviewPeriodSelectHandler = (event: SelectChangeEvent) => {
    const getPeriod = event.target.value;
    setPeriod(Number(getPeriod));

    switch (Number(getPeriod)) {
      case 1: {
        setStartDate(dayjs());
        setEndDate(dayjs());
        break;
      }
      case 2: {
        setStartDate(dayjs().startOf("week"));
        setEndDate(dayjs());
        break;
      }
      case 3: {
        setStartDate(dayjs().subtract(7, "day").startOf("week"));
        setEndDate(dayjs().subtract(7, "day"));
        break;
      }
      case 4: {
        setStartDate(dayjs().subtract(6, "day"));
        setEndDate(dayjs());
        break;
      }
      case 5: {
        setStartDate(dayjs().startOf("month"));
        setEndDate(dayjs());
        break;
      }
      case 6: {
        setStartDate(dayjs().subtract(1, "month").startOf("month"));
        setEndDate(dayjs().subtract(1, "month").endOf("month"));
        break;
      }
      case 7: {
        setStartDate(dayjs().startOf("year"));
        setEndDate(dayjs());
        break;
      }
      case 8: {
        setStartDate(dayjs().subtract(1, "year").startOf("year"));
        setEndDate(dayjs().subtract(1, "year").endOf("year"));
        break;
      }
      case 9: {
        setStartDate(dayjs("1900-01-1"));
        setEndDate(dayjs());
        break;
      }
      default: {
        null;
        break;
      }
    }
  };

  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={{ xs: "center", sm: "space-between" }}
      alignItems="center"
      spacing={1}
      // mb={4}
    >
      <Typography variant="h5">Welcome, {`Overview`}</Typography>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: "1rem", sm: "8px" }}
          >
            <DatePicker
              label="Start Date"
              value={startDate}
              onChange={(newValue) => {
                setStartDate(newValue);
                if (newValue && endDate) {
                  newValue > endDate ? setEndDate(newValue) : null;
                }
                setPeriod(10);
              }}
              disableFuture
              format="DD/MM/YYYY"
            />
            <DatePicker
              label="End Date"
              value={endDate}
              onChange={(newValue) => {
                setEndDate(newValue);
                if (newValue && startDate) {
                  newValue < startDate ? setStartDate(newValue) : null;
                }
                setPeriod(10);
              }}
              disableFuture
              format="DD/MM/YYYY"
            />

            <Box sx={{ minWidth: 150 }}>
              <FormControl fullWidth>
                <InputLabel id="overview-period-select-label">
                  Period
                </InputLabel>
                <Select
                  labelId="overview-period-select-label"
                  id="overview-period-select"
                  value={String(period)}
                  label="Period"
                  onChange={overviewPeriodSelectHandler}
                >
                  <MenuItem value={1}>Today</MenuItem>
                  <MenuItem value={2}>This Week</MenuItem>
                  <MenuItem value={3}>Last Week</MenuItem>
                  <MenuItem value={4}>Last 7 Days</MenuItem>
                  <MenuItem value={5}>Curent Month</MenuItem>
                  <MenuItem value={6}>Last Month</MenuItem>
                  <MenuItem value={7}>Curent Year</MenuItem>
                  <MenuItem value={8}>Last Year</MenuItem>
                  <MenuItem value={9}>All Time</MenuItem>
                  <MenuItem value={10} disabled>
                    Custom
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </LocalizationProvider>
      </Box>
    </Stack>
  );
};

export default Header;
