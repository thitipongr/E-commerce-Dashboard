import { Grid, Paper, styled } from "@mui/material";

const Overview = () => {
  const Item = styled(Paper)(() => ({
    backgroundColor: "#98d6a9",
    padding: 8,
    textAlign: "center",
    color: "black",
  }));

  return (
    <Grid container spacing={4}>
      <Grid item xs={6}>
        <Item elevation={3}>One</Item>
      </Grid>

      <Grid item xs={6}>
        <Item elevation={3}>Two</Item>
      </Grid>

      <Grid item xs={6}>
        <Item elevation={3}>Three</Item>
      </Grid>

      <Grid item xs={6}>
        <Item elevation={3}>Four</Item>
      </Grid>

      <Grid item xs={6}>
        <Item elevation={3}>Five</Item>
      </Grid>

      <Grid item xs={6}>
        <Item elevation={3}>Six</Item>
      </Grid>
    </Grid>
  );
};

export default Overview;
