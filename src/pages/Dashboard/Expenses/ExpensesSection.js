import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import Donut from "./ExpensesDonut/ExpensesDonut";
import ExpensesMap from "./ExpensesMap/ExpensesMap";
import ExpensesBarChart from "./ExpensesBarChart/ExpensesBarChart";

const ExpensesSection = ({ dashboardData }) => {
  const theme = useTheme();

  const height = theme.sections.overview.expenses.height;

  return (
    <Grid container justify="space-between" spacing={4} alignItems="center">
      <Grid item xs={12} lg={6}>
        <ExpensesMap data={dashboardData.mapChart} height={height} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Donut data={dashboardData.donutChart} height={height} />
      </Grid>

      <Grid item xs={12}>
        <ExpensesBarChart data={dashboardData.barChart} />
      </Grid>
    </Grid>
  );
};

export default withSection(ExpensesSection, "Expenses");
