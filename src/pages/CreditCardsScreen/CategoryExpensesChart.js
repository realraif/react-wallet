import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";

import { categorySelected } from "./creditCardsSlice";
import MultiStockChart from "components/charts/MultiStockChart/MultiStockChart";
import WithBox from "HOC/withBox";
import withSection from "HOC/withSection";

const CategoryExpensesChart = ({ data, height }) => {
  const chartRef = useRef();
  const dispatch = useDispatch();

  const pointSelected = useCallback((category) => {
    dispatch(categorySelected({ category }));
  }, [dispatch]);

  if (!data) return null;

  return (
    <WithBox>
      <MultiStockChart
        data={data}
        height={height}
        serieClickedHandler={pointSelected}
        chartRef={chartRef}
      />
    </WithBox>
  );
};

export default withSection(CategoryExpensesChart, "Categories");
