import React, { useState, useCallback } from "react";

import MultiSplineChart from "components/charts/MultiSplineHighcharts/MultiSplineHighcharts";
import data from "./mockdata";

const BalanceSplineChart = (props) => {
  const [selectedPoint, setSelectedPoint] = useState([]);

  const pointSelected = useCallback((serie) => {
    setSelectedPoint(serie);
  }, []);

  return (
    <>
      <MultiSplineChart
        data={data}
        serieClickedHandler={pointSelected}
      />

      <div>{selectedPoint.name}</div>
    </>
  );
};

export default BalanceSplineChart;
