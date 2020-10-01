import React, { useState, useCallback, useRef } from "react";

import MultiStockChart from "components/charts/MultiStockChart/MultiStockChart";
import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";

import data from "./mockdata";

const CategoryExpensesChart = ({ height }) => {
  const [selectedPoint, setSelectedPoint] = useState([]);
  const chartRef = useRef();

  const pointSelected = useCallback((serie) => {
    setSelectedPoint(serie);
  }, []);

  return (
    <WithBox>
      <MultiStockChart
        data={data}
        height={height}
        serieClickedHandler={pointSelected}
        chartRef={chartRef}
      />
      <div>{selectedPoint.name}</div>
    </WithBox>
  );
};

export default withSection(CategoryExpensesChart, "Categories");
