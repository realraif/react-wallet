import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import sunburst from "highcharts/modules/sunburst";
import getChartOptions from "./NestedDonutOptions";
sunburst(Highcharts);

const NestedDonutChart = ({
  data,
  sliceClicked,
  colors,
  borderColor,
  diameter,
  chartRef,
}) => {
  const styles = { colors, borderColor, diameter };
  const callBackMethods = { sliceClicked };
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

export default React.memo(NestedDonutChart);
