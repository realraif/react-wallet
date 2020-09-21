import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import maps from "highcharts/modules/map";

import getChartOptions from "./USMapOptions";

maps(Highcharts);

const USMapChart = ({ data, mapClicked, height }) => {
  const callBackMethods = { mapClicked };
  const options = getChartOptions(data, callBackMethods, { height });

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
