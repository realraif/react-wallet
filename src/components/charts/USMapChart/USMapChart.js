import React, { useEffect } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import styles from "./USMapChart.module.css";

import getChartOptions from "./USMapOptions";

const USMapChart = ({ data, mapClicked, chartRef, updateMapState, height }) => {
  const callBackMethods = { mapClicked };
  const options = getChartOptions(data, callBackMethods, { height });

  useEffect(() => {
    updateMapState();
  }, [updateMapState]);

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
