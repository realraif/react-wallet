import React, { useState, useCallback } from "react";
import { useTheme } from "@material-ui/styles";
import WithBox from "HOC/withBox";

import DonutChart from "components/charts/NestedDonutChart/NestedDonutChart";
import data from "./mockdata";

const ExpensesDonut = (props) => {
  const [selectedPoints, setSelectedPoints] = useState([]);
  var theme = useTheme();
  const colors = theme.charts.colors;

  const setSelectedSlices = useCallback((sp) => {
    let points = sp.map((slice) => {
      return slice.name;
    });
    setSelectedPoints(points);
  }, []);

  return (
    <WithBox>
      <DonutChart
        data={data}
        diameter={250}
        colors={colors}
        setSelectedSlices={setSelectedSlices}
      />
      <div>{selectedPoints}</div>
    </WithBox>
  );
};

export default ExpensesDonut;
