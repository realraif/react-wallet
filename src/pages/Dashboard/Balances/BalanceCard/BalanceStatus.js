import React from "react";
import { Typography } from "@material-ui/core";

import Styles from "./BalanceStatus.module.css";


const BalanceStatus = (props) => {
  const isNegativeTrend = props.status < 0;
  const status = Math.abs(props.status);

  return (
    <div className={Styles.BalanceStatus}>
      
      <Typography color={isNegativeTrend ? "error" : "primary"}>
        {isNegativeTrend ? "-" : "+"}
        {status}%
      </Typography>

      <div className={Styles.Timeframe}>{props.timeFrameText}</div>
    </div>
  );
};

export default BalanceStatus;
