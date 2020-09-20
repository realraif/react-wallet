import React, { useState, useRef } from "react";
import NumberFormat from "react-number-format";

import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import { getPercentDiff } from "utils";
import SplineChart from "components/charts/StrippedSplineChart/StrippedSplineChart";
import Status from "./BalanceStatus";

const useStyles = makeStyles((theme) => ({
  chart: {
    width: "100%",
    marginLeft: -5,
  },
  balance: {
    display: "flex",
    justifyContent: "space-between",
  },
  balanceId: {
    color: "#9191af",
  },
  balanceText: {
    fontSize: 30,
    fontWeight: 500,
    marginRight: 12,
  },
  currency: {
    fontSize: 12,
    color: "#9191af",
    textTransform: "capitalize",
  },
  account: {
    color: "#9191af",
    margin: "14px 30px",
  },
}));

const BalanceCard = (props) => {
  const [elevation, setElevation] = useState(false);
  const classes = useStyles();
  const chartRef = useRef();
  const currentBalance = props.balanceTrend[props.balanceTrend.length - 1];
  const status = getPercentDiff(props.balanceTrend[0], currentBalance);

  const selectCard = () => {
    setElevation((oldElevation) => !oldElevation);
  };

  return (
    <Card elevation={elevation ? 5 : 0}>
      <CardActionArea onClick={selectCard}>
        <CardContent>
          <Typography gutterBottom className={classes.balanceID}>
            {props.accountID}
          </Typography>

          <div className={classes.balance}>
            <div>
              <NumberFormat
                className={classes.balanceText}
                value={currentBalance.toFixed(2)}
                displayType={"text"}
              />
              <span className={classes.currency}>{props.currency}</span>
            </div>
            <Status status={status} timeFrameText={props.timeFrameText} />
          </div>
        </CardContent>

        <div className={classes.chart}>
          <SplineChart
            chartRef={chartRef}
            data={props.balanceTrend}
            height="50"
            color={props.color}
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default BalanceCard;
