import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./MultiStockOptions";
import "./MultiStockChart.css";

const MultiStockChart = ({
  data,
  serieClickedHandler,
  colors,
  height,
  chartRef,
}) => {
  const callBackMethods = { serieClickedHandler };
  removeAllSeries(chartRef.current);
  const options = getChartOptions(data, callBackMethods, { colors, height });

  return (
    <div className="ChartContainer">
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

const removeAllSeries = (chartComponent) => {
  if (!chartComponent) return;
  const series = chartComponent.chart.series;
  while (series.length) {
    series[0].remove();
  }
};

export default React.memo(MultiStockChart);
