import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./MultiSplineOptions";
import "./MultiSplineChart.css";

const MultiSplineChart = ({
  data,
  serieClickedHandler,
  colors,
  height,
  chartRef,
}) => {
  const styles = { colors, height };
  const callBackMethods = { serieClickedHandler };
  const options = getChartOptions(data, callBackMethods, styles);

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
