import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@material-ui/styles";
import WithBox from "HOC/withBox";

import DonutChart from "components/charts/NestedDonutChart/NestedDonutChart";
import { cardsSelected } from "../dashboardSlice";

const ExpensesDonut = ({ data, selectedCards, height }) => {
  const dispatch = useDispatch();
  const [selectedSlices, setSelectedSlices] = useState([]);
  const chartRef = useRef();
  const theme = useTheme();
  const colors = theme.charts.colors;
  const borderColor = theme.charts.pieBorder;

  const sliceClicked = useCallback(
    (slices) => {
      setSelectedSlices(slices);
      dispatch(cardsSelected({ cards: slices }));
    },
    [dispatch]
  );

  useEffect(() => {
    if (!chartRef.current) return;
    clearUnselectSlices(chartRef.current.chart, selectedCards);
    selectSlices(chartRef.current.chart, selectedCards);
  }, [selectedCards]);

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
          chartRef={chartRef}
          borderColor={borderColor}
          sliceClicked={sliceClicked}
        />
      </div>
    </WithBox>
  );
};

const clearUnselectSlices = (chart, selectedCards) => {
  const points = chart.getSelectedPoints();
  const selectedCardsIds = selectedCards.map((c) => c.id);

  points.forEach((point) => {
    const isSelected = selectedCardsIds.includes(point.id);
    if (isSelected) return;
    point.select(false, true);
  });
};

const selectSlices = (chart, selectedCards) => {
  selectedCards.forEach((card) => {
    const slice = chart.get(card.id);
    slice.select(true, true);
    slice.update({ sliced: true });
  });
};

export default ExpensesDonut;
