import React, { useState, useCallback, useRef } from "react";

import CandlestickChart from "components/charts/CandlestickChart/CandlestickChart";
import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";

const BalanceCandlestick = ({ data, height }) => {
  const [selectedPoint, setSelectedPoint] = useState([]);
  const chartRef = useRef();

  const pointSelected = useCallback((candle) => {
    setSelectedPoint(candle);
  }, []);

  return (
    <WithBox>
      <CandlestickChart
        data={data}
        height={height}
        candleClickedHandler={pointSelected}
        chartRef={chartRef}
      />
      <div>{selectedPoint.name}</div>
    </WithBox>
  );
};

export default withSection(BalanceCandlestick);
