import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import styles from "./GroupedBarChart.module.css";
import options from "./GroupedBarOptions";

const GroupedBarChart = ({
  data,
  bars,
  indexName,
  barClicked,
  height,
  isStacked,
  colors,
}) => {

  return (
    <div className={styles.ChartWrapper} style={{ height: height }}>
      <ResponsiveBar
        data={data}
        keys={bars}
        // colors={(bar) => colors[bar.id]}
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
