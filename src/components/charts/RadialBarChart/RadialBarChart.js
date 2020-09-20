import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import getChartOptions from "./RadialBarChartOptions";
import highchartsMore from "highcharts/highcharts-more.js"
import solidGauge from "highcharts/modules/solid-gauge.js";

highchartsMore(Highcharts);
solidGauge(Highcharts);

const RadialBarChart = ({ data, chartRef }) => {
  const options = getChartOptions(data, {});

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

export default React.memo(RadialBarChart);
