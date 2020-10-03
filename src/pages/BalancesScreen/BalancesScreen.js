import React from "react";
import { Grid } from "@material-ui/core";
import SelectBalanceSection from "./SelectBalanceSection/SelectBalanceSection";
import BalanceCandlestick from "./BalanceCandlestick/BalanceCandlestick";

const Balances = ({ timeFrame, ...props }) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <SelectBalanceSection />
      </Grid>
      <Grid item>
        <BalanceCandlestick />
      </Grid>
    </Grid>
  );
};

export default Balances;
