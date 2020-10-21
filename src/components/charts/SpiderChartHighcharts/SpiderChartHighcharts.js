import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import getChartOptions from "./SpiderChartOptions";
HighchartsMore(Highcharts);

const SpiderChart = ({ data, diameter, chartRef, serieClickedHandler }) => {
  const callBackMethods = { serieClickedHandler };
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
