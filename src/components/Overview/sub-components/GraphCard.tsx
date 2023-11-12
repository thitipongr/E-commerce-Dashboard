import { useState, ChangeEvent } from "react";
import {
  Box,
  FormControlLabel,
  Grid,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { intToString } from "../../../context/overview/overview-contaxt-function";
import { Line } from "react-chartjs-2";
import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
  PlayCircleFilledWhiteSharp,
  StopCircleSharp,
} from "@mui/icons-material";
import dayjs from "dayjs";

interface GraphCardProps {
  data: {
    label: string;
    post_data: number;
    current_data: number;
    post_date: string;
    current_date: string;
  };
}

const GraphCard = (props: GraphCardProps) => {
  const post_profit = props.data.post_data;
  const current_profit = props.data.current_data;

  const total_profit_persent = (current_profit / post_profit - 1) * 100;

  const profit_color_light =
    total_profit_persent > 0 ? "#4caf5050" : "#ef535050";
  const profit_color_dark = total_profit_persent > 0 ? "#1b5e20" : "#c62828";

  const options = {
    scales: {
      x: { display: false },
      y: { display: false },
    },
    tension: 0.4,
    maintainAspectRatio: false,
  };

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        fill: true,
        data: labels.map(() => Math.random() * 1000),
        borderColor: profit_color_dark,
        backgroundColor: profit_color_light,
      },
    ],
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Grid
      container
      direction={"row"}
      justifyContent={"space-between"}
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

          <FormControlLabel
            sx={{ margin: "unset" }}
            control={
              <Switch
                sx={{ display: "none" }}
                checked={checked}
                onChange={handleChange}
              />
            }
            label={
              <Stack
                ml={1}
                p={0.5}
                border={"2px solid"}
                borderRadius={1}
                borderColor={
                  total_profit_persent > 0 ? "success.dark" : "error.dark"
                }
                bgcolor={total_profit_persent > 0 ? "#4caf5050" : "#ef535050"}
                alignItems={"center"}
                flexDirection={"row"}
                sx={{
                  "&:hover": {
                    bgcolor: `${
                      total_profit_persent > 0 ? "#4caf5090" : "#ef535090"
                    }`,
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  pl={0.5}
                  mr={{ xs: "3px", md: 0 }}
                >
                  {intToString(Number(Number(total_profit_persent).toFixed(2)))}
                  %
                </Typography>
                <Box display={{ xs: "none", md: "flex" }}>
                  {total_profit_persent > 0 ? (
                    <KeyboardDoubleArrowUp />
                  ) : (
                    <KeyboardDoubleArrowDown />
                  )}
                </Box>
              </Stack>
            }
          />
        </Stack>
      </Grid>
      <Grid item xs={12} mb={1}>
        <Stack direction={"row"} alignItems={"end"} spacing={1}>
          <Typography variant="h4">{intToString(current_profit)}</Typography>
          <Typography variant="h5" color={"grey.500"}>
            {intToString(post_profit)}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Box width={"100%"}>
            {checked ? (
              <Line
                width={100}
                height={48}
                options={options}
                data={data}
                id={`${props.data.label}-line-graph`}
              />
            ) : null}
          </Box>
          <Box>
            <Stack alignItems={"end"}>
              <Typography variant="body1">
                <Stack direction={"row"}>
                  <PlayCircleFilledWhiteSharp />
                  {dayjs(props.data.current_date).format("DD/MM/YYYY")}
                </Stack>
              </Typography>
              <Typography variant="body1">
                <Stack direction={"row"}>
                  <StopCircleSharp />
                  {dayjs(props.data.post_date).format("DD/MM/YYYY")}
                </Stack>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default GraphCard;
