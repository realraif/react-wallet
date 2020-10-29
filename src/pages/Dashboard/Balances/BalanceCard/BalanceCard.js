import React, { useRef } from "react";
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
    alignItems: "center",
    justifyContent: "space-between",
  },
  balanceText: {
    fontSize: "1.9rem",
    fontWeight: 500,
    marginRight: 12,
  },
  currency: {
    fontSize: 12,
    color: "#9191af",
    textTransform: "capitalize",
  },
}));

const BalanceCard = ({
  balanceTrend,
  accountID,
  currency,
  isSelected,
  color,
  timeFrameText,
  toggleSelection,
}) => {
  const classes = useStyles();
  const chartRef = useRef();
  const currentBalance = balanceTrend[balanceTrend.length - 1];
  const status = getPercentDiff(balanceTrend[0], currentBalance);

  const handleCardClick = () => {
    toggleSelection(isSelected);
  };

  return (
    <Card elevation={isSelected ? 5 : 0}>
      <CardActionArea onClick={handleCardClick}>
        <CardContent>
          <Typography variant="subtitle1">{accountID}</Typography>

          <div className={classes.balance}>
            <div>
              <NumberFormat
                thousandSeparator={true}
                fixedDecimalScale={true}
                decimalScale={2}
                className={classes.balanceText}
                value={currentBalance}
                displayType={"text"}
              />
              <span className={classes.currency}>{currency}</span>
            </div>
            <Status status={status} timeFrameText={timeFrameText} />
          </div>
        </CardContent>

        <div className={classes.chart}>
          <SplineChart
            chartRef={chartRef}
            data={balanceTrend}
            height={40}
            color={color}
          />
        </div>
      </CardActionArea>
    </Card>
  );
};

export default BalanceCard;
