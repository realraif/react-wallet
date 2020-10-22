import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./MultiSplineOptions";
import "./MultiSplineChart.css";
import { removeAllSeries } from "../chartUtils";

const MultiSplineChart = ({
  data,
  serieClickedHandler,
  chartRef,
  height,
  selectedColor,
  selectedId,
}) => {
  const styles = { selectedColor, height };
  const callBackMethods = { serieClickedHandler };
  removeAllSeries(chartRef.current);
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
