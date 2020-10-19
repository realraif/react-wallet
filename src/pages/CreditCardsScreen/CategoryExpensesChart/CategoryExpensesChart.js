import React, { useState, useCallback, useRef } from "react";

import MultiStockChart from "components/charts/MultiStockChart/MultiStockChart";
import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";

const CategoryExpensesChart = ({ data, height }) => {
  const [selectedPoint, setSelectedPoint] = useState([]);
  const chartRef = useRef();

  const pointSelected = useCallback((serie) => {
    setSelectedPoint(serie);
  }, []);

  if (!data) return null;

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
