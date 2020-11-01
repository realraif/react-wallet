import React, { useState, useCallback } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

import WithBox from "HOC/withBox";
import GroupedBarChart from "components/charts/GroupedBarChart/GroupedBarChart";

const ExpensesBarChart = ({ data }) => {
  const [selectedBar, setSelectedBar] = useState({});
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const theme = useTheme();

  const barClicked = useCallback((bar) => {
    setSelectedBar(bar);
  }, []);
  
  if (!data) return null;

  return (
    <WithBox>
      <GroupedBarChart
        data={data.seriesData}
        bars={data.bars}
        isStacked={isSmallScreen}
        barClicked={barClicked}
        indexName="time"
        themeColors={theme.charts.colors}
        height={300}
      />
      <div>{selectedBar.id}</div>
    </WithBox>
  );
};

export default ExpensesBarChart;
