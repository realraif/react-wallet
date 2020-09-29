import React from "react";
import { Grid } from "@material-ui/core";

import withSection from "HOC/withSection";
import WithBox from "HOC/withBox";
import CreditCardSpiderChart from "./CreditCardSpiderChart/CreditCardSpiderChart";

const SelectBalanceSection = (props) => {
  return (
    <WithBox>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item xs={12} md={6}>
        </Grid>
        <Grid item xs={12} md={6}>
          <CreditCardSpiderChart />
        </Grid>
      </Grid>
    </WithBox>
  );
};

export default withSection(SelectBalanceSection);
