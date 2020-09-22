import React, { useState, useCallback } from "react";
import { useTheme } from "@material-ui/styles";
import WithBox from "HOC/withBox";

import DonutChart from "components/charts/NestedDonutChart/NestedDonutChart";
import data from "./mockdata";

const ExpensesDonut = ({ height }) => {
  const [selectedPoints, setSelectedPoints] = useState([]);
  const theme = useTheme();
  const colors = theme.charts.colors;
  const borderColor = theme.charts.pieBorder;

  const sliceClicked = useCallback((sp) => {
    let points = sp.map((slice) => {
      return slice.name;
    });
    setSelectedPoints(points);
  }, []);

  return (
    <WithBox height={height}>
      <DonutChart
        data={data}
        diameter={height * 0.9}
        colors={colors}
        borderColor={borderColor}
        sliceClicked={sliceClicked}
      />
      <div>{selectedPoints}</div>
    </WithBox>
  );
};

export default ExpensesDonut;
