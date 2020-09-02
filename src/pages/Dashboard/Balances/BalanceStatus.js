import React from "react";
import { Typography } from "@material-ui/core";

import Styles from "./BalanceStatus.module.css";

const BalanceStatus = (props) => {
  const negativeTrend = props.status < 0;
  const status = Math.abs(props.status);

  return (
    <div className={Styles.BalanceStatus}>
      
      <Typography color={negativeTrend ? "error" : "primary"}>
        {negativeTrend ? "-" : "+"}
        {status}%
      </Typography>

      <div className={Styles.Timeframe}>this week</div>
    </div>
  );
};

export default BalanceStatus;
