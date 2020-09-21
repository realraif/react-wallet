import React, { useState, useCallback } from "react";
import WithBox from "HOC/withBox";

import USMapChart from "components/charts/USMapChart/USMapChart";
import data from "./mockdata";

const ExpensesMap = (props) => {
  const [selectedState, setSelectedStates] = useState();

  const stateSelected = useCallback((state) => {
    setSelectedStates(state.name);
  }, []);


  return (
    <WithBox>
      <USMapChart
        data={data}
        mapClicked={stateSelected}
        height={250}
      />
      <div>{selectedState}</div>
    </WithBox>
  );
};

export default ExpensesMap;
