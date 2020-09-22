import React, { useState, useCallback } from "react";
import WithBox from "HOC/withBox";

import USMapChart from "components/charts/USMapChart/USMapChart";
import data from "./mockdata";

const ExpensesMap = ({ height }) => {
  const [selectedState, setSelectedStates] = useState();

  const stateSelected = useCallback((state) => {
    setSelectedStates(state.name);
  }, []);

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
