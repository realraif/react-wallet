import React from "react";

import SpiderChart from "components/charts/SpiderChart/SpiderChart";
import { data, keys } from "./mockdata";

const CreditCardSpiderChart = ({ height }) => {
  return (
    <SpiderChart data={data} keys={keys} height={height} indexBy="category" />
  );
};

export default CreditCardSpiderChart;
