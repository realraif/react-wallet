import React from "react";

import MultiSplineChart from "components/charts/MultiSplineChart/MultiSplineChart";
import {dataSeries, labels} from "./mockdata";

const BalanceSplineChart = (props) => {
  return (
    <MultiSplineChart dataSeries={dataSeries} labels={labels} />
  );
};

export default BalanceSplineChart;
