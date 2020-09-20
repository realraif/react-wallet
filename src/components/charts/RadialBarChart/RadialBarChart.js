import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./RadialBarChartOptions";
import highchartsMore from "highcharts/highcharts-more.js";
import solidGauge from "highcharts/modules/solid-gauge.js";
import styles from "./RadialBarChart.module.css";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const RadialBarChart = ({ data, diameter, color, chartRef }) => {
  const options = getChartOptions(data, { diameter, color });

  return (
    <div className={styles.ChartWeapper}>
      <div className={styles.TextWrapper}>
        <span className={styles.Text}>{data.percentage.toFixed(1)}%</span>
      </div>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default React.memo(RadialBarChart);
