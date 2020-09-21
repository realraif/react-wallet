import React from "react";
import WithBox from "HOC/withBox";

import USMapChart from "components/charts/USMapChart/USMapChart";
import data from "./mockdata";

const ExpensesMap = (props) => {
  return (
    <WithBox>
      <USMapChart data={data} height={250} />
    </WithBox>
  );
};

export default ExpensesMap;
