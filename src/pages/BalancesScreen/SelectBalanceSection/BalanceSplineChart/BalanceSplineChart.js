import React, { useState, useCallback } from "react";

import MultiSplineChart from "components/charts/MultiSplineChart/MultiSplineChart";
import { dataSeries, labels } from "./mockdata";

const BalanceSplineChart = (props) => {
  const [selectedPoints, setSelectedPoints] = useState([]);

  const pointSelected = useCallback((points, clickEvent) => {
    setSelectedPoints(points);
  }, []);

  return (
    <>
      <MultiSplineChart
        dataSeries={dataSeries}
        labels={labels}
        pointClickedHandler={pointSelected}
      />

      <div>{selectedPoints.map((point) => point._datasetIndex)}</div>
    </>
  );
};

export default BalanceSplineChart;
