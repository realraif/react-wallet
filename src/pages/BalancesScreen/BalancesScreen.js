import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import { fetchBalances } from "./balancesSlice";
import SelectBalanceSection from "./SelectBalanceSection/SelectBalanceSection";
import BalanceCandlestick from "./BalanceCandlestick/BalanceCandlestick";

const Balances = ({ timeFrame, ...props }) => {
  const dispatch = useDispatch();
  const balances = useSelector((state) => state.balances);

  useEffect(() => {
    dispatch(fetchBalances());
  }, [dispatch]);

  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <SelectBalanceSection />
      </Grid>
      <Grid item>
        {balances.candlestick ? (
          <BalanceCandlestick data={balances.candlestick} />
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Balances;
