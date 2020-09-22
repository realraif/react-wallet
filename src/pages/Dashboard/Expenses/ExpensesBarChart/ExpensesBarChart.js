import React, { useState, useCallback } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import WithBox from "HOC/withBox";

import { data, bars } from "./mockdata";
import GroupedBarChart from "components/charts/GroupedBarChart/GroupedBarChart";

const ExpensesBarChart = (props) => {
  const [selectedBar, setSelectedBar] = useState({});
  const isSmallScreen = useMediaQuery(theme => theme.breakpoints.down('md'));

  const barClicked = useCallback((bar) => {
    setSelectedBar(bar);
  }, []);

  return (
    <WithBox>
      <GroupedBarChart
        data={data}
        bars={bars}
        isStacked={isSmallScreen}
        barClicked={barClicked}
        indexName="time"
        height={300}
      />
      <div>{selectedBar.id}</div>
    </WithBox>
  );
};

export default ExpensesBarChart;
