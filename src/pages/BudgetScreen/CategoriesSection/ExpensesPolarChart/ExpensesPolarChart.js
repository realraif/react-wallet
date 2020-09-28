import React from "react";
import WithBox from "HOC/withBox";

import PolarChart from "components/charts/PolarChart/PolarChart";

const ExpensesPolarChart = ({ height }) => {
  return (
    <WithBox height={height}>
      <PolarChart diameter={height} />
    </WithBox>
  );
};

export default ExpensesPolarChart;
