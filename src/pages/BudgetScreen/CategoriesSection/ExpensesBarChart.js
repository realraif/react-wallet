import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/styles";

import { categorySelected } from "../budgetSlice";
import GroupedBarChart from "components/charts/GroupedBarChart/GroupedBarChart";

const ExpensesBarChart = ({ data, height, categoryType }) => {
  const dispatch = useDispatch();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const theme = useTheme();

  const barHovered = useCallback(
    (bar) => {
      const category = bar ? bar.id.toLowerCase() : null;
      dispatch(categorySelected({ category }));
    },
    [dispatch]
  );

  if (!data) return null;

  return (
    <GroupedBarChart
      data={data[categoryType]}
      isStacked={isSmallScreen}
      barHovered={barHovered}
      indexName="time"
      themeColors={theme.charts.colors}
      height={height}
    />
  );
};

export default ExpensesBarChart;
