import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import Donut from "./ExpensesDonut";
import ExpensesMap from "./ExpensesMap";

const ExpensesSection = ({ dashboardData }) => {
  const theme = useTheme();

  const height = theme.sections.overview.expenses.height;

  return (
    <Grid container justify="space-between" spacing={2} alignItems="center">
      <Grid item xs={12} lg={6}>
        <ExpensesMap
          mapData={dashboardData.mapChart}
          selectedCards={dashboardData.selectedCards}
          height={height}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <Donut
          data={dashboardData.donutChart}
          selectedCards={dashboardData.selectedCards}
          height={height}
        />
      </Grid>
    </Grid>
  );
};

export default withSection(ExpensesSection, "Expenses");
