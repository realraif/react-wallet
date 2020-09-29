import React from "react";

import SpiderChart from "components/charts/SpiderChart/SpiderChart";
import data from "./mockdata";

const CreditCardSpiderChart = ({ height }) => {
  return (
    <SpiderChart
      data={data}
    />
  );
};

export default CreditCardSpiderChart;
