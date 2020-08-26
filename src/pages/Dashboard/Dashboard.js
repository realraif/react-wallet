import React from "react";
import { Grid } from "@material-ui/core";
import Balances from './Balances/Balances';

const Dashboard = (props) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <Balances />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
