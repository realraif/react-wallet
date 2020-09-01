import React from "react";
import { Grid } from "@material-ui/core";
import SplineChart from 'components/charts/StrippedSplineChart/StrippedSplineChart';

const Balances = (props) => {
  return (
    <Grid container justify="space-around" alignItems="center">
      <Grid item xs={3}>
      <SplineChart data={[1, 3, 4, 5, 2, 7, 2, 1, 4, 3, 1, 3, 4]} height="70" color="#a275d0" />
      </Grid>
      <Grid item xs={3}>
        balance
      </Grid>
      <Grid item xs={3}>
        balance
      </Grid>
    </Grid>
  );
};

export default Balances;
