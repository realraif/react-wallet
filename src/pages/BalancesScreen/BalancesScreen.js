import React from "react";
import { Grid } from "@material-ui/core";
import BalanceSplineChart from "./BalanceSplineChart.js/BalanceSplineChart";

const Balances = ({ timeFrame, ...props }) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <BalanceSplineChart />
      </Grid>
    </Grid>
  );
};

export default Balances;
