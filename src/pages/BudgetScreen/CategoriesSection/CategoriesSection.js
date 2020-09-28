import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import ExpensesPolarChart from "./ExpensesPolarChart/ExpensesPolarChart";

const CategoriesSection = (props) => {
  const theme = useTheme();

  const height = theme.sections.overview.expenses.height;

  return (
    <Grid container justify="space-between" spacing={4} alignItems="center">
      <Grid item xs={12} lg={6}>
      </Grid>
      <Grid item xs={12} lg={6}>
        <ExpensesPolarChart height={height} />
      </Grid>
    </Grid>
  );
};

export default withSection(CategoriesSection);