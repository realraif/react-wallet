import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

import { categorySelected } from "../budgetSlice";
import GroupedBarChart from "components/charts/GroupedBarChart/GroupedBarChart";

const ExpensesBarChart = ({ data, height }) => {
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const theme = useTheme();

  const barClicked = useCallback(
    (bar) => {
      dispatch(categorySelected({ bar }));
    },
    [dispatch]
  );

  if (!data) return null;

  return (
    <GroupedBarChart
      data={data.seriesData}
      bars={data.bars}
      isStacked={isSmallScreen}
      barClicked={barClicked}
      indexName="time"
      themeColors={theme.charts.colors}
      height={height}
    />
  );
};

export default ExpensesBarChart;
