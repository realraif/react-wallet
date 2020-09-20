import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  balanceStatus: {
    textAlign: "right",
    fontWeight: 500,
  },
  timeframe: {
    color: "#9191af",
  },
}));

const BalanceStatus = (props) => {
  const classes = useStyles();
  const isNegativeTrend = props.status < 0;
  const status = Math.abs(props.status);

  return (
    <div className={classes.balanceStatus}>
      <Typography color={isNegativeTrend ? "error" : "primary"}>
        {isNegativeTrend ? "-" : "+"}
        {status}%
      </Typography>

      <div className={classes.timeframe}>{props.timeFrameText}</div>
    </div>
  );
};

export default BalanceStatus;
