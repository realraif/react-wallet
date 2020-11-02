import React from "react";
import WithBox from "HOC/withBox";
import { useTheme } from "@material-ui/core";

import PolarChart from "components/charts/PolarChart/PolarChart";

const ExpensesPolarChart = ({ data, height }) => {
  const theme = useTheme();

  const colorScheme = theme.charts.polar;

  if (!data) return null;

  return (
    <WithBox height={height}>
      <PolarChart data={data} diameter={height} colors={colorScheme} />
    </WithBox>
  );
};

export default ExpensesPolarChart;
