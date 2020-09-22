import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import styles from "./GroupedBarChart.module.css";
import options from "./GroupedBarOptions";

const GroupedBarChart = ({ data, bars, indexName, barClicked, height }) => {
  const dynamicStyle = {
    height: height,
  };

  return (
    <div className={styles.ChartWrapper} style={dynamicStyle}>
      <ResponsiveBar
        data={data}
        keys={bars}
        indexBy={indexName}
        onClick={barClicked}
        {...options}
      />
    </div>
  );
};

export default React.memo(GroupedBarChart);
