import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import Donut from "./ExpensesDonut/ExpensesDonut";
import ExpensesMap from "./ExpensesMap/ExpensesMap";
import ExpensesBarChart from "./ExpensesBarChart/ExpensesBarChart";

const ExpensesSection = (props) => {
  const theme = useTheme();
  const dashboard = useSelector((state) => state.dashboard);

  const height = theme.sections.overview.expenses.height;

  return (
    <Grid container justify="space-between" spacing={4} alignItems="center">
      <Grid item xs={12} lg={6}>
        <ExpensesMap data={dashboard.mapChart} height={height} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Donut data={dashboard.donutChart} height={height} />
      </Grid>

      <Grid item xs={12}>
        <ExpensesBarChart data={dashboard.barChart} />
      </Grid>
    </Grid>
  );
};

export default withSection(ExpensesSection, "Expenses");
