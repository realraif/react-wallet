import React from "react";
import { Grid } from "@material-ui/core";

import withSection from "HOC/withSection";
import WithBox from "HOC/withBox";
import BalanceSplineChart from "./BalanceSplineChart/BalanceSplineChart";
import BalanceTable from "./BalancesTable/BalancesTable";

const SelectBalanceSection = (props) => {
  const lineHeight = 20;
  const padding = 16;
  const row = padding * 2 + 1 + lineHeight;
  const setRowsPerPage = 4;
  const height = row * setRowsPerPage;

  return (
    <WithBox>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <BalanceTable setRowsPerPage={setRowsPerPage} />
        </Grid>
        <Grid item xs={12} md={6}>
          <BalanceSplineChart height={height} />
        </Grid>
      </Grid>
    </WithBox>
  );
};

export default withSection(SelectBalanceSection);
