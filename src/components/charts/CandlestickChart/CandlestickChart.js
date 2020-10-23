import React, { useEffect } from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";

import getChartOptions from "./CandlestickOptions";
import "./CandlestickChart.css";

const CandlestickChart = ({
  data,
  candleClickedHandler,
  zoomEventHandler,
  colors,
  height,
  chartRef,
  updateChartState,
}) => {
  const callBackMethods = { candleClickedHandler, zoomEventHandler };
  const options = getChartOptions(data, callBackMethods, { colors, height });

  useEffect(() => {
    updateChartState();
  }, [updateChartState]);

  return (
    <div className="ChartContainer">
      <HighchartsReact
        ref={chartRef}
        constructorType={"stockChart"}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default React.memo(CandlestickChart);
