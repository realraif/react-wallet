import React, { useEffect, useState, useRef } from "react";
import { ResponsiveSankey } from "@nivo/sankey";
import styles from "./SankeyDiagram.module.css";
import options from "./SankeyDiagramOptions";

const SankeyDiagram = ({
  data,
  height,
  selectedLink,
  selectedCategoryType,
  isTarget
}) => {
  const [sankeyLinks, setSankeyLinks] = useState({});
  const containerRef = useRef();
  const { current } = containerRef;
  const prevElement = useRef();

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

  const setLinksData = () => {
    setTimeout(() => {
      if (containerRef.current) {
        clickAllPaths(containerRef.current);
      }
    });
  };

  useEffect(setLinksData, [current]);

  useEffect(hoverSelectedPath, [selectedLink]);

  return (
    <div
      ref={containerRef}
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

const clickAllPaths = (container) => {
  const paths = container.getElementsByTagName("path");
  [...paths].forEach((path) => {
    path.dispatchEvent(getMouseEvent("click"));
  });
};

export default SankeyDiagram;
