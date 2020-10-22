import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { fetchBalances, onDestroy } from "./balancesSlice";
import SelectBalanceSection from "./SelectBalanceSection/SelectBalanceSection";
import BalanceCandlestick from "./BalanceCandlestick";

const getCandleStickData = ({selectedBalanceId, balancesData}) => {
  if (!balancesData || !selectedBalanceId) return null;
  const selectedBalance = balancesData.find(b => b.id === selectedBalanceId);
  return selectedBalance.candleStickData;
}

const Balances = ({ timeFrame, ...props }) => {
  const dispatch = useDispatch();
  const balances = useSelector((state) => state.balances);
  const candleStickData = getCandleStickData(balances);

  useEffect(() => {
    dispatch(fetchBalances());
    return () => {
      dispatch(onDestroy());
    }
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <SelectBalanceSection data={balances} />
      </Grid>
      <Grid item>
        <BalanceCandlestick data={candleStickData} />
      </Grid>
    </Grid>
  );
};

export default Balances;
