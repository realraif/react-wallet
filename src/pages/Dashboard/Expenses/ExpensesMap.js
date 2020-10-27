import React, { useState, useCallback, useRef } from "react";
import WithBox from "HOC/withBox";

import USMapChart from "components/charts/USMapChart/USMapChart";

const getStatesCodes = (cardsData) => {
  const codes = cardsData.reduce((arr, obj) => {
    return [...arr, ...obj.info.states];
  }, []);
  return [...new Set(codes)];
};

const updateStateColor = (chart, stateCode) => {
  chart.get(stateCode).update({ color: "red" });
};

const ExpensesMap = ({ mapData, selectedCards, height }) => {
  const [selectedState, setSelectedStates] = useState();
  const chartRef = useRef();

  const stateSelected = useCallback((usState) => {
    setSelectedStates(usState.name);
  }, []);

  const updateMapState = useCallback(() => {
    if (!chartRef.current || !selectedCards) return;

    const statesCodes = getStatesCodes(selectedCards);
    statesCodes.forEach((code) => {
      updateStateColor(chartRef.current.chart, code);
    });
  }, [selectedCards]);

  if (!mapData) return null;

  return (
    <WithBox height={height}>
      <USMapChart
        data={mapData}
        chartRef={chartRef}
        updateMapState={updateMapState}
        mapClicked={stateSelected}
        height={height * 0.9}
      />
      <div>{selectedState}</div>
    </WithBox>
  );
};

export default ExpensesMap;
