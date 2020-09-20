import React, { useState, useRef } from "react";
import NumberFormat from "react-number-format";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import RadialBarChart from "components/charts/RadialBarChart/RadialBarChart";

const useStyles = makeStyles((theme) => ({
  chart: {},
  activity: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const CreditCard = (props) => {
  const [elevation, setElevation] = useState(false);
  const classes = useStyles();
  const chartRef = useRef();

  const selectCard = () => {
    setElevation((oldElevation) => !oldElevation);
  };

  const expensePercent = (props.expense * 100) / props.creditLimit;

  return (
    <Card elevation={elevation ? 5 : 0}>
      <CardActionArea onClick={selectCard}>
        <CardContent>
          <Typography gutterBottom>{props.cardID}</Typography>
        </CardContent>
        <div className={classes.activity}>
          <div>
            <NumberFormat
              className={classes.balanceText}
              value={props.expense.toFixed(2)}
              displayType={"text"}
            />
            <span className={classes.currency}>{props.currency}</span>
          </div>
          <div className={classes.activity}>
            <RadialBarChart
              chartRef={chartRef}
              data={{percentage: expensePercent, name:"Expense"}}
              diameter={80}
            />
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default CreditCard;
