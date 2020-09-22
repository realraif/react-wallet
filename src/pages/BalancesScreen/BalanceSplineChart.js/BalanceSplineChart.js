import React from "react";

import WithBox from "HOC/withBox";
import MultiSplineChart from "components/charts/MultiSplineChart/MultiSplineChart";
import {dataSeries, labels} from "./mockdata";

const BalanceSplineChart = (props) => {
  return (
    <WithBox>
      <MultiSplineChart dataSeries={dataSeries} labels={labels} />
    </WithBox>
  );
};

export default BalanceSplineChart;
