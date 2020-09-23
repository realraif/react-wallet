import React from "react";
import { Grid } from "@material-ui/core";
import SelectBalanceSection from "./SelectBalanceSection/SelectBalanceSection";

const Balances = ({ timeFrame, ...props }) => {
  return (
    <Grid container direction="column" alignItems="stretch">
      <Grid item>
        <SelectBalanceSection />
      </Grid>
    </Grid>
  );
};

export default Balances;
