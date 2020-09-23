import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import withSection from "HOC/withSection";
import WithBox from "HOC/withBox";
import BalanceSplineChart from "./BalanceSplineChart/BalanceSplineChart";

const SelectBalanceSection = (props) => {
  const theme = useTheme();

  const height = theme.sections.overview.expenses.height;

  return (
    <WithBox>
    <Grid container justify="space-between" spacing={4} alignItems="center">
      <Grid item xs={12} md={6}>
        <BalanceSplineChart height={height} />
      </Grid>
    </Grid>
    </WithBox>
  );
};

export default withSection(SelectBalanceSection);
