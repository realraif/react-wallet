import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@material-ui/styles";
import WithBox from "HOC/withBox";

import DonutChart from "components/charts/NestedDonutChart/NestedDonutChart";
import { cardsSelected } from "../dashboardSlice";

const ExpensesDonut = ({ data, height }) => {
  const dispatch = useDispatch();
  const [selectedSlices, setSelectedSlices] = useState([]);
  const theme = useTheme();
  const colors = theme.charts.colors;
  const borderColor = theme.charts.pieBorder;

  const sliceClicked = useCallback((slices) => {
    setSelectedSlices(slices);
    dispatch(cardsSelected({ cards: slices }));
  }, [dispatch]);

  if (!data) return null;

  const expensesInfo = selectedSlices ? (
    <>
      {selectedSlices.map((slice) => (
        <div key={slice.name}>
          <div>{slice.name}</div>
          {`${slice.percentageFromTotal}% of expenses`}
        </div>
      ))}
    </>
  ) : null;

  return (
    <WithBox height={height}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{expensesInfo}</div>
        <DonutChart
          data={data}
          diameter={height * 0.9}
          colors={colors}
          borderColor={borderColor}
          sliceClicked={sliceClicked}
        />
      </div>
    </WithBox>
  );
};

export default ExpensesDonut;
