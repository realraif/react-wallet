import React, { useState, useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "@material-ui/styles";
import WithBox from "HOC/withBox";

import DonutChart from "components/charts/NestedDonutChart/NestedDonutChart";
import { setSelectedCards } from "../dashboardSlice";

const ExpensesDonut = ({ data, selectedCards, height }) => {
  const [slicesInfo, setSlicesInfo] = useState([]);
  const dispatch = useDispatch();
  const chartRef = useRef();
  const theme = useTheme();
  const colors = theme.charts.colors;
  const borderColor = theme.charts.pieBorder;

  const sliceClicked = useCallback(
    (slices, isDonutClicked) => {
      setSlicesInfo(slices);
      if (isDonutClicked) {
        dispatch(setSelectedCards({ cards: slices }));
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (!chartRef.current) return;

    clearUnselectSlices(chartRef.current.chart, selectedCards);
    selectSlices(chartRef.current.chart, selectedCards);

    if (!selectedCards.length) {
      setSlicesInfo([]);
    }
  }, [selectedCards]);

  if (!data) return null;

  const expensesInfo = slicesInfo ? (
    <>
      {slicesInfo.map((slice) => (
        <div key={slice.id}>
          <div>{slice.name}</div>
          {`${slice.percentageFromTotal}% of expenses`}
        </div>
      ))}
    </>
  ) : null;

  return (
    <WithBox height={height}>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ height: "100%" }}>{expensesInfo}</div>
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
