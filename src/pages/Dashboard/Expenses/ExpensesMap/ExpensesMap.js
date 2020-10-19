import React, { useState, useCallback } from "react";
import WithBox from "HOC/withBox";

import USMapChart from "components/charts/USMapChart/USMapChart";

const ExpensesMap = ({ data, height }) => {
  const [selectedState, setSelectedStates] = useState();

  const stateSelected = useCallback((usState) => {
    setSelectedStates(usState.name);
  }, []);

  if (!data) return null;

  return (
    <WithBox height={height}>
      <USMapChart
        data={data}
        mapClicked={stateSelected}
        height={height * 0.9}
      />
      <div>{selectedState}</div>
    </WithBox>
  );
};

export default ExpensesMap;
