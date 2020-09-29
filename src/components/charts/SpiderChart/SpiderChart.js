import React from "react";
import { Radar } from "@nivo/radar";
import theme from './SpiderChartTheme';

const SpiderChart = ({data}) => {
  return (
    <Radar
      width={500}
      height={500}
      margin={{ top: 60, right: 60, bottom: 60, left: 60 }}
      data={data}
      indexBy="taste"
      keys={["chardonay", "carmenere"]}
      colors={["#ddcb38", "#2b70e2"]}
      theme={theme}
      dotSize={30}
      enableDotLabel={true}
      dotLabelYOffset={4}
      gridShape="linear"
    />
  );
};

export default SpiderChart;