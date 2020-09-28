import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from 'highcharts/highcharts-more';
import getChartOptions from "./PolarChartOptions";
HighchartsMore(Highcharts);

const PolarChart = ({
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

export default React.memo(PolarChart);
