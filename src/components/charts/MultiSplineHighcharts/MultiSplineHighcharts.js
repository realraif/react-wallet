import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./MultiSplineOptions";

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
    <div>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={options}
      />
    </div>
  );
};

export default React.memo(MultiSplineChart);
