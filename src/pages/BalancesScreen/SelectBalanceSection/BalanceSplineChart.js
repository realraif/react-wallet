import React, { useState, useCallback, useRef } from "react";
import { useSelector } from "react-redux";
import { useTheme } from "@material-ui/core";

import MultiSplineChart from "components/charts/MultiSplineHighcharts/MultiSplineHighcharts";

const BalanceSplineChart = ({ data, selectedId, height }) => {
  const balances = useSelector((state) => state.balances);
  const [selectedPoint, setSelectedPoint] = useState([]);
  const chartRef = useRef();
  const theme = useTheme();
  const selectedColor = theme.charts.colors[0];

  const pointSelected = useCallback((serie) => {
    setSelectedPoint(serie);
  }, []);

  if (!data) return null;

  return (
    <>
      <MultiSplineChart
        data={data}
        height={height}
        chartRef={chartRef}
        serieClickedHandler={pointSelected}
        selectedId={selectedId}
        selectedColor={selectedColor}
      />

      <div>{selectedPoint.name}</div>
    </>
  );
};

export default BalanceSplineChart;
