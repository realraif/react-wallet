import React, { useState, useCallback, useRef } from "react";

import CandlestickChart from "components/charts/CandlestickChart/CandlestickChart";
import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";
import getData from "./mockdata";

const BalanceCandlestick = ({ height }) => {
  const [selectedPoint, setSelectedPoint] = useState([]);
  const chartRef = useRef();
  const data = getData();

  const pointSelected = useCallback((serie) => {
    setSelectedPoint(serie);
  }, []);

  return (
    <WithBox>
      <CandlestickChart
        data={data}
        height={height}
        serieClickedHandler={pointSelected}
        chartRef={chartRef}
      />
      <div>{selectedPoint.name}</div>
    </WithBox>
  );
};

export default withSection(BalanceCandlestick);
