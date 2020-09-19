import React from "react";
import { Grid } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import balancesData from './mockdata';
import BalanceCard from "./BalanceCard/BalanceCard";
import withSection from 'HOC/withSection';

const tempTimeFrame = "this week";

const Balances = (props) => {
  const theme = useTheme();
  const colors = theme.charts.colors;

  return (
    <Grid container justify="space-between" spacing={6} alignItems="center">
      {balancesData.map((balance, index) => (
        <Grid item xs={12} md={6} lg={4} key={balance.id}>
          <BalanceCard
            balanceTrend={balance.trend}
            accountID={balance.id}
            currency={balance.currency}
            color={colors[index]}
            timeFrameText={tempTimeFrame}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default withSection(Balances, "balances");
