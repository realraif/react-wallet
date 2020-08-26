import React from "react";
import { Grid } from "@material-ui/core";

const Balances = (props) => {
  return (
    <Grid container justify="space-around" alignItems="center">
      <Grid item xs={3}>
        balance
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
