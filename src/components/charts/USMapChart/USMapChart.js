import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import maps from "highcharts/modules/map";

import Styles from "./WorldMapChart.module.css";

maps(Highcharts);

const USMapChart = ({ data, height }) => {
  const options = getChartOptions(data, { height });

  const mapOptions = {
    ...genericMapOptions,
    chart: {
      ...genericMapOptions.chart,
      height: props.height || 200,
    },
    series: [...genericMapOptions.series].concat(bubbleSeriesList),
  };

  return (
    <div className={Styles.ChartContainer}>
      <HighchartsReact
        options={options}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );
};

export default USMapChart;
