import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import stock from "highcharts/modules/stock.js";
import getChartOptions from "./CandlestickOptions";
import "./CandlestickChart.css";
stock(Highcharts);

const CandlestickChart = ({
  data,
  serieClickedHandler,
  colors,
  height,
  chartRef,
}) => {
  const callBackMethods = { serieClickedHandler };
  const options = getChartOptions(data, callBackMethods, { colors, height });

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
