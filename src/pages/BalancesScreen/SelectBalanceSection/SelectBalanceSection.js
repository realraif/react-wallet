import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import WithBox from "HOC/withBox";
import BalanceSplineChart from "./BalanceSplineChart/BalanceSplineChart";
import BalanceTable from "./BalancesTable/BalancesTable";

const SelectBalanceSection = (props) => {
  const theme = useTheme();

  const height = theme.sections.overview.expenses.height;

  return (
    <WithBox height={height}>
      <Grid container spacing={0} alignItems="stretch">
        <Grid item xs={12} md={6}>
          <BalanceTable />
        </Grid>
        <Grid item xs={12} md={6}>
          <BalanceSplineChart height={height} />
        </Grid>
      </Grid>
    </WithBox>
  );
};

export default withSection(SelectBalanceSection);
