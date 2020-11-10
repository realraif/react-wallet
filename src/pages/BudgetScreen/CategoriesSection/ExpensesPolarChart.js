import React from "react";
import { useTheme } from "@material-ui/core";

import PolarChart from "components/charts/PolarChart/PolarChart";

const ExpensesPolarChart = ({ data, height }) => {
  const theme = useTheme();

  const colorScheme = theme.charts.polar;

  if (!data) return null;

  return <PolarChart data={data} diameter={height} colors={colorScheme} />;
};

export default ExpensesPolarChart;
