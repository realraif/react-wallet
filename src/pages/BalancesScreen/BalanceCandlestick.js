import React, { useCallback, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setZoomRange } from "./balancesSlice";

import CandlestickChart from "components/charts/CandlestickChart/CandlestickChart";
import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";

const BalanceCandlestick = ({ data, height }) => {
  const dispatch = useDispatch();
  const chartRef = useRef();

  const pointSelected = useCallback((candle) => {
    console.log(candle);
  }, []);

  const zoomEventHandler = useCallback(
    ({ isFullRange, min, max }) => {
      let zoomRange = { min, max };
      if (isFullRange) {
        zoomRange = null;
      }
      dispatch(setZoomRange({ zoomRange }));
    },
    [dispatch]
  );

  const initExtremes = () => {
    if (!chartRef.current) return;
    chartRef.current.chart.xAxis[0].setExtremes();
  };

  useEffect(initExtremes, [data]);

  if (!data) return null;

  return (
    <WithBox>
      <CandlestickChart
        data={data}
        height={height}
        candleClickedHandler={pointSelected}
        zoomEventHandler={zoomEventHandler}
        chartRef={chartRef}
      />
    </WithBox>
  );
};

export default withSection(BalanceCandlestick);
