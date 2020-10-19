import React, { useState, useCallback } from "react";
import { useTheme } from "@material-ui/core";

import MultiSplineChart from "components/charts/MultiSplineHighcharts/MultiSplineHighcharts";

const BalanceSplineChart = ({ data, height }) => {
  const theme = useTheme();
  const colors = theme.charts.colors;
  const [selectedPoint, setSelectedPoint] = useState([]);

  const pointSelected = useCallback((serie) => {
    setSelectedPoint(serie);
  }, []);

  if (!data) return null;

  return (
    <>
      <MultiSplineChart
        data={data}
        colors={colors}
        height={height}
        serieClickedHandler={pointSelected}
      />

      <div>{selectedPoint.name}</div>
    </>
  );
};

export default BalanceSplineChart;
