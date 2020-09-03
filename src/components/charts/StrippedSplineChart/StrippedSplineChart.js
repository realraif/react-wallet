import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./chartOptions";
import Styles from "./StrippedSplineChart.module.css";

const StrippedSplineChart = ({ data, color, height, chartRef }) => {
  const styles = { color, height };
  const options = getChartOptions(data, styles);

  return (
    <div className={Styles.ChartContainer}>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default StrippedSplineChart;
