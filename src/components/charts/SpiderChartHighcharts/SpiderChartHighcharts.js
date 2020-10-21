import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import getChartOptions, { handleCrosshairHover } from "./SpiderChartOptions";

HighchartsMore(Highcharts);
(function (H) {
  H.wrap(H.Axis.prototype, "drawCrosshair", handleCrosshairHover);
})(Highcharts);

const SpiderChart = ({
  data,
  diameter,
  chartRef,
  serieClickedHandler,
  hoverHandler,
}) => {
  const callBackMethods = { serieClickedHandler, hoverHandler };
  const options = getChartOptions(data, callBackMethods, { diameter });

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

export default React.memo(SpiderChart);
