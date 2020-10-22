import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./MultiSplineOptions";
import "./MultiSplineChart.css";
import { removeAllSeries, removePlotband } from "../chartUtils";

const MultiSplineChart = ({
  data,
  serieClickedHandler,
  plotRange,
  chartRef,
  height,
  selectedColor,
  selectedId,
}) => {
  const styles = { selectedColor, height };
  const callBackMethods = { serieClickedHandler };
  removeAllSeries(chartRef.current);
  removePlotband(chartRef.current, "plot-1", plotRange);
  const options = getChartOptions(data, selectedId, callBackMethods, styles);

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


export default React.memo(MultiSplineChart);
