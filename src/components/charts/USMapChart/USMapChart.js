import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import maps from "highcharts/modules/map";

import getChartOptions from "./USMapOptions";

maps(Highcharts);

const USMapChart = ({ data, height }) => {
  const options = getChartOptions(data, { height });

  return (
    <div>
      <HighchartsReact
        options={options}
        constructorType={"mapChart"}
        highcharts={Highcharts}
      />
    </div>
  );
};

export default USMapChart;
