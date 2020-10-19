import React from "react";
import WithBox from "HOC/withBox";

import PolarChart from "components/charts/PolarChart/PolarChart";

const ExpensesPolarChart = ({ data, height }) => {
  if (!data) return null;

  return (
    <WithBox height={height}>
      <PolarChart data={data} diameter={height} />
    </WithBox>
  );
};

export default ExpensesPolarChart;
