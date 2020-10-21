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
  hoverHandler,
  pointRef,
}) => {
  const callBackMethods = { hoverHandler };
  const options = getChartOptions(data, callBackMethods, { diameter });

  useEffect(() => {
    if (!!pointRef) {
      chartRef.current.chart.get(pointRef).onMouseOver();
    }
  });

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

export default React.memo(SpiderChart, (prevProps, props) => {
  return prevProps.pointRef === props.pointRef;
});
