import React from "react";

import SpiderChart from "components/charts/SpiderChart/SpiderChart";
import data from "./mockdata";

const CreditCardSpiderChart = ({ height }) => {
  return (
    <SpiderChart data={data.dataSeries} keys={data.keys} height={height} indexBy="category" />
  );
};

export default CreditCardSpiderChart;
