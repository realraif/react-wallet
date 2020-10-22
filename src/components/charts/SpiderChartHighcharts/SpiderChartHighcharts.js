import React, { useEffect } from "react";
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
  onHoverHandler,
  updateChartState,
}) => {
  const callBackMethods = { onHoverHandler };
  const options = getChartOptions(data, callBackMethods, { diameter });

  useEffect(() => {
    updateChartState();
  }, [updateChartState]);

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
