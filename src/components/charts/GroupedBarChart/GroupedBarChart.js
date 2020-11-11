import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import styles from "./GroupedBarChart.module.css";
import options, { getBarColors, chartMethods } from "./GroupedBarOptions";

const GroupedBarChart = ({
  data,
  indexName,
  barHovered,
  height,
  isStacked,
  themeColors,
}) => {
  const colors = getBarColors(data.bars, themeColors);

  return (
    <div className={styles.ChartWrapper} style={{ height: height }}>
      <ResponsiveBar
        data={data.seriesData}
        keys={data.bars}
        // colors={(bar) => colors[bar.id]}
        tempColors={colors}
        indexBy={indexName}
        onMouseEnter={(data, event) => {
          chartMethods.onMouseEnter(data, event);
          barHovered(data);
        }}
        onMouseLeave={(data, event) => {
          chartMethods.onMouseLeave(data, event);
          barHovered();
        }}
        groupMode={isStacked ? "stacked" : "grouped"}
        enableLabel={isStacked}
        {...options}
      />
    </div>
  );
};

export default React.memo(GroupedBarChart);
