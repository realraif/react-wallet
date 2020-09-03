import React from "react";
import NumberFormat from "react-number-format";

import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import SplineChart from "components/charts/StrippedSplineChart/StrippedSplineChart";
import Status from "./BalanceStatus";
import Styles from "./BalanceCard.module.css";

function calcStatus(startValue, endValue) {
  var percentageChange = ((endValue - startValue) / startValue) * 100;
  return parseInt(percentageChange);
}

const BalanceCard = (props) => {
  var currentBalance = props.balanceTrend[props.balanceTrend.length - 1];
  var status = calcStatus(props.balanceTrend[0], currentBalance);

  return (
    <Card elevation={0}>
      <CardContent>
        <Typography gutterBottom variant="h6">
          {props.accountID}
        </Typography>
        <div className={Styles.Balance}>
          <div className={Styles.BalanceText}>
            <NumberFormat
              value={currentBalance.toFixed(2)}
              displayType={"text"}
            />
          </div>
          <div className={Styles.Currency}>{props.currency}</div>

          <div className={Styles.Status}>
            <Status status={status} timeFrameText={props.timeFrameText} />
          </div>
        </div>
      </CardContent>
      <div className={Styles.Chart}>
        <SplineChart
          data={props.balanceTrend}
          height="70"
          color={props.color}
        />
      </div>
    </Card>
  );
};

export default BalanceCard;
