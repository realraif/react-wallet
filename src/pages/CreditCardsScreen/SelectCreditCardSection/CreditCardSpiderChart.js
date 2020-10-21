import React, { useState, useRef, useCallback } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";

import SpiderChart from "components/charts/SpiderChartHighcharts/SpiderChartHighcharts";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const CreditCardSpiderChart = ({ data, height }) => {
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const creditCardsData = useSelector((state) => state.creditCards);  
  const chartRef = useRef();
  const classes = useStyles();

  const hoverHandler = useCallback(
    ({ category, points }) => {
      setSelectedPoints(points);
      setSelectedCategory(category);
    },
    []
  );

  if (!data) return null;

  const expensesInfo = selectedCategory ? (
    <>
      {selectedCategory} Expenses:
      {selectedPoints.map((point) => (
        <div key={point.name}>{`${point.name}: ${point.value}`}</div>
      ))}
    </>
  ) : null;

  return (
    <div className={classes.container}>
      <div>{expensesInfo}</div>
      <SpiderChart
        chartRef={chartRef}
        data={data}
        diameter={height}
        pointRef={creditCardsData.selectedCategory}
        hoverHandler={hoverHandler}
      />
    </div>
  );
};

export default CreditCardSpiderChart;
