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
  const prevElement = useRef();
  const isTarget = selectedCategoryType === "expenses";

  const clickAllSankeyLinks = () => {
    const paths = chartRef.current.getElementsByTagName("path");
    [...paths].forEach((path) => {
      path.dispatchEvent(getMouseEvent("click"));
    });
  };

  const getSelectedElement = () => {
    let element;
    if (isTarget) {
      element = sankeyLinks[selectedCategoryType][selectedLink];
    } else {
      element = sankeyLinks[selectedLink][selectedCategoryType];
    }
    return element;
  };

  const hoverSelectedPath = () => {
    if (selectedLink) {
      const element = getSelectedElement();
      element.dispatchEvent(getMouseEvent("mouseover"));
      prevElement.current = element;
    } else if (prevElement.current) {
      prevElement.current.dispatchEvent(getMouseEvent("mouseout"));
    }
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

const getMouseEvent = (eventType) => {
  const mouseEvent = document.createEvent("SVGEvents");
  mouseEvent.initEvent(eventType, true, true);
  return mouseEvent;
};

export default SankeyDiagram;
