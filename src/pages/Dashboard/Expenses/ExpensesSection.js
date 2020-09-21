import React from "react";
import { Grid } from "@material-ui/core";

import withSection from "HOC/withSection";
import Donut from "./ExpensesDonut/ExpensesDonut";
import ExpensesMap from "../ExpensesMap/ExpensesMap";

const ExpensesSection = (props) => {
  return (
    <Grid container justify="space-between" spacing={6} alignItems="center">
      <Grid item xs={12} md={12} lg={6}>
        <ExpensesMap />
      </Grid>
      <Grid item xs={12} md={12} lg={6}>
        <Donut />
      </Grid>
    </Grid>
  );
};

export default withSection(ExpensesSection, "Expenses");
