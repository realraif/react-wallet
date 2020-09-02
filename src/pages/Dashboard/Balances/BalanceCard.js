import React from "react";
import NumberFormat from "react-number-format";

import SplineChart from "components/charts/StrippedSplineChart/StrippedSplineChart";
import Status from "./BalanceStatus";
import Styles from "./BalanceCard.module.css";

function calcStatus(startValue, endValue) {
  var percentageChange = ((endValue - startValue) / startValue) * 100;
  return parseInt(percentageChange);
}

const BalanceChart = (props) => {
  var currentBalance = props.balanceTrend[props.balanceTrend.length - 1];
  var status = calcStatus(props.balanceTrend[0], currentBalance);

  return (
    <div className={Styles.BalanceChart}>
      <div className={Styles.Account}>{props.accountID}</div>
      <div className={Styles.Balance}>
        <div className={Styles.BalanceText}>
          <NumberFormat
            value={currentBalance.toFixed(2)}
            displayType={"text"}
          />
        </div>
        <div className={Styles.Currency}>{props.currency}</div>

        <div className={Styles.Status}>
          <Status status={status} />
        </div>
      </div>
      <div className={Styles.Chart}>
        <SplineChart
          data={props.balanceTrend}
          height="70"
          color={props.color}
        />
      </div>
    </div>
  );
};

export default BalanceChart;
