import React from "react";
import { Radar } from "@nivo/radar";
import theme from "./SpiderChartTheme";

const SpiderChart = ({ data, indexBy, keys, colors }) => {

  return (
    <Radar
      width={400}
      height={250}
      margin={{ top: 10, right: 80, bottom: 10, left: 80 }}
      data={data}
      indexBy={indexBy}
      keys={keys}
      theme={theme}
      borderColor={{ theme: 'background' }}
      colors={{ scheme: 'category10' }}
      // colors={(item) => colors[item.id]}
      enableDots={false}
      enableDotLabel={true}
      dotLabelYOffset={4}
      gridShape="linear"
    />
  );
};

export default SpiderChart;
