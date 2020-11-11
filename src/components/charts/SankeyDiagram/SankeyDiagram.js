import React, { useEffect, useState, useRef } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import styles from "./SankeyDiagram.module.css";
import options from "./SankeyDiagramOptions";

const SankeyDiagram = ({
  data,
  height,
  selectedLink,
  selectedCategoryType,
}) => {
  const [sankeyLinks, setSankeyLinks] = useState({});
  const chartRef = useRef();
  const isTarget = selectedCategoryType === "expenses";

  const clickAllSankeyLinks = () => {
    const paths = chartRef.current.getElementsByTagName("path");
    [...paths].forEach((path) => {
      const clickEvent = document.createEvent("SVGEvents");
      clickEvent.initEvent("click", true, true);
      path.dispatchEvent(clickEvent);
    });
  };

  const hoverSelectedPath = () => {
    if (!sankeyLinks[selectedCategoryType]) return;
    let element ;
    if (isTarget) {
      element = sankeyLinks[selectedCategoryType][selectedLink];
    } else {
      element = sankeyLinks[selectedLink][selectedCategoryType];
    }
    const mouseEvent = document.createEvent("SVGEvents");
    mouseEvent.initEvent("mouseover", true, true);
    element.dispatchEvent(mouseEvent);
  };

  useEffect(() => {
    setTimeout(clickAllSankeyLinks);
  }, []);

  useEffect(hoverSelectedPath, [selectedLink]);

  return (
    <div
      ref={chartRef}
      className={styles.ChartWrapper}
      style={{ height: height }}
    >
      <ResponsiveSankey
        data={data}
        {...options}
        onClick={(data, event) => {
          const source = data.source.id.toLowerCase();
          const target = data.target.id.toLowerCase();
          const element = event.target;
          setSankeyLinks((prevState) => ({
            ...prevState,
            [source]: { ...prevState[source], [target]: element },
          }));
        }}
      />
    </div>
  );
};

export default SankeyDiagram;
