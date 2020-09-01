import React from 'react';
import Styles from './BalanceStatus.module.css';


const BalanceStatus = ( props ) => {
  var changeTrend = null;
  if (props.status > 0) {
    changeTrend = <span>+</span>
  } else if (props.status < 0) {
    changeTrend = <span>-</span>
  }

  var status = Math.abs(props.status);
  var timeframe = 'this week';

  return(
    <div className={Styles.BalanceStatus}>
      <div className={(props.status < 0 ? Styles.Red : Styles.Green)}>{changeTrend}{status}%</div>
      <div className={Styles.Timeframe}>{timeframe}</div>
    </div>
  );
};

export default BalanceStatus;
