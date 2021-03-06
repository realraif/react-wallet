import React from "react";
import { Line } from "react-chartjs-2";
import { getChartDatasets, options } from "./MultiSplineChartOptions";

const MultiSplineChart = ({
  dataSeries,
  labels,
  chartRef,
  pointClickedHandler,
}) => {
  const datasets = getChartDatasets(dataSeries);

  return (
    <Line
      data={{ datasets, labels }}
      options={options}
      ref={chartRef}
      onElementsClick={pointClickedHandler}
    />
  );
};

export default MultiSplineChart;
