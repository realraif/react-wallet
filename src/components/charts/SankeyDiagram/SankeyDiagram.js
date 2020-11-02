import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import styles from "./SankeyDiagram.module.css";
import options from "./SankeyDiagramOptions";

const SankeyDiagram = ({ data, height, selectedCategory }) => {
  return (
    <div className={styles.ChartWrapper} style={{ height: height }}>
      <ResponsiveSankey data={data} {...options} />
    </div>
  );
};

export default SankeyDiagram;
