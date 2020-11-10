import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import styles from "./GroupedBarChart.module.css";
import options, { getBarColors } from "./GroupedBarOptions";

const GroupedBarChart = ({
  data,
  indexName,
  barClicked,
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
        onClick={barClicked}
        groupMode={isStacked ? "stacked" : "grouped"}
        enableLabel={isStacked}
        {...options}
      />
    </div>
  );
};

export default React.memo(GroupedBarChart);
