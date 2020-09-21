import React from "react";
import WithBox from "HOC/withBox";

import data from "./mockdata";
import GroupedBarChart from "components/charts/GroupedBarChart/GroupedBarChart";

const ExpensesBarChart = (props) => {
  return (
    <WithBox>
      <GroupedBarChart data={data} height={300} />
    </WithBox>
  );
};

export default ExpensesBarChart;
