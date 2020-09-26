import React from "react";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./MultiStockOptions";

const MultiStockChart = ({
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
    <div>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default React.memo(MultiStockChart);
