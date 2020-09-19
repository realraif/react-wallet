import React from "react";
import { Grid } from "@material-ui/core";
import Balances from "./Balances/Balances";
import ExpensesSection from "./Expenses/ExpensesSection";

const Dashboard = ({ timeFrame, ...props }) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <Balances />
      </Grid>
      <Grid item>
        <ExpensesSection />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
