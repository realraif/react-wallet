import React, { useState } from "react";
import DonutChart from "components/charts/NestedDonutChart/NestedDonutChart";
import data from './mockdata';

const ExpensesDonut = (props) => {
  const [selectedPoints, setSelectedPoints] = useState([]);

  const setSelectedSlices = (sp) => {
    let points = sp.map((slice) => {
      return slice.name;
    });
    setSelectedPoints(points);
  };

  return (
    <>
      <DonutChart data={data} diameter={250} setSelectedSlices={setSelectedSlices} />
      <div>{selectedPoints}</div>
    </>
  );
};

export default ExpensesDonut;
