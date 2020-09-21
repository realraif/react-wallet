import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import maps from "highcharts/modules/map";
import styles from "./USMapChart.module.css";

import getChartOptions from "./USMapOptions";

maps(Highcharts);

const USMapChart = ({ data, mapClicked, height }) => {
  const callBackMethods = { mapClicked };
  const options = getChartOptions(data, callBackMethods, { height });

  return (
    <div className={styles.MapWrapper}>
      <HighchartsReact
        options={options}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );
};

export default USMapChart;
