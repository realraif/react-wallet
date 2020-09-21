import React from "react";
import WithBox from "HOC/withBox";

import { data, bars } from "./mockdata";
import GroupedBarChart from "components/charts/GroupedBarChart/GroupedBarChart";

const ExpensesBarChart = (props) => {
  return (
    <WithBox>
      <GroupedBarChart data={data} bars={bars} indexName="time" height={300} />
    </WithBox>
  );
};

export default ExpensesBarChart;
