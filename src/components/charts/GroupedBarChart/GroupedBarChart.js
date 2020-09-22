import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import styles from "./GroupedBarChart.module.css";

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
        margin={{ top: 20, right: 20, bottom: 30, left: 40 }}
        padding={0.15}
        innerPadding={1}
        groupMode="grouped"
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderRadius={2}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legendPosition: "middle",
          legendOffset: -40,
        }}
        labelSkipWidth={3}
        labelSkipHeight={14}
        labelTextColor={{ from: "color", modifiers: [["opacity", "1"]] }}
        animate={true}
        motionStiffness={50}
        motionDamping={8}
      />
    </div>
  );
};

export default React.memo(GroupedBarChart);
