import React, { useState, useRef } from "react";
import NumberFormat from "react-number-format";

import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

import SplineChart from "components/charts/StrippedSplineChart/StrippedSplineChart";
import Status from "./BalanceStatus";
import Styles from "./BalanceCard.module.css";

function calcStatus(startValue, endValue) {
  var percentageChange = ((endValue - startValue) / startValue) * 100;
  return parseInt(percentageChange);
}

const BalanceCard = (props) => {
  const [elevation, setElevation] = useState(false);
  const chartRef = useRef();
  const currentBalance = props.balanceTrend[props.balanceTrend.length - 1];
  const status = calcStatus(props.balanceTrend[0], currentBalance);

  const selectCard = () => {
    setElevation((oldElevation) => !oldElevation);
  };

  return (
    <Card elevation={elevation ? 5 : 0}>
      <CardActionArea onClick={selectCard}>
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
            chartRef={chartRef}
            data={props.balanceTrend}
            height="70"
            color={props.color}
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default BalanceCard;
