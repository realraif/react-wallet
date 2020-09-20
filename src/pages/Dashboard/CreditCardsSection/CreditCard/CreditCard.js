import React, { useState, useRef } from "react";

import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import RadialBarChart from "components/charts/RadialBarChart/RadialBarChart";

const CreditCard = (props) => {
  const [elevation, setElevation] = useState(false);
  const chartRef = useRef();

  const selectCard = () => {
    setElevation((oldElevation) => !oldElevation);
  };

  return (
    <Card elevation={elevation ? 5 : 0}>
      <CardActionArea onClick={selectCard}>
        <CardContent>
          <Typography gutterBottom>{props.cardID}</Typography>
        </CardContent>
          <RadialBarChart
            chartRef={chartRef}
            data={props.balanceTrend}
          />
      </CardActionArea>
    </Card>
  );
};

export default CreditCard;
