import React from "react";
import SpiderChart from "components/charts/SpiderChart/SpiderChart";

const CreditCardSpiderChart = ({ data, height }) => {
  if (!data) return null;

  return (
    <SpiderChart
      data={data.dataSeries}
      keys={data.keys}
      height={height}
      indexBy="category"
    />
  );
};

export default CreditCardSpiderChart;
