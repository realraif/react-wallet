import React, { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";

import SpiderChart from "components/charts/SpiderChartHighcharts/SpiderChartHighcharts";

const CreditCardSpiderChart = ({ data, height }) => {
  const [selectedPoint, setSelectedPoint] = useState([]);
  const chartRef = useRef();
  const creditCardsData = useSelector((state) => state.creditCards);
  const category =  creditCardsData.selectedCategory;
  if (category) {
    chartRef.current.chart.get(category).onMouseOver();
  }

  const pointSelected = useCallback(({ name, value, category }) => {
    setSelectedPoint({ bank: name, expenses: value, category });
  }, []);

  const hoverHandler = useCallback((category) => {
    console.log(category);
  }, []);

  if (!data) return null;

  return (
    <SpiderChart
      chartRef={chartRef}
      data={data}
      diameter={height}
      hoverHandler={hoverHandler}
      serieClickedHandler={pointSelected}
    />
  );
};

export default CreditCardSpiderChart;
