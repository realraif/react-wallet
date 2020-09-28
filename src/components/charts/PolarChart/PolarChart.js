import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import getChartOptions from "./PolarChartOptions";
HighchartsMore(Highcharts);

const PolarChart = ({ data, diameter, chartRef }) => {
  const options = getChartOptions(data, { diameter });

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
