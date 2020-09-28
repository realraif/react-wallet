import React from "react";
import WithBox from "HOC/withBox";

import PolarChart from "components/charts/PolarChart/PolarChart";
import data from './mockdata';

const ExpensesPolarChart = ({ height }) => {
  return (
    <WithBox height={height}>
      <PolarChart data={data} diameter={height} />
    </WithBox>
  );
};

export default ExpensesPolarChart;
