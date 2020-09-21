import React from "react";
import WithBox from "HOC/withBox";

import data from "./mockdata";
import GroupedBarChart from "components/charts/GroupedBarChart/GroupedBarChart";

const ExpensesBarChart = (props) => {
  return (
    <WithBox>
      <div style={{ height: "300px" }}>
        <GroupedBarChart data={data} />
      </div>
    </WithBox>
  );
};

export default ExpensesBarChart;
