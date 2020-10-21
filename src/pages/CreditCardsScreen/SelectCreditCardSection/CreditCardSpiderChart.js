import React, { useState, useRef, useCallback } from "react";
import SpiderChart from "components/charts/SpiderChartHighcharts/SpiderChartHighcharts";

const CreditCardSpiderChart = ({ data, height }) => {
  const [selectedPoint, setSelectedPoint] = useState([]);
  const chartRef = useRef();

  const pointSelected = useCallback(({name, value, category}) => {
    setSelectedPoint({bank: name, expenses: value, category});
  }, []);

  if (!data) return null;

  return (
    <SpiderChart
      chartRef={chartRef}
      data={data}
      diameter={height}
      serieClickedHandler={pointSelected}
    />
  );
};

export default CreditCardSpiderChart;
