import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import styles from "./USMapChart.module.css";

import getChartOptions from "./USMapOptions";

const USMapChart = ({ data, mapClicked, chartRef, height }) => {
  const callBackMethods = { mapClicked };
  const options = getChartOptions(data, callBackMethods, { height });

  return (
    <div className={styles.MapWrapper}>
      <HighchartsReact
        options={options}
        ref={chartRef}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );
};

export default React.memo(USMapChart);
