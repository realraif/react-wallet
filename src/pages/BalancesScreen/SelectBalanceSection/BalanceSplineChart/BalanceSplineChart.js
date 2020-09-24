import React, { useState, useCallback } from "react";
import { useTheme } from "@material-ui/core";

import MultiSplineChart from "components/charts/MultiSplineHighcharts/MultiSplineHighcharts";
import data from "./mockdata";

const BalanceSplineChart = ({ height }) => {
  const theme = useTheme();
  const colors = theme.charts.colors;
  const [selectedPoint, setSelectedPoint] = useState([]);

  const pointSelected = useCallback((serie) => {
    setSelectedPoint(serie);
  }, []);

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
