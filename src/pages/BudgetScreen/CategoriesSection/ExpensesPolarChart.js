import React, { useRef } from "react";
import { useTheme } from "@material-ui/core";

import PolarChart from "components/charts/PolarChart/PolarChart";

const ExpensesPolarChart = ({ data, height, category }) => {
  const chartRef = useRef();
  const theme = useTheme();
  const colorScheme = theme.charts.polar;

  if (!data) return null;

  return (
    <PolarChart
      data={data[category]}
      diameter={height}
      colors={colorScheme}
      chartRef={chartRef}
    />
  );
};

export default ExpensesPolarChart;
