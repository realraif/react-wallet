import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./NestedDonutOptions";

const NestedDonutChart = ({
  data,
  setSelectedSlices,
  color,
  diameter,
  chartRef,
}) => {
  const styles = { color, diameter };
  const callBackMethods = { setSelectedSlices };
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

export default NestedDonutChart;
